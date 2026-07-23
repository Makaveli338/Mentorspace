<template>
  <section class="sticky top-0 z-50 bg-white! sm:px-8 sm:py-5 p-4 border-b border-[#EAECF0]">
    <div class="section flex justify-between items-center">
    <NuxtLink to="/">
     <img src="/mentorspace-logo.webp" alt="Mentorspace logo" class="w-63.75 h-10">
     </NuxtLink>

     <div class="lg:flex items-center gap-6 w-fit mx-auto hidden">
       <NuxtLink
         v-for="item in navItems"
         :key="item.label"
         :to="item.to"
         class="font-semibold transition-colors hover:text-[#F17D24]"
         :class="isActive(item) ? 'text-[#F17D24]' : 'text-[#14532D]'"
       >{{ item.label }}</NuxtLink>
     </div>

     <div class="flex items-center gap-3">
       <NuxtLink to="/donate" class="hidden lg:block bg-primary hover:bg-primary/70 text-sm rounded-lg py-2 sm:py-4 px-4 sm:px-7.5 text-white font-bold">
        Donate
       </NuxtLink>

       <button
         type="button"
         class="lg:hidden p-2 -mr-2 text-[#14532D]"
         :aria-expanded="menuOpen"
         aria-controls="mobile-nav"
         :aria-label="menuOpen ? 'Close menu' : 'Open menu'"
         @click="menuOpen = !menuOpen"
       >
         <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
           <template v-if="menuOpen">
             <path d="M6 6l12 12M18 6L6 18" />
           </template>
           <template v-else>
             <path d="M4 7h16M4 12h16M4 17h16" />
           </template>
         </svg>
       </button>
     </div>
     </div>

    <Transition
      enter-active-class="transition-[max-height,opacity] duration-300 ease-out overflow-hidden"
      leave-active-class="transition-[max-height,opacity] duration-200 ease-in overflow-hidden"
      enter-from-class="max-h-0 opacity-0"
      enter-to-class="max-h-96 opacity-100"
      leave-from-class="max-h-96 opacity-100"
      leave-to-class="max-h-0 opacity-0"
    >
      <nav v-show="menuOpen" id="mobile-nav" class="lg:hidden mt-4">
        <ul class="flex flex-col">
          <li v-for="item in navItems" :key="item.label">
            <NuxtLink
              :to="item.to"
              class="block py-3 font-semibold transition-colors hover:text-[#F17D24]"
              :class="isActive(item) ? 'text-[#F17D24]' : 'text-[#14532D]'"
              @click="menuOpen = false"
            >{{ item.label }}</NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/donate"
              class="mt-3 block bg-primary hover:bg-primary/70 text-sm rounded-lg py-2 px-4 text-white font-bold w-full text-center"
              @click="menuOpen = false"
            >
              Donate
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </Transition>
  </section>
</template>

<script setup lang="ts">
import { useRoute } from 'nuxt/app'
import { ref, watch } from 'vue'
interface NavItem {
  label: string
  to: string
}

const navItems: NavItem[] = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Programs', to: '/programs' },
  { label: 'Resources', to: '/resources' },
  // { label: 'Impacts', to: '/impacts' },
  { label: 'Projects', to: '/projects' },
  // { label: 'News & Media', to: '/news' },
  { label: 'Contact', to: '/contact' },
]

const route = useRoute()
const menuOpen = ref(false)

function isActive(item: NavItem) {
  const path = route.path.toLowerCase().replace(/\/$/, '') || '/'
  if (item.to === '/') return path === '/'
  return path === item.to || path.startsWith(item.to + '/')
}

// Close the mobile menu on navigation.
watch(() => route.path, () => {
  menuOpen.value = false
})
</script>
