import { defineNuxtPlugin } from 'nuxt/app'
import AOS from 'aos'
import 'aos/dist/aos.css'

// Client-only; init after mount so data-aos elements exist.
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('app:mounted', () => {
    // Disabled on mobile: stale trigger positions made fades fire late.
    AOS.init({
      duration: 700,
      easing: 'ease-out-cubic',
      once: false,
      offset: 80,
      anchorPlacement: 'top-bottom',
      disable: () => window.matchMedia('(max-width: 640px)').matches,
    })
  })

  // Re-scan on route changes. Client-side navigation swaps the whole page DOM,
  // so we must rebuild AOS's element list (refreshHard), not just recalculate
  // positions (refresh) — otherwise the new page's [data-aos] elements are never
  // revealed and stay at opacity:0 until a full reload.
  nuxtApp.hook('page:finish', () => {
    AOS.refreshHard()
  })
})

