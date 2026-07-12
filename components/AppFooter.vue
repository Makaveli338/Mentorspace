<template>
  <section
    class="bg-[#020A04] border-t border-[#0D542B66] pt-16 pb-12 space-y-9"
  >
    <!--Top-->
    <div class="section flex flex-col sm:flex-row gap-3 justify-between">
      <!-- -->
      <div class="space-y-4">
        <img src="/mentorspace-white-logo.svg" alt="" loading="lazy" />
        <p class="max-w-72.5 text-[#DCFCE799] text-sm">
          Empowering youth, widows, and underserved communities through
          mentorship, skills development, climate action, and sustainable
          livelihoods since 2019.
        </p>
      </div>

      <!-- Quick Links-->
      <div class="space-y-5">
        <p class="text-xs font-extrabold leading-4 text-white tracking-[1.2px]">
          Quick Links
        </p>

        <div class="text-sm text-[#DCFCE799] flex flex-col gap-3">
          <NuxtLink
            v-for="link in quickLinks"
            :key="link.label"
            :to="link.to"
            class="cursor-pointer relative inline-block no-underline w-fit after:content-[''] after:absolute after:w-full after:scale-x-0 after:rounded after:h-[0.05em] after:bottom-0 after:left-0 after:bg-current after:origin-bottom-right after:transition-transform after:duration-200 after:ease-out hover:after:scale-x-100 hover:after:origin-bottom-left"
            >{{ link.label }}</NuxtLink
          >
        </div>
      </div>

      <!-- Our Programs-->
      <div class="space-y-5">
        <p class="text-xs font-extrabold leading-4 text-white tracking-[1.2px]">
          Our Programs
        </p>

        <div class="text-sm text-[#DCFCE799] flex flex-col gap-3">
          <p>Youth & Digital Skills</p>
          <p>Widows Empowerment</p>
          <p>Climate Action</p>
          <p>Agri-Tourism</p>
          <p>Resource Centers</p>
          <p>Global Exchange</p>
        </div>
      </div>

      <!-- Get In Touch-->
      <div class="space-y-5">
        <p class="text-xs font-extrabold leading-4 text-white tracking-[1.2px]">
          Get In Touch
        </p>

        <div class="text-sm text-[#DCFCE799] flex flex-col gap-3">
          <a
            class="cursor-pointer relative inline-block no-underline w-fit after:content-[''] after:absolute after:w-full after:scale-x-0 after:rounded after:h-[0.05em] after:bottom-0 after:left-0 after:bg-current after:origin-bottom-right after:transition-transform after:duration-200 after:ease-out hover:after:scale-x-100 hover:after:origin-bottom-left"
            href="mailto:info@mentorspace.org"
            >info@mentorspace.org</a
          >
          <p>Africa-Based Community Organization</p>
          <span
            class="cursor-pointer relative inline-block no-underline w-fit after:content-[''] after:absolute after:w-full after:scale-x-0 after:rounded after:h-[0.05em] after:bottom-0 after:left-0 after:bg-current after:origin-bottom-right after:transition-transform after:duration-200 after:ease-out hover:after:scale-x-100 hover:after:origin-bottom-left"
            href="#"
            >P.O.Box 35304 00200 Nairobi</span
          >
        </div>

        <NuxtLink to="/contact" class="rounded-primary-btn rounded-full! text-black! w-fit! font-bold group px-5 flex items-center gap-2">
          Contact Us

          <div class="group-hover:translate-x-3 transition-all duration-200">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.91663 7H11.0833"
                stroke="#050F07"
                stroke-width="1.16667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7 2.9165L11.0833 6.99984L7 11.0832"
                stroke="#050F07"
                stroke-width="1.16667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </NuxtLink>
      </div>
    </div>

    <!--Bottom-->
    <div
      class="border-t flex items-end justify-between pt-6 border-[#0D542B66] section text-[#DCFCE74D] text-xs"
    >
      <p>
        &copy; {{ new Date().getFullYear() }} Mentorspace. All rights reserved.
        Empowering communities
      </p>

      <p>Built with ♥ for community transformation</p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { defineNuxtLink } from 'nuxt/app';

// Home-page section anchors (leading "/" so they work from any route) + Contact.
const quickLinks = [
  { label: "About Us", to: "/#about-us" },
  { label: "Our Programs", to: "/#our-programs" },
  { label: "Impact", to: "/#impact" },
  { label: "Get Involved", to: "/#get-involved" },
  { label: "Contact", to: "/contact" },
];
</script>
