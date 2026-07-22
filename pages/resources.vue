<template>
  <section class="space-y-16 pb-16">
    <!--Heading-->
    <section
      class="bg-[#0E1C11] bg-[url('/about-hero.png')] bg-cover bg-center bg-no-repeat w-full pt-20.5 pb-13.5"
    >
      <div class="section text-white" data-aos="fade-right">
        <p class="text-xs tracking-[2px] uppercase mono">Downloads</p>
        <p class="text-5xl mt-2.5 playfair font-bold leading-14">
          Resource Centre
        </p>
        <p class="text-lg text-[#FFFFFFCC] mt-3">
          Access our publications, reports, concept notes, and media materials.
        </p>
      </div>
    </section>

    <!--Body-->
    <section data-aos="fade-up" class="section grid md:grid-cols-2 lg:grid-cols-4 gap-3.5">
      <div
        v-for="resource in resources"
        :key="resource.title"
        class="bg-white rounded-md border py-4 px-4.5 flex justify-between items-center gap-3 border-[#0000001A]"
      >
        <div class="flex gap-3.5 min-w-0">
          <div
            class="rounded-md flex items-center justify-center size-9 bg-[#E6EFE3] shrink-0"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.99984 1.33331H3.99984C3.64622 1.33331 3.30708 1.47379 3.05703 1.72384C2.80698 1.97389 2.6665 2.31302 2.6665 2.66665V13.3333C2.6665 13.6869 2.80698 14.0261 3.05703 14.2761C3.30708 14.5262 3.64622 14.6666 3.99984 14.6666H11.9998C12.3535 14.6666 12.6926 14.5262 12.9426 14.2761C13.1927 14.0261 13.3332 13.6869 13.3332 13.3333V4.66665L9.99984 1.33331Z"
                stroke="#1B5E20"
                stroke-width="1.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9.3335 1.33331V3.99998C9.3335 4.3536 9.47397 4.69274 9.72402 4.94279C9.97407 5.19284 10.3132 5.33331 10.6668 5.33331H13.3335"
                stroke="#1B5E20"
                stroke-width="1.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6.66683 6H5.3335"
                stroke="#1B5E20"
                stroke-width="1.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.6668 8.66669H5.3335"
                stroke="#1B5E20"
                stroke-width="1.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.6668 11.3333H5.3335"
                stroke="#1B5E20"
                stroke-width="1.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>

          <div class="space-y-0.5 min-w-0">
            <p class="text-sm font-medium text-[#1A2016] leading-5">
              {{ resource.title }}
            </p>
            <p class="text-xs text-[#5C6B55]">{{ resource.meta }}</p>
          </div>
        </div>

        <div
          class="rounded-sm border flex items-center justify-center border-[#0000001A] size-7.5 cursor-pointer hover:bg-gray-200"
        >
          <svg
            width="13"
            height="13"
            viewBox="0 0 13 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.375 8.125V10.2917C11.375 10.579 11.2609 10.8545 11.0577 11.0577C10.8545 11.2609 10.579 11.375 10.2917 11.375H2.70833C2.42102 11.375 2.14547 11.2609 1.9423 11.0577C1.73914 10.8545 1.625 10.579 1.625 10.2917V8.125"
              stroke="#0A0A0A"
              stroke-width="1.08333"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M3.7915 5.41669L6.49984 8.12502L9.20817 5.41669"
              stroke="#0A0A0A"
              stroke-width="1.08333"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6.5 8.125V1.625"
              stroke="#0A0A0A"
              stroke-width="1.08333"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </section>
  </section>
</template>

<script setup>
const resources = [
  { title: "Organisation Profile", meta: "PDF · 2.4 MB · 2024" },
  { title: "Strategic Plan 2023–2027", meta: "PDF · 4.1 MB · 2023" },
  { title: "Annual Report 2023", meta: "PDF · 6.8 MB · 2023" },
  { title: "Annual Report 2022", meta: "PDF · 5.3 MB · 2022" },
  { title: "WiSMES Concept Note", meta: "PDF · 1.2 MB · 2024" },
  { title: "Youth Programme Concept Note", meta: "PDF · 0.9 MB · 2023" },
  { title: "Training Manual: Women in Mining", meta: "PDF · 3.2 MB · 2024" },
  { title: "Training Manual: Digital Literacy", meta: "PDF · 2.1 MB · 2023" },
  { title: "Impact Report 2023", meta: "PDF · 3.8 MB · 2023" },
  { title: "Newsletter — Q1 2025", meta: "PDF · 1.5 MB · 2025" },
  { title: "Newsletter — Q4 2024", meta: "PDF · 1.3 MB · 2024" },
  { title: "Media Kit", meta: "ZIP · 12.4 MB · 2024" },
];
</script>
