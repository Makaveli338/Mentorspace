<template>
  <main class="bg-[#FAFAF9]">
    <!-- Hero -->
    <section class="bg-[url('/about-hero.webp')] bg-cover bg-center bg-no-repeat w-full pt-20.5 pb-13.5">
     <div class="section text-white" data-aos="fade-right">
        <p class="text-xs tracking-[2px] uppercase mono">Get in touch</p>
        <p class="text-5xl mt-2.5 playfair font-bold leading-14">
         Contact Us
        </p>
        <p class="text-lg text-[#FFFFFFCC] mt-3">
          Reach out for enquiries, partnerships, media or general information.
        </p>
      </div>
    </section>

    <!-- Body -->
    <section class="section px-6 py-16 grid gap-10 lg:grid-cols-2">
      <!-- Contact info -->
      <div class="space-y-6" data-aos="fade-right">
        <div>
          <h2 class="font-['Playfair_Display'] text-primary text-3xl font-bold">
            Reach Out
          </h2>
          <p class="text-[#4B5563] mt-2 max-w-md">
            Prefer a direct line? Use any of the channels below and a member of
            our team will get back to you.
          </p>
        </div>

        <div class="space-y-4">
          <component
            :is="item.href ? 'a' : 'div'"
            v-for="item in contactInfo"
            :key="item.label"
            :href="item.href || undefined"
            :target="item.href?.startsWith('http') ? '_blank' : undefined"
            :rel="item.href?.startsWith('http') ? 'noopener noreferrer' : undefined"
            class="group flex items-start gap-4 rounded-2xl border border-[#14532D1A] bg-white p-5 transition-shadow hover:shadow-md"
          >
            <span
              class="material-symbols-outlined text-primary bg-[#14532D0D] rounded-xl p-3 text-2xl"
              >{{ item.icon }}</span
            >
            <span>
              <span class="block text-xs font-bold uppercase tracking-[1.2px] text-[#6B7280]">{{ item.label }}</span>
              <span class="cursor-pointer relative inline-block no-underline w-fit after:content-[''] after:absolute after:w-full after:scale-x-0 after:rounded after:h-[0.05em] after:bottom-0 after:left-0 after:bg-current after:origin-bottom-right after:transition-transform after:duration-200 after:ease-out group-hover:after:scale-x-100 group-hover:after:origin-bottom-left block text-primary font-semibold mt-0.5">{{ item.value }}</span>
            </span>
          </component>
        </div>
      </div>

      <!-- Form -->
      <div
        class="rounded-2xl border border-[#14532D1A] bg-white p-7 sm:p-9 shadow-sm"
        data-aos="fade-left"
        data-aos-delay="100"
      >
        <form class="space-y-5" @submit.prevent="handleSubmit">
          <div class="grid sm:grid-cols-2 gap-5">
            <label class="block space-y-1.5">
              <span class="text-sm font-semibold text-[#374151]">Full Name</span>
              <input
                v-model="form.name"
                type="text"
                required
                placeholder="Jane Doe"
                class="w-full rounded-lg border-[#D1D5DB] focus:border-primary focus:ring-primary text-sm"
              />
            </label>
            <label class="block space-y-1.5">
              <span class="text-sm font-semibold text-[#374151]">Email</span>
              <input
                v-model="form.email"
                type="email"
                required
                placeholder="jane@example.com"
                class="w-full rounded-lg border-[#D1D5DB] focus:border-primary focus:ring-primary text-sm"
              />
            </label>
          </div>
          

          <label class="block space-y-1.5">
            <span class="text-sm font-semibold text-[#374151]">Subject</span>
            <input
              v-model="form.subject"
              type="text"
              placeholder="How can we help?"
              class="w-full rounded-lg border-[#D1D5DB] focus:border-primary focus:ring-primary text-sm"
            />
          </label>

          <label class="block space-y-1.5">
            <span class="text-sm font-semibold text-[#374151]">Message</span>
            <textarea
              v-model="form.message"
              rows="5"
              required
              placeholder="Tell us a little about what you have in mind..."
              class="w-full rounded-lg border-[#D1D5DB] focus:border-primary focus:ring-primary text-sm"
            />
          </label>

          <button type="submit" class="primary-btn w-full" :disabled="sending">
            {{ sending ? 'Sending…' : 'Send Message' }}
          </button>

          <p v-if="submitted" class="text-sm text-primary font-medium text-center">
            Thanks! Your message has been sent — we'll be in touch soon.
          </p>
          <p v-if="errorMsg" class="text-sm text-red-600 font-medium text-center">
            {{ errorMsg }}
          </p>
        </form>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { useSeoMeta } from "nuxt/app";
import { reactive, ref } from "vue";

useSeoMeta({
  title: 'Contact | MentorSpace',
  description:
    'Get in touch with MentorSpace — reach out about mentorship, partnerships, volunteering, or supporting communities across Kenya.',
  ogTitle: 'Contact | MentorSpace',
  ogDescription:
    'Get in touch with MentorSpace about mentorship, partnerships, and supporting communities across Kenya.',
  ogImage: '/mentorspace-logo.svg',
})

const contactInfo = [
  { icon: 'mail', label: 'Email', value: 'info@mentorspacekenya.org', href: 'mailto:info@mentorspacekenya.org' },
  { icon: 'phone', label: 'Phone', value: '+254 795 199 081', href: 'tel:+254795199081' },
  { icon: 'location_on', label: 'Location', value: 'Rainbow Towers, 11th Floor Muthithi Rd, Westlands ', href: 'https://www.google.com/maps/place/Rainbow+Tower/@-1.2661999,36.8045116,16z/data=!3m1!4b1!4m6!3m5!1s0x182f173e4f773017:0x6ea952c2753d2498!8m2!3d-1.2662053!4d36.8070865!16s%2Fg%2F11c0pv8768!5m2!1e4!1e1?entry=ttu&g_ep=EgoyMDI2MDcxNS4wIKXMDSoASAFQAw%3D%3D' },
]

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
})

const submitted = ref(false)
const sending = ref(false)
const errorMsg = ref('')

async function handleSubmit() {
  sending.value = true
  errorMsg.value = ''
  try {
    await $fetch('/api/contact', {
      method: 'POST',
      body: {
        name: form.name,
        email: form.email,
        subject: form.subject,
        message: form.message,
      },
    })
    submitted.value = true
    form.name = ''
    form.email = ''
    form.subject = ''
    form.message = ''
  } catch (err: any) {
    errorMsg.value =
      err?.data?.statusMessage || 'Something went wrong sending your message. Please try again.'
  } finally {
    sending.value = false
  }
}
</script>
