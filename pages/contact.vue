<template>
  <main class="bg-[#FAFAF9]">
    <!-- Hero -->
    <section class="bg-[#020A04] py-20">
      <div class="section px-6 text-center space-y-5" data-aos="fade-up">
        <span
            class="w-fit rounded-full text-xs font-bold px-4 py-1.5 border border-[#05DF724D] bg-[#05DF721A] leading-4 text-[#7BF1A8] uppercase"
            >Get in Touch</span
          >
        <h1 class="text-white mochiy text-4xl sm:text-5xl font-bold mt-4">
          Let's Build Impact Together
        </h1>
        <p class="max-w-2xl mx-auto text-[#DCFCE799] text-base sm:text-lg">
          Whether you want to mentor, partner, volunteer, or simply learn more
          about our work across Africa — we'd love to hear from you.
        </p>
      </div>
    </section>

    <!-- Body -->
    <section class="section px-6 py-16 grid gap-10 lg:grid-cols-2">
      <!-- Contact info -->
      <div class="space-y-6" data-aos="fade-up">
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
        data-aos="fade-up"
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

          <button type="submit" class="primary-btn w-full">Send Message</button>

          <p v-if="submitted" class="text-sm text-primary font-medium text-center">
            Thanks, {{ form.name || 'friend' }}! Your message is ready to send.
          </p>
        </form>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
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
  { icon: 'mail', label: 'Email', value: 'info@mentorspace.org', href: 'mailto:info@mentorspace.org' },
  { icon: 'phone', label: 'Phone', value: '+254 795 199 081', href: 'tel:+254795199081' },
  { icon: 'location_on', label: 'Location', value: 'Rainbow Towers, 11th Floor Muthithi Rd, Westlands ' },
]

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
})

const submitted = ref(false)

function handleSubmit() {
  // No backend yet — confirm and hand off to email.
  submitted.value = true
  const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
  const subject = encodeURIComponent(form.subject || 'Message from MentorSpace site')
  window.location.href = `mailto:info@mentorspace.org?subject=${subject}&body=${body}`
}
</script>
