<template>
  <section class="">
    <!--Heading-->
    <section
      class="bg-[#0E1C11] bg-[url('/about-hero.webp')] bg-cover bg-center bg-no-repeat w-full pt-20.5 pb-13.5"
    >
      <div class="section text-white" data-aos="fade-right">
        <p class="text-xs tracking-[2px] uppercase mono">Latest</p>
        <p class="text-5xl mt-2.5 playfair font-bold leading-14">
          News & Media
        </p>
        <p class="text-lg text-[#FFFFFFCC] mt-3">
          Stories, events, and updates from our work across Kenya.
        </p>
      </div>
    </section>

    <!--Body-->
    <section class="section py-12 space-y-7">
      <!--Tabs-->
      <nav class="flex flex-wrap gap-2">
        <button
          v-for="t in tabs"
          :key="t.id"
          @click="tab = t.id"
          class="px-4 py-1.5 rounded-sm text-sm font-medium cursor-pointer"
          :class="
            tab === t.id
              ? 'bg-primary text-white'
              : 'bg-white border border-[#0000001F] text-[#5C6B55] hover:bg-primary/10'
          "
        >
          {{ t.label }}
        </button>
      </nav>

      <div data-aos="fade-up" class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="item in filteredItems"
          :key="item.title"
          class="bg-white border border-[#00000014] rounded-lg overflow-hidden"
        >
          <img :src="item.image" :alt="item.alt" loading="lazy" class="w-full" />

          <div class="p-5 space-y-2">
            <div class="flex gap-2">
              <p class="text-[#C47A1A] uppercase text-xs">{{ item.label }}</p>
              <p class="text-[#5C6B55] text-xs">· {{ item.date }}</p>
            </div>

            <p class="playfair font-semibold">{{ item.title }}</p>

            <p class="text-sm text-[#5C6B55]">{{ item.excerpt }}</p>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script setup>
import { computed, ref } from "vue";

const tab = ref("all");

const tabs = [
  { id: "all", label: "All" },
  { id: "success-stories", label: "Success Stories" },
  { id: "events", label: "Events" },
  { id: "blogs", label: "Blogs" },
  { id: "media-features", label: "Media Features" },
];

const items = [
  {
    category: "success-stories",
    label: "Success Stories",
    date: "June 2025",
    image: "/success-1.webp",
    alt: "youths",
    title: "500 Youth Graduate from Digital Skills Programme",
    excerpt:
      "MENTORSPACE celebrates a landmark graduation as 500 young people complete our digital literacy and robotics training programme in Nairobi.",
  },
  {
    category: "events",
    label: "Events",
    date: "May 2025",
    image: "/success-2.webp",
    alt: "programme launch",
    title: "WiSMES Programme Launch in Migori County",
    excerpt:
      "The Women in Sustainable Mining & Environmental Stewardship Initiative was officially launched with over 200 participants.",
  },
  {
    category: "blogs",
    label: "Blogs",
    date: "April 2025",
    image: "/success-3.webp",
    alt: "woman miner",
    title: "The Role of Women in Sustainable Mining: A Kenyan Perspective",
    excerpt:
      "This piece explores how women miners in Migori are transforming the artisanal gold mining sector through responsible practice.",
  },
  {
    category: "success-stories",
    label: "Success Stories",
    date: "March 2025",
    image: "/success-4.webp",
    alt: "women entrepreneurs",
    title: "From Widow to Entrepreneur: Mary's Journey",
    excerpt:
      "Mary Wanjiku joined the Sagana Widows Resource Centre three years ago. Today she runs a thriving agri-business and mentors others.",
  },
  {
    category: "media-features",
    label: "Media Features",
    date: "February 2025",
    image: "/success-5.webp",
    alt: "media feature",
    title: "MENTORSPACE Featured in National Media",
    excerpt:
      "Our community-led approach to youth empowerment and conservation was highlighted in a national broadcast feature.",
  },
];

const filteredItems = computed(() =>
  tab.value === "all" ? items : items.filter((i) => i.category === tab.value)
);
</script>
