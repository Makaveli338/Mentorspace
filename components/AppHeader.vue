<template>
  <section class="sticky top-0 z-50 bg-white! px-8 py-5 border-b border-[#EAECF0]">
    <div class="section flex justify-between items-center">
    <NuxtLink to="/">
     <img src="/mentorspace-logo.png" alt="Mentorspace logo" class="w-63.75 h-10">
     </NuxtLink>

     <div class="sm:flex items-center gap-6 w-fit mx-auto hidden">
       <a
         v-for="item in navItems"
         :key="item.label"
         :href="'/' + item.hash"
         class="font-semibold cursor-pointer transition-colors hover:text-[#F17D24]"
         :class="isActive(item) ? 'text-[#F17D24]' : 'text-[#14532D]'"
         @click.prevent="onNavClick(item)"
       >{{ item.label }}</a>
       <NuxtLink
         to="/contact"
         class="font-semibold transition-colors hover:text-[#F17D24]"
         :class="route.path.toLowerCase().startsWith('/contact') ? 'text-[#F17D24]' : 'text-[#14532D]'"
       >Contact</NuxtLink>
     </div>

     <NuxtLink to="/contact" class="bg-primary hover:bg-primary/70 text-sm rounded-full py-4 px-7.5 text-white font-bold">
      Partner With Us
     </NuxtLink>


     </div>
  </section>
</template>

<script setup lang="ts">
interface NavItem {
  label: string
  hash: string
}

// Each hash maps to an `id` on a <section> in pages/index.vue.
const navItems: NavItem[] = [
  { label: 'Home', hash: '#home' },
  { label: 'About', hash: '#about-us' },
  { label: 'Programs', hash: '#our-programs' },
  { label: 'Impact', hash: '#impact' },
  { label: 'Get Involved', hash: '#get-involved' },
]
const sectionIds = navItems.map((i) => i.hash.slice(1))

const route = useRoute()
const activeId = ref('home')
// Tracks which sections are currently crossing the scroll-spy band.
const visible = new Map<string, boolean>()
let observer: IntersectionObserver | null = null

function recomputeActive() {
  // First section (in document order) currently in the band wins.
  const current = sectionIds.find((id) => visible.get(id))
  if (current) activeId.value = current
}

function setupObserver() {
  observer?.disconnect()
  observer = null
  visible.clear()
  // Sections only exist on the landing page.
  if (route.path !== '/') return

  const els = sectionIds
    .map((id) => document.getElementById(id))
    .filter((el): el is HTMLElement => !!el)
  if (!els.length) return

  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        visible.set(entry.target.id, entry.isIntersecting)
      }
      recomputeActive()
    },
    // A thin horizontal band ~40% down the viewport acts as the "active line".
    { rootMargin: '-40% 0px -55% 0px', threshold: 0 },
  )
  els.forEach((el) => observer!.observe(el))
}

function onNavClick(item: NavItem) {
  const id = item.hash.slice(1)
  if (route.path === '/') {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      activeId.value = id
    }
  } else {
    // Coming from another route (e.g. /contact) — go home, then to the anchor.
    navigateTo('/' + item.hash)
  }
}

function isActive(item: NavItem) {
  return route.path === '/' && activeId.value === item.hash.slice(1)
}

onMounted(async () => {
  await nextTick()
  setupObserver()
})

// Re-wire the observer whenever we navigate between routes.
watch(
  () => route.path,
  async () => {
    await nextTick()
    setupObserver()
  },
)

onBeforeUnmount(() => observer?.disconnect())
</script>
