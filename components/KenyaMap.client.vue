<template>
  <div ref="mapEl" class="w-full h-105"></div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import Highcharts from "highcharts/highmaps";

const props = defineProps({
  // County names to highlight.
  highlight: {
    type: Array,
    default: () => ["Nairobi", "Kirinyaga", "Kilifi", "Migori"],
  },
});

const emit = defineEmits(["select"]);

const mapEl = ref(null);
let chart = null;

onMounted(async () => {
  const geojson = await fetch("/kenya-counties.geojson").then((r) => r.json());
  const highlighted = new Set(props.highlight);

  const data = geojson.features.map((f) => {
    const name = f.properties.name;
    const on = highlighted.has(name);
    return { name, color: on ? "#1B5E20" : "#E6EFE3", active: on };
  });

  chart = Highcharts.mapChart(mapEl.value, {
    chart: { map: geojson, backgroundColor: "transparent", spacing: [4, 4, 4, 4] },
    title: { text: undefined },
    credits: { enabled: false },
    legend: { enabled: false },
    mapNavigation: { enabled: false },
    tooltip: {
      useHTML: true,
      backgroundColor: "#1A2016",
      borderWidth: 0,
      style: { color: "#ffffff" },
      formatter() {
        return this.point.active
          ? `<b>${this.point.name} County</b><br/>4 active projects`
          : `<span style="opacity:.7">${this.point.name}</span>`;
      },
    },
    series: [
      {
        data,
        joinBy: "name",
        nullColor: "#E6EFE3",
        borderColor: "#ffffff",
        borderWidth: 0.8,
        states: {
          hover: { borderColor: "#1B5E20", brightness: 0.06 },
        },
        cursor: "pointer",
        point: {
          events: {
            click() {
              if (this.active) emit("select", this.name);
            },
          },
        },
      },
    ],
  });
});

onBeforeUnmount(() => {
  chart?.destroy();
  chart = null;
});
</script>
