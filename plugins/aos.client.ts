import AOS from 'aos'
import 'aos/dist/aos.css'

// Client-only; init after mount so data-aos elements exist.
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('app:mounted', () => {
    // Disabled on mobile: stale trigger positions made fades fire late.
    AOS.init({
      duration: 700,
      easing: 'ease-out-cubic',
      once: true,
      offset: 80,
      anchorPlacement: 'top-bottom',
      disable: () => window.matchMedia('(max-width: 640px)').matches,
    })
  })

  // Re-scan on route changes.
  nuxtApp.hook('page:finish', () => {
    AOS.refresh()
  })
})
