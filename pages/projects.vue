<template>
  <section class="space-y-16 pb-16">
    <!--Heading-->
    <section
      class="bg-[#0E1C11] bg-[url('/about-hero.webp')] bg-cover bg-center bg-no-repeat w-full pt-20.5 pb-13.5"
    >
      <div class="section text-white" data-aos="fade-right">
        <p class="text-xs tracking-[2px] uppercase mono">Where We Work</p>
        <p class="text-5xl mt-2.5 playfair font-bold leading-14">
          Our Projects
        </p>
        <p class="text-lg text-[#FFFFFFCC] mt-3">
          Active projects across 4 counties in Kenya, with plans for continued
          expansion.
        </p>
      </div>
    </section>

    <!--Body-->
    <section class="section grid lg:grid-cols-2 gap-4 lg:gap-12">
      <!--Map section-->
      <div data-aos="fade-right" class="bg-white rounded-md p-4 space-y-4 border border-[#0000001A]">
        <p class="mono text-xs leading-6 tracking-[2px] text-[#5C6B55]">Kenya — Active Project Locations</p>
        <ClientOnly>
          <KenyaMap @select="onCountySelect" />
        </ClientOnly>
      </div>

      <!--Details section-->
      <div data-aos="fade-left" v-show="!viewCounty" class="space-y-5">
        <p class="playfair font-semibold leading-7.5 text-2xl">
          Select a county on the map
        </p>

        <!--County selection-->
        <div class="space-y-1.5">
          <!-- -->
          <div
            @click="viewCounty = true"
            class="py-3.5 px-4 flex items-center justify-between bg-[#EDE9E0] border-[#00000014] border rounded-md cursor-pointer hover:border-green-800!"
          >
            <div>
              <p class="text-sm font-semibold leading-5">Nairobi County</p>
              <p class="text-xs font-medium leading-4.5 text-[#5C6B55]">
                4 active projects
              </p>
            </div>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 12L10 8L6 4"
                stroke="#5C6B55"
                stroke-width="1.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>

          <!-- -->
          <div
            class="py-3.5 px-4 flex items-center justify-between bg-[#EDE9E0] border-[#00000014] border rounded-md cursor-pointer hover:border-green-800!"
          >
            <div>
              <p class="text-sm font-semibold leading-5">
                Kirinyaga County (Sagana)
              </p>
              <p class="text-xs font-medium leading-4.5 text-[#5C6B55]">
                4 active projects
              </p>
            </div>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 12L10 8L6 4"
                stroke="#5C6B55"
                stroke-width="1.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>

          <!-- -->
          <div
            class="py-3.5 px-4 flex items-center justify-between bg-[#EDE9E0] border-[#00000014] border rounded-md cursor-pointer hover:border-green-800!"
          >
            <div>
              <p class="text-sm font-semibold leading-5">Kilifi County</p>
              <p class="text-xs font-medium leading-4.5 text-[#5C6B55]">
                4 active projects
              </p>
            </div>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 12L10 8L6 4"
                stroke="#5C6B55"
                stroke-width="1.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>

          <!-- -->
          <div
            class="py-3.5 px-4 flex items-center justify-between bg-[#EDE9E0] border-[#00000014] border rounded-md cursor-pointer hover:border-green-800!"
          >
            <div>
              <p class="text-sm font-semibold leading-5">Migori County</p>
              <p class="text-xs font-medium leading-4.5 text-[#5C6B55]">
                4 active projects
              </p>
            </div>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 12L10 8L6 4"
                stroke="#5C6B55"
                stroke-width="1.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>

      <!--Details section-->
      <div data-aos="fade-left" v-show="viewCounty" class="space-y-5">
        <p class="playfair font-semibold leading-7.5 text-2xl">
          Nairobi County
        </p>

        <!-- -->
        <div class="space-y-1.5">
          <!-- -->
          <div
            class="py-3.5 px-4 flex items-center bg-[#EDE9E0] border-[#00000014] border rounded-md gap-2.5"
          >
            <div class="rounded-full size-2 bg-[#1B5E20]"></div>
            <p class="text-sm font-medium">Youth Resource Centre</p>
          </div>

          <!-- -->
          <div
            class="py-3.5 px-4 flex items-center bg-[#EDE9E0] border-[#00000014] border rounded-md gap-2.5"
          >
            <div class="rounded-full size-2 bg-[#1B5E20]"></div>
            <p class="text-sm font-medium">Skills Development</p>
          </div>

          <!-- -->
          <div
            class="py-3.5 px-4 flex items-center bg-[#EDE9E0] border-[#00000014] border rounded-md gap-2.5"
          >
            <div class="rounded-full size-2 bg-[#1B5E20]"></div>
            <p class="text-sm font-medium">Entrepreneurship Hub</p>
          </div>

          <!-- -->
          <div
            class="py-3.5 px-4 flex items-center bg-[#EDE9E0] border-[#00000014] border rounded-md gap-2.5"
          >
            <div class="rounded-full size-2 bg-[#1B5E20]"></div>
            <p class="text-sm font-medium">Digital Literacy Programme</p>
          </div>
        </div>

        <button @click="viewCounty = false" class="flex items-center gap-1 text-[#5C6B55] hover:text-green-800! cursor-pointer text-sm font-medium">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
          Back to all counties
        </button>
      </div>
    </section>
  </section>
</template>

<script setup>
import { ref } from "vue";

const viewCounty = ref(false);
function onCountySelect(name) {
   viewCounty.value = true;
}
</script>
