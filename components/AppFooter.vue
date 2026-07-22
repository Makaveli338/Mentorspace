<template>
  <section
    class="bg-[#020A04] border-t border-[#0D542B66] pt-16 pb-12 space-y-9"
  >
    <!--Top-->
    <div class="section flex flex-col sm:flex-row gap-3 justify-between flex-wrap">
      <!-- -->
      <div class="space-y-4">
        <img src="/mentorspace-white-logo.svg" alt="Mentorspace" loading="lazy" />
        <p class="max-w-72.5 text-[#DCFCE799] text-sm">
          Empowering youth, widows, and underserved communities through
          mentorship, skills development, climate action, and sustainable
          livelihoods since 2019.
        </p>

        <div class="flex gap-2">
          <!--Instagram-->
          <a href="https://www.instagram.com/mentorspace1/"
            aria-label="Instagram"
            class="size-7.5 flex-center rounded-sm border border-white/20 cursor-pointer hover:bg-primary/40"
          >
            <svg
              aria-hidden="true"
              width="13"
              height="13"
              viewBox="0 0 13 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.20801 1.08337H3.79134C2.29557 1.08337 1.08301 2.29594 1.08301 3.79171V9.20837C1.08301 10.7041 2.29557 11.9167 3.79134 11.9167H9.20801C10.7038 11.9167 11.9163 10.7041 11.9163 9.20837V3.79171C11.9163 2.29594 10.7038 1.08337 9.20801 1.08337Z"
                stroke="white"
                stroke-opacity="0.5"
                stroke-width="1.08333"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8.66635 6.15879C8.73319 6.60959 8.65619 7.06999 8.4463 7.47451C8.2364 7.87902 7.9043 8.20706 7.49723 8.41195C7.09015 8.61684 6.62884 8.68816 6.1789 8.61575C5.72895 8.54335 5.3133 8.33092 4.99105 8.00867C4.6688 7.68642 4.45637 7.27077 4.38397 6.82082C4.31156 6.37088 4.38288 5.90957 4.58777 5.50249C4.79266 5.09542 5.1207 4.76332 5.52521 4.55342C5.92973 4.34353 6.39013 4.26653 6.84093 4.33337C7.30076 4.40156 7.72647 4.61583 8.05518 4.94454C8.38389 5.27325 8.59816 5.69896 8.66635 6.15879Z"
                stroke="white"
                stroke-opacity="0.5"
                stroke-width="1.08333"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9.47949 3.52087H9.48491"
                stroke="white"
                stroke-opacity="0.5"
                stroke-width="1.08333"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>

          <!-- Tik tok-->
           <a href="https://www.tiktok.com/@mentorspace1"
            aria-label="TikTok"
            class="size-7.5 flex-center rounded-sm border border-white/20 cursor-pointer hover:bg-primary/40"
          >
            <svg
              aria-hidden="true"
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="white"
              fill-opacity="0.5"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.6 5.82a4.28 4.28 0 0 1-1.05-2.82h-3.4v13.67a2.5 2.5 0 1 1-2.5-2.5c.26 0 .51.04.75.11V10.8a5.9 5.9 0 0 0-.75-.05 5.9 5.9 0 1 0 5.9 5.9V9.42a7.66 7.66 0 0 0 4.45 1.42V7.44a4.28 4.28 0 0 1-3.4-1.62z"
              />
            </svg>
          </a>

          <!-- Twitter-->
           <div
            class="group relative size-7.5 flex-center rounded-sm border border-white/20 cursor-pointer hover:bg-primary/40"
          >
            <svg
              aria-hidden="true"
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="white"
              fill-opacity="0.5"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.9 2.75h3.3l-7.2 8.24L23.5 21.25h-6.63l-5.2-6.8-5.94 6.8H2.43l7.7-8.8L1.5 2.75h6.8l4.7 6.21 5.9-6.21zm-1.16 16.5h1.83L7.34 4.65H5.38l12.36 14.6z"
              />
            </svg>

            <!-- Tooltip -->
            <span
              class="pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2 whitespace-nowrap rounded bg-white px-2 py-1 text-xs font-medium text-[#020A04] opacity-0 transition-opacity duration-200 group-hover:opacity-100 after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-4 after:border-transparent after:border-t-white"
            >
              Coming soon
            </span>
          </div>
        </div>
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
          <NuxtLink
            v-for="program in programs"
            :key="program"
            to="/programs"
            class="cursor-pointer relative inline-block no-underline w-fit after:content-[''] after:absolute after:w-full after:scale-x-0 after:rounded after:h-[0.05em] after:bottom-0 after:left-0 after:bg-current after:origin-bottom-right after:transition-transform after:duration-200 after:ease-out hover:after:scale-x-100 hover:after:origin-bottom-left"
            >{{ program }}</NuxtLink
          >
        </div>
      </div>

      <!-- Get In Touch-->
      <div class="space-y-5">
        <p class="text-xs font-extrabold leading-4 text-white tracking-[1.2px]">
          Get In Touch
        </p>

        <div class="text-sm text-[#DCFCE799] flex flex-col gap-3">
          <div class="flex gap-2 items-center">
            <svg
              aria-hidden="true"
              width="14"
              height="16"
              viewBox="0 0 14 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_74_3520)">
                <path
                  d="M7.3505 14.7159C8.4355 13.7791 11.6666 10.7458 11.6666 7.83317C11.6666 6.59549 11.1749 5.40851 10.2998 4.53334C9.42458 3.65817 8.2376 3.1665 6.99992 3.1665C5.76224 3.1665 4.57526 3.65817 3.70009 4.53334C2.82492 5.40851 2.33325 6.59549 2.33325 7.83317C2.33325 10.7458 5.56434 13.7791 6.64934 14.7159C6.75041 14.7919 6.87345 14.833 6.99992 14.833C7.12638 14.833 7.24942 14.7919 7.3505 14.7159Z"
                  stroke="#C47A1A"
                  stroke-width="1.16667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7 9.5835C7.9665 9.5835 8.75 8.79999 8.75 7.8335C8.75 6.867 7.9665 6.0835 7 6.0835C6.0335 6.0835 5.25 6.867 5.25 7.8335C5.25 8.79999 6.0335 9.5835 7 9.5835Z"
                  stroke="#C47A1A"
                  stroke-width="1.16667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_74_3520">
                  <rect
                    width="14"
                    height="14"
                    fill="white"
                    transform="translate(0 2)"
                  />
                </clipPath>
              </defs>
            </svg>

            <a
              class="cursor-pointer relative inline-block no-underline w-fit after:content-[''] after:absolute after:w-full after:scale-x-0 after:rounded after:h-[0.05em] after:bottom-0 after:left-0 after:bg-current after:origin-bottom-right after:transition-transform after:duration-200 after:ease-out hover:after:scale-x-100 hover:after:origin-bottom-left"
              href="https://www.google.com/maps/place/Rainbow+Tower/@-1.2661999,36.8045116,16z/data=!3m1!4b1!4m6!3m5!1s0x182f173e4f773017:0x6ea952c2753d2498!8m2!3d-1.2662053!4d36.8070865!16s%2Fg%2F11c0pv8768!5m2!1e4!1e1?entry=ttu&g_ep=EgoyMDI2MDcxNS4wIKXMDSoASAFQAw%3D%3D"
              >Rainbow Towers, 11th Floor Muthithi Rd, Westlands</a
            >         
            
          </div>

          <div class="flex gap-2 items-center">
            <svg
              aria-hidden="true"
              width="14"
              height="16"
              viewBox="0 0 14 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.6667 4.3335H2.33341C1.68908 4.3335 1.16675 4.85583 1.16675 5.50016V12.5002C1.16675 13.1445 1.68908 13.6668 2.33341 13.6668H11.6667C12.3111 13.6668 12.8334 13.1445 12.8334 12.5002V5.50016C12.8334 4.85583 12.3111 4.3335 11.6667 4.3335Z"
                stroke="#C47A1A"
                stroke-width="1.16667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12.8334 6.0835L7.60091 9.4085C7.42082 9.52133 7.2126 9.58117 7.00008 9.58117C6.78756 9.58117 6.57934 9.52133 6.39925 9.4085L1.16675 6.0835"
                stroke="#C47A1A"
                stroke-width="1.16667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <a
              class="cursor-pointer relative inline-block no-underline w-fit after:content-[''] after:absolute after:w-full after:scale-x-0 after:rounded after:h-[0.05em] after:bottom-0 after:left-0 after:bg-current after:origin-bottom-right after:transition-transform after:duration-200 after:ease-out hover:after:scale-x-100 hover:after:origin-bottom-left"
              href="mailto:info@mentorspace.org"
              >info@mentorspace.org</a
            >
          </div>

          <div class="flex gap-2 items-center">
            <svg
              aria-hidden="true"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_74_3535)">
                <path
                  d="M12.8333 9.86989V11.6199C12.834 11.7824 12.8007 11.9432 12.7356 12.092C12.6705 12.2409 12.5751 12.3745 12.4554 12.4843C12.3357 12.5941 12.1943 12.6778 12.0404 12.7298C11.8865 12.7819 11.7235 12.8012 11.5617 12.7866C9.76665 12.5915 8.04242 11.9781 6.5275 10.9957C5.11807 10.1001 3.92311 8.90516 3.0275 7.49573C2.04166 5.97393 1.42814 4.24131 1.23667 2.43823C1.22209 2.27692 1.24126 2.11434 1.29296 1.96084C1.34466 1.80735 1.42775 1.6663 1.53695 1.54667C1.64615 1.42705 1.77905 1.33147 1.92721 1.26603C2.07537 1.20059 2.23553 1.16671 2.3975 1.16656H4.1475C4.4306 1.16377 4.70505 1.26402 4.9197 1.44862C5.13434 1.63322 5.27455 1.88957 5.31417 2.16989C5.38803 2.72993 5.52501 3.27982 5.7225 3.80906C5.80099 4.01785 5.81797 4.24476 5.77145 4.46291C5.72492 4.68105 5.61684 4.88129 5.46 5.03989L4.71917 5.78073C5.54958 7.24113 6.75877 8.45032 8.21917 9.28073L8.96 8.53989C9.1186 8.38306 9.31884 8.27497 9.53699 8.22845C9.75513 8.18192 9.98205 8.19891 10.1908 8.27739C10.7201 8.47488 11.27 8.61186 11.83 8.68573C12.1134 8.7257 12.3722 8.86843 12.5571 9.08677C12.7421 9.3051 12.8404 9.58381 12.8333 9.86989Z"
                  stroke="#C47A1A"
                  stroke-width="1.16667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_74_3535">
                  <rect width="14" height="14" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <a
              class="cursor-pointer relative inline-block no-underline w-fit after:content-[''] after:absolute after:w-full after:scale-x-0 after:rounded after:h-[0.05em] after:bottom-0 after:left-0 after:bg-current after:origin-bottom-right after:transition-transform after:duration-200 after:ease-out hover:after:scale-x-100 hover:after:origin-bottom-left"
              href="tel:+254795199081"
              >+254 795 199 081</a
            >
          </div>
        </div>

        <NuxtLink
          to="/contact"
          class="rounded-primary-btn rounded-full! text-black! w-fit! font-bold group px-5 flex items-center gap-2"
        >
          Contact Us

          <div class="group-hover:translate-x-3 transition-all duration-200">
            <svg
              aria-hidden="true"
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
      </p>

      <p class="hidden sm:block">Empowering Communities. Transforming Futures.</p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { defineNuxtLink } from "nuxt/app";

// Match the header navigation routes so footer links point to real pages.
const quickLinks = [
  { label: "About Us", to: "/about" },
  { label: "Programs", to: "/programs" },
  { label: "Resources", to: "/resources" },
  { label: "Projects", to: "/projects" },
  // { label: "News & Media", to: "/news" },
  { label: "Contact", to: "/contact" },
];

const programs = [
  "Youth & Digital Skills",
  "Widows Empowerment",
  "Climate Action",
  "Agri-Tourism",
  "Resource Centers",
  "Global Exchange",
];
</script>
