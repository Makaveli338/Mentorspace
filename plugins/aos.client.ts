import { defineNuxtPlugin } from 'nuxt/app'
import { nextTick } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

// AOS hides every [data-aos] element at opacity:0 and only reveals it via JS.
// On client-side navigation Nuxt swaps the DOM without a reload, so if AOS
// fails to re-scan the new page in time, its content stays invisible until a
// full reload. This plugin re-inits AOS on every navigation and — critically —
// runs a safety pass that force-reveals anything still hidden, so content can
// never get permanently stranded at opacity:0.

const MOBILE_QUERY = '(max-width: 640px)'

// Belt-and-braces: reveal any [data-aos] element that AOS left hidden. Adding
// the .aos-animate class is exactly what AOS does when an element enters view;
// doing it ourselves guarantees the content is visible even if AOS's own
// measurement pass missed it (stale positions, pre-paint timing, etc.).
function revealStragglers() {
  document.querySelectorAll('[data-aos]:not(.aos-animate)').forEach((el) => {
    el.classList.add('aos-animate')
  })
}

export default defineNuxtPlugin((nuxtApp) => {
  const initAos = () => {
    AOS.init({
      duration: 700,
      easing: 'ease-out-cubic',
      once: false,
      offset: 80,
      anchorPlacement: 'top-bottom',
      // Disabled on mobile: stale trigger positions made fades fire late.
      disable: () => window.matchMedia(MOBILE_QUERY).matches,
    })
  }

  nuxtApp.hook('app:mounted', () => {
    initAos()
  })

  // Re-scan on route changes. page:finish can fire before the new DOM is
  // painted, so wait for the next tick and a paint frame before AOS measures
  // element positions (refreshHard rebuilds AOS's element list from scratch).
  nuxtApp.hook('page:finish', () => {
    nextTick(() => {
      requestAnimationFrame(() => {
        if (window.matchMedia(MOBILE_QUERY).matches) {
          // On mobile AOS is disabled and no animation is wanted, so just make
          // everything visible — this is the case that was stranding content.
          revealStragglers()
        } else {
          // On desktop keep the scroll animations: rebuild AOS's element list
          // so below-the-fold elements still animate in on scroll.
          AOS.refreshHard()
        }
      })
    })
  })
})
