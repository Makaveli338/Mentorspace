<template>
  <section class="space-y-16 pb-16">
    <!--Heading-->
    <section
      class="bg-[#0E1C11] bg-[url('/about-hero.png')] bg-cover bg-center bg-no-repeat w-full pt-20.5 pb-13.5"
    >
      <div class="section text-white" data-aos="fade-right">
        <p class="text-xs tracking-[2px] uppercase mono">Our Work</p>
        <p class="text-5xl mt-2.5 playfair font-bold leading-14">
          Our Programmes
        </p>
        <p class="text-lg text-[#FFFFFFCC] mt-3">
          Addressing specific community needs while contributing to systemic,
          lasting change.
        </p>
      </div>
    </section>

    <!--Flagship Program-->
    <div class="px-4 lg:px-0">
      <section data-aos="fade-up"
        class="rounded-md px-8! py-7 bg-[#1A2016] flex flex-col lg:flex-row lg:justify-between gap-3 lg:items-center section"
      >
        <div>
          <p class="text-xs tracking-[2px] uppercase mono text-[#C47A1A]">
            Flagship Programme
          </p>
          <p class="playfair font-bold text-xl leading-7.5 text-white mt-1.5">
            Women in Sustainable Mining & Environmental Stewardship Initiative
            (WiSMES)
          </p>
          <p class="text-sm text-[#FFFFFF80]">
            "Empowering Women. Restoring the Earth. Building Prosperity."
          </p>
        </div>
  
        <NuxtLink to="/wismes" class="primary-btn flex gap-1 bg-[#C47A1A]! hover:bg-[#C47A1A50]! group w-fit">
          View Programme
          <svg
          class="group-hover:translate-x-1 size-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            />
          </svg>
        </NuxtLink>
      </section>
    </div>

    <!--Programmes-->
    <div data-aos="fade-down" class="section grid md:grid-cols-2 lg:grid-cols-4 gap-5">
      <!-- -->
      <div
        class="bg-white border border-[#00000014] rounded-lg overflow-hidden"
      >
        <img
          src="/youth-empowerment.png"
          alt="youths"
          loading="lazy"
          class="w-full"
        />

        <div class="p-5">
          <div
            class="size-8 rounded-md bg-[#E6EFE3] flex items-center justify-center"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.6668 14V12.6667C10.6668 11.9594 10.3859 11.2811 9.88578 10.781C9.38568 10.281 8.70741 10 8.00016 10H4.00016C3.29292 10 2.61464 10.281 2.11454 10.781C1.61445 11.2811 1.3335 11.9594 1.3335 12.6667V14"
                stroke="#1B5E20"
                stroke-width="1.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6.00016 7.33333C7.47292 7.33333 8.66683 6.13943 8.66683 4.66667C8.66683 3.19391 7.47292 2 6.00016 2C4.5274 2 3.3335 3.19391 3.3335 4.66667C3.3335 6.13943 4.5274 7.33333 6.00016 7.33333Z"
                stroke="#1B5E20"
                stroke-width="1.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14.6665 14V12.6667C14.6661 12.0758 14.4694 11.5019 14.1074 11.0349C13.7454 10.5679 13.2386 10.2344 12.6665 10.0867"
                stroke="#1B5E20"
                stroke-width="1.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.6665 2.08667C11.2401 2.23354 11.7485 2.56714 12.1116 3.03488C12.4747 3.50262 12.6717 4.07789 12.6717 4.67C12.6717 5.26212 12.4747 5.83739 12.1116 6.30513C11.7485 6.77287 11.2401 7.10647 10.6665 7.25334"
                stroke="#1B5E20"
                stroke-width="1.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <p class="playfair font-semibold leading-5 mt-3">Youth Empowerment</p>
          <p class="text-xs leading-4.5 text-[#5C6B55] font-medium mt-2">
            Equipping young people with employable skills, entrepreneurship, and
            career opportunities.
          </p>
        </div>
      </div>

      <!-- -->
      <div
        class="bg-white border border-[#00000014] rounded-lg overflow-hidden"
      >
        <img
          src="/women-economic-empowerment.png"
          alt="women"
          loading="lazy"
          class="w-full"
        />

        <div class="p-5">
          <div
            class="size-8 rounded-md bg-[#E6EFE3] flex items-center justify-center"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#1B5E20"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
              />
            </svg>
          </div>
          <p class="playfair font-semibold leading-5 mt-3">
            Women's Economic Empowerment
          </p>
          <p class="text-xs leading-4.5 text-[#5C6B55] font-medium mt-2">
            Supporting widows and vulnerable women through enterprise
            development and financial inclusion.
          </p>
        </div>
      </div>

      <!-- -->
      <div
        class="bg-white border border-[#00000014] rounded-lg overflow-hidden"
      >
        <img
          src="/environmental-conservation.png"
          alt="environment"
          loading="lazy"
          class="w-full"
        />

        <div class="p-5">
          <div
            class="size-8 rounded-md bg-[#E6EFE3] flex items-center justify-center"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.33316 13.3333C6.16253 13.3369 5.03333 12.9003 4.1695 12.1103C3.30568 11.3202 2.77033 10.2343 2.66965 9.06805C2.56896 7.90176 2.91028 6.74022 3.62592 5.81381C4.34156 4.88739 5.37924 4.26378 6.53316 4.06665C10.3332 3.33331 11.3332 2.98665 12.6665 1.33331C13.3332 2.66665 13.9998 4.11998 13.9998 6.66665C13.9998 10.3333 10.8132 13.3333 7.33316 13.3333Z"
                stroke="#1B5E20"
                stroke-width="1.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M1.3335 14C1.3335 12 2.56683 10.4267 4.72016 10C6.3335 9.68 8.00016 8.66667 8.66683 8"
                stroke="#1B5E20"
                stroke-width="1.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <p class="playfair font-semibold leading-5 mt-3">
            Environmental Conservation
          </p>
          <p class="text-xs leading-4.5 text-[#5C6B55] font-medium mt-2">
            Restoring ecosystems through tree planting, nurseries, and
            climate-smart agriculture.
          </p>
        </div>
      </div>

      <!-- -->
      <div
        class="bg-white border border-[#00000014] rounded-lg overflow-hidden"
      >
        <img
          src="/agriculture.png"
          alt="agriculture"
          loading="lazy"
          class="w-full"
        />

        <div class="p-5">
          <div
            class="size-8 rounded-md bg-[#E6EFE3] flex items-center justify-center"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#1B5E20"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7 20h10" />
              <path d="M10 20c5.5-2.5.8-6.4 3-10" />
              <path
                d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8Z"
              />
              <path
                d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2Z"
              />
            </svg>
          </div>
          <p class="playfair font-semibold leading-5 mt-3">
            Agriculture &amp; Value Addition
          </p>
          <p class="text-xs leading-4.5 text-[#5C6B55] font-medium mt-2">
            Promoting sustainable agriculture, food security, processing, and
            market access.
          </p>
        </div>
      </div>

      <!-- -->
      <div
        class="bg-white border border-[#00000014] rounded-lg overflow-hidden"
      >
        <img
          src="/digital-skills.png"
          alt="digital skills"
          loading="lazy"
          class="w-full"
        />

        <div class="p-5">
          <div
            class="size-8 rounded-md bg-[#E6EFE3] flex items-center justify-center"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_74_3232)">
                <path
                  d="M11.9998 2.66663H3.99984C3.26346 2.66663 2.6665 3.26358 2.6665 3.99996V12C2.6665 12.7363 3.26346 13.3333 3.99984 13.3333H11.9998C12.7362 13.3333 13.3332 12.7363 13.3332 12V3.99996C13.3332 3.26358 12.7362 2.66663 11.9998 2.66663Z"
                  stroke="#1B5E20"
                  stroke-width="1.33333"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.33333 6H6.66667C6.29848 6 6 6.29848 6 6.66667V9.33333C6 9.70152 6.29848 10 6.66667 10H9.33333C9.70152 10 10 9.70152 10 9.33333V6.66667C10 6.29848 9.70152 6 9.33333 6Z"
                  stroke="#1B5E20"
                  stroke-width="1.33333"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10 1.33337V2.66671"
                  stroke="#1B5E20"
                  stroke-width="1.33333"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10 13.3334V14.6667"
                  stroke="#1B5E20"
                  stroke-width="1.33333"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M1.3335 10H2.66683"
                  stroke="#1B5E20"
                  stroke-width="1.33333"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M1.3335 6H2.66683"
                  stroke="#1B5E20"
                  stroke-width="1.33333"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.3335 10H14.6668"
                  stroke="#1B5E20"
                  stroke-width="1.33333"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.3335 6H14.6668"
                  stroke="#1B5E20"
                  stroke-width="1.33333"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6 1.33337V2.66671"
                  stroke="#1B5E20"
                  stroke-width="1.33333"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6 13.3334V14.6667"
                  stroke="#1B5E20"
                  stroke-width="1.33333"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_74_3232">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <p class="playfair font-semibold leading-5 mt-3">
            Digital Skills &amp; Innovation
          </p>
          <p class="text-xs leading-4.5 text-[#5C6B55] font-medium mt-2">
            Providing digital literacy, coding, robotics, and AI programmes for
            the future economy.
          </p>
        </div>
      </div>

      <!-- -->
      <div
        class="bg-white border border-[#00000014] rounded-lg overflow-hidden"
      >
        <img
          src="/sports-development.png"
          alt="sports"
          loading="lazy"
          class="w-full"
        />

        <div class="p-5">
          <div
            class="size-8 rounded-md bg-[#E6EFE3] flex items-center justify-center"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.00016 5.99996H3.00016C2.55814 5.99996 2.13421 5.82436 1.82165 5.5118C1.50909 5.19924 1.3335 4.77532 1.3335 4.33329C1.3335 3.89127 1.50909 3.46734 1.82165 3.15478C2.13421 2.84222 2.55814 2.66663 3.00016 2.66663H4.00016"
                stroke="#1B5E20"
                stroke-width="1.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 5.99996H13C13.442 5.99996 13.866 5.82436 14.1785 5.5118C14.4911 5.19924 14.6667 4.77532 14.6667 4.33329C14.6667 3.89127 14.4911 3.46734 14.1785 3.15478C13.866 2.84222 13.442 2.66663 13 2.66663H12"
                stroke="#1B5E20"
                stroke-width="1.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M2.6665 14.6666H13.3332"
                stroke="#1B5E20"
                stroke-width="1.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6.6665 9.77332V11.3333C6.6665 11.7 6.35317 11.9866 6.01984 12.14C5.23317 12.5 4.6665 13.4933 4.6665 14.6666"
                stroke="#1B5E20"
                stroke-width="1.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9.3335 9.77332V11.3333C9.3335 11.7 9.64683 11.9866 9.98016 12.14C10.7668 12.5 11.3335 13.4933 11.3335 14.6666"
                stroke="#1B5E20"
                stroke-width="1.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 1.33337H4V6.00004C4 7.06091 4.42143 8.07832 5.17157 8.82847C5.92172 9.57861 6.93913 10 8 10C9.06087 10 10.0783 9.57861 10.8284 8.82847C11.5786 8.07832 12 7.06091 12 6.00004V1.33337Z"
                stroke="#1B5E20"
                stroke-width="1.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <p class="playfair font-semibold leading-5 mt-3">
            Sports Development
          </p>
          <p class="text-xs leading-4.5 text-[#5C6B55] font-medium mt-2">
            Using sports to nurture discipline, leadership, and healthy
            lifestyles among youth.
          </p>
        </div>
      </div>

      <!-- -->
      <div
        class="bg-white border border-[#00000014] rounded-lg overflow-hidden"
      >
        <img src="/research.png" alt="research" loading="lazy" class="w-full" />

        <div class="p-5">
          <div
            class="size-8 rounded-md bg-[#E6EFE3] flex items-center justify-center"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#1B5E20"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2"
              />
              <path d="M8.5 2h7" />
              <path d="M7 16h10" />
            </svg>
          </div>
          <p class="playfair font-semibold leading-5 mt-3">
            Research &amp; Innovation
          </p>
          <p class="text-xs leading-4.5 text-[#5C6B55] font-medium mt-2">
            Generating evidence-based insights to inform programme design and
            policy advocacy.
          </p>
        </div>
      </div>

      <!-- -->
      <div
        class="bg-white border border-[#00000014] rounded-lg overflow-hidden"
      >
        <img
          src="/community-development.png"
          alt="community"
          loading="lazy"
          class="w-full"
        />

        <div class="p-5">
          <div
            class="size-8 rounded-md bg-[#E6EFE3] flex items-center justify-center"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#1B5E20"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
              <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
              <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
              <path d="M10 6h4" />
              <path d="M10 10h4" />
              <path d="M10 14h4" />
              <path d="M10 18h4" />
            </svg>
          </div>
          <p class="playfair font-semibold leading-5 mt-3">
            Community Development
          </p>
          <p class="text-xs leading-4.5 text-[#5C6B55] font-medium mt-2">
            Building institutional capacity, governance, and social capital for
            lasting outcomes.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
