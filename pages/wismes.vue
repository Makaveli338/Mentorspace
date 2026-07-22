<template>
  <section>
    <!--Heading-->
    <section
      class="bg-[#0E1C11] bg-[url('/wismes.png')] bg-cover bg-center bg-no-repeat w-full sm:pt-20.5 sm:pb-27.5 py-16"
    >
      <div class="section text-white" data-aos="fade-right">
        <div class="max-w-2xl">
          <span
            class="bg-[#FFFFFF26] py-1 px-3 border border-[#FFFFFF4D] rounded-sm mono tracking-[1px] text-xs"
          >
            Flagship Programme
          </span>
          <p class="text-3xl sm:text-5xl mt-5 playfair font-bold leading-14">
            Women in Sustainable Mining & Environmental Stewardship Initiative
          </p>
          <i class="mt-3 text-[#C47A1A] text-xl leading-7.5 playfair"
            >"Empowering Women. Restoring the Earth. Building Prosperity."</i
          >
          <p class="text-lg text-[#FFFFFFCC] mt-4 mb-7">
            WiSMES improves the socio-economic wellbeing of women in Migori
            County by increasing their participation across the responsible
            mining value chain and promoting environmental restoration.
          </p>

          <button class="primary-btn bg-[#C47A1A]! hover:bg-[#c77c1a6e]!">
            Support This Programme
          </button>
        </div>
      </div>
    </section>

    <!--Context-->
    <section
      class="px-6 section flex flex-col lg:flex-row gap-4 lg:gap-12 mt-16"
    >
      <div data-aos="fade-right" class="max-w-xl">
        <span class="secondary-badge">Context</span>
        <p class="playfair font-bold text-4xl leading-10 mt-2.5">
          Why Migori County?
        </p>
        <p class="mt-9 leading-7 text-[#5C6B55]">
          Migori is one of Kenya's leading artisanal gold mining regions. Women
          contribute significantly to mining activities but face significant
          barriers:
        </p>

        <div class="mt-3.5 space-y-2.5">
          <div
            v-for="barrier in [
              'Earn lower incomes than men',
              'Work in unsafe conditions',
              'Have limited ownership of mining enterprises',
              'Have little access to finance',
              'Lack technical mining skills',
              'Are underrepresented in decision-making',
              'Bear a disproportionate burden of environmental degradation',
            ]"
            :key="barrier"
            class="flex gap-2.5 items-center text-sm leading-5"
          >
            <div
              class="size-5 rounded-full flex-center bg-[#1B5E201A] shrink-0"
            >
              <svg
                width="11"
                height="11"
                viewBox="0 0 11 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.125 8.25L6.875 5.5L4.125 2.75"
                  stroke="#1B5E20"
                  stroke-width="0.916667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <p>{{ barrier }}</p>
          </div>
        </div>
      </div>

      <div data-aos="fade-left">
        <img src="/migori.png" alt="people of Migori" />
      </div>
    </section>

    <!--Strategic pillars-->
    <section class="py-16 bg-[#EDE9E0] mt-16">
      <div class="section space-y-8">
        <!--Heading-->
        <div data-aos="fade-right" class="flex flex-col gap-2.5">
          <span class="secondary-badge">Strategic Pillars</span>
          <p class="playfair font-bold text-4xl leading-10 mt-2.5">
            Six Pillars of Transformation
          </p>
        </div>

        <div data-aos="fade-up" class="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          <div
            class="bg-white rounded-md border p-6 border-[#00000014] space-y-4"
          >
            <div class="space-y-3">
              <p class="text-2xl font-medium mono text-[#1B5E2033] leading-7.5">
                01
              </p>
              <p class="playfair leading-6 font-semibold">
                Women in Responsible Mining
              </p>
              <p class="text-sm text-[#5C6B55]">
                Support women to participate in higher-value mining activities
                including geological awareness, responsible ore processing,
                safety and health, mineral grading, business management, and
                cooperative development.
              </p>
            </div>

            <div class="border-t space-y-2 border-[#00000014] pt-3.5">
              <p class="text-xs leading-5 text-[#C47A1A] uppercase">
                Expected Outcome
              </p>
              <p class="text-sm leading-5">
                Women-led mining enterprises that are safer, more productive,
                and more profitable.
              </p>
            </div>
          </div>

          <div
            class="bg-white rounded-md border p-6 border-[#00000014] space-y-4"
          >
            <div class="space-y-3">
              <p class="text-2xl font-medium mono text-[#1B5E2033] leading-7.5">
                02
              </p>
              <p class="playfair leading-6 font-semibold">
                Green Gold Initiative
              </p>
              <p class="text-sm text-[#5C6B55]">
                Promote environmentally responsible mining practices through
                reduction of land degradation, improved tailings management,
                water conservation, safer processing methods, rehabilitation of
                mined land, and biodiversity restoration.
              </p>
            </div>

            <div class="border-t space-y-2 border-[#00000014] pt-3.5">
              <p class="text-xs leading-5 text-[#C47A1A] uppercase">
                Expected Outcome
              </p>
              <p class="text-sm leading-5">
                Each participating mining group commits to restoring degraded
                areas.
              </p>
            </div>
          </div>

          <div
            class="bg-white rounded-md border p-6 border-[#00000014] space-y-4"
          >
            <div class="space-y-3">
              <p class="text-2xl font-medium mono text-[#1B5E2033] leading-7.5">
                03
              </p>
              <p class="playfair leading-6 font-semibold">
                Women-Owned Mining Enterprises
              </p>
              <p class="text-sm text-[#5C6B55]">
                Support women to establish businesses across the mining value
                chain including mining services, protective equipment supply,
                catering, transport, gemstone cutting and polishing, jewelry
                production, and environmental services.
              </p>
            </div>

            <div class="border-t space-y-2 border-[#00000014] pt-3.5">
              <p class="text-xs leading-5 text-[#C47A1A] uppercase">
                Expected Outcome
              </p>
              <p class="text-sm leading-5">
                Broader income opportunities beyond extraction alone.
              </p>
            </div>
          </div>

          <div
            class="bg-white rounded-md border p-6 border-[#00000014] space-y-4"
          >
            <div class="space-y-3">
              <p class="text-2xl font-medium mono text-[#1B5E2033] leading-7.5">
                04
              </p>
              <p class="playfair leading-6 font-semibold">
                Climate Smart Communities
              </p>
              <p class="text-sm text-[#5C6B55]">
                Develop community-led environmental initiatives including tree
                nurseries, indigenous tree planting, riverbank restoration,
                community forests, climate-smart agriculture, and watershed
                protection.
              </p>
            </div>

            <div class="border-t space-y-2 border-[#00000014] pt-3.5">
              <p class="text-xs leading-5 text-[#C47A1A] uppercase">
                Expected Outcome
              </p>
              <p class="text-sm leading-5">
                Resilient communities leading environmental stewardship.
              </p>
            </div>
          </div>

          <div
            class="bg-white rounded-md border p-6 border-[#00000014] space-y-4"
          >
            <div class="space-y-3">
              <p class="text-2xl font-medium mono text-[#1B5E2033] leading-7.5">
                05
              </p>
              <p class="playfair leading-6 font-semibold">Youth Innovation</p>
              <p class="text-sm text-[#5C6B55]">
                Engage young people in drone mapping awareness, GIS basics,
                environmental monitoring, entrepreneurship, digital marketing,
                data collection, and innovation challenges.
              </p>
            </div>

            <div class="border-t space-y-2 border-[#00000014] pt-3.5">
              <p class="text-xs leading-5 text-[#C47A1A] uppercase">
                Expected Outcome
              </p>
              <p class="text-sm leading-5">
                Youth-led innovation teams supporting environmental monitoring
                and digital services.
              </p>
            </div>
          </div>

          <div
            class="bg-white rounded-md border p-6 border-[#00000014] space-y-4"
          >
            <div class="space-y-3">
              <p class="text-2xl font-medium mono text-[#1B5E2033] leading-7.5">
                06
              </p>
              <p class="playfair leading-6 font-semibold">
                Financial Inclusion
              </p>
              <p class="text-sm text-[#5C6B55]">
                Support women through savings groups, investment clubs,
                cooperative societies, financial literacy training, business
                coaching, and market linkages.
              </p>
            </div>

            <div class="border-t space-y-2 border-[#00000014] pt-3.5">
              <p class="text-xs leading-5 text-[#C47A1A] uppercase">
                Expected Outcome
              </p>
              <p class="text-sm leading-5">
                20 women's savings and investment groups established.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--Environmental flagship-->
    <section class="bg-primary py-14">
      <div class="section flex lg:justify-between lg:items-center flex-col lg:flex-row gap-4">
        <!-- Left container -->
        <div data-aos="fade-right" class="max-w-154 space-y-9">
          <div class="flex flex-col gap-2.5">
            <span
              class="secondary-badge border-[#1B5E20]! bg-[#FFFFFF14]! text-white!"
              >Environmental Flagship</span
            >
            <p class="playfair font-bold text-4xl leading-10 mt-2.5 text-white">
              One Woman Miner = Ten Trees
            </p>
          </div>

          <p class="leading-7 text-[#5C6B55]">
            Each participating woman commits to planting and nurturing ten
            indigenous trees annually. With 500 women, that equals 5,000 trees
            planted each year with monitored survival rates.
          </p>
        </div>

        <!-- Right Container-->
        <div data-aos="fade-left" class="flex gap-2 items-center h-full">
          <img src="conservation-1.png" alt="tree planting" />
          <img src="conservation-2.png" alt="Forest" class="hidden sm:block"  />
          <img src="conservation-3.png" alt="ocean" class="hidden sm:block" />
        </div>
      </div>
    </section>

    <!--Targets-->
    <section class="section my-16 space-y-9">
      <!--Heading-->
      <div data-aos="fade-right" class="flex flex-col gap-2.5">
        <span class="secondary-badge">Targets</span>
        <p class="playfair font-bold text-4xl leading-10">Five-Year Outcomes</p>
      </div>

      <div data-aos="fade-up" class="flex gap-4 flex-wrap justify-between">
        <!-- -->
        <div
          class="w-48 h-42 flex-center flex-col gap-1.5 rounded-md border border-[#0000001A] hover:border-[#1B5E20]! cursor-pointer"
        >
          <p class="font-bold playfair text-4xl leading-13 text-[#1B5E20]!">
            1,500
          </p>
          <p class="text-sm leading-5 text-[#5C6B55] text-center">
            Women trained in responsible mining
          </p>
        </div>

        <!-- -->
        <div
          class="w-48 h-42 flex-center flex-col gap-1.5 rounded-md border border-[#0000001A] hover:border-[#1B5E20]! cursor-pointer"
        >
          <p class="font-bold playfair text-4xl leading-13 text-[#1B5E20]!">
            300
          </p>
          <p class="text-sm leading-5 text-[#5C6B55] text-center">
            Women-led enterprises strengthened
          </p>
        </div>

        <!-- -->
        <div
          class="w-48 h-42 flex-center flex-col gap-1.5 rounded-md border border-[#0000001A] hover:border-[#1B5E20]! cursor-pointer"
        >
          <p class="font-bold playfair text-4xl leading-13 text-[#1B5E20]!">
            50 ha
          </p>
          <p class="text-sm leading-5 text-[#5C6B55] text-center">
            Degraded mining land rehabilitated
          </p>
        </div>

        <!-- -->
        <div
          class="w-48 h-42 flex-center flex-col gap-1.5 rounded-md border border-[#0000001A] hover:border-[#1B5E20]! cursor-pointer"
        >
          <p class="font-bold playfair text-4xl leading-13 text-[#1B5E20]!">
            50,000
          </p>
          <p class="text-sm leading-5 text-[#5C6B55] text-center">
            Indigenous trees planted
          </p>
        </div>

        <!-- -->
        <div
          class="w-48 h-42 flex-center flex-col gap-1.5 rounded-md border border-[#0000001A] hover:border-[#1B5E20]! cursor-pointer"
        >
          <p class="font-bold playfair text-4xl leading-13 text-[#1B5E20]!">
            20
          </p>
          <p class="text-sm leading-5 text-[#5C6B55] text-center">
            Savings & investment groups
          </p>
        </div>

        <!-- -->
        <div
          class="w-48 h-42 flex-center flex-col gap-1.5 rounded-md border border-[#0000001A] hover:border-[#1B5E20]! cursor-pointer"
        >
          <p class="font-bold playfair text-4xl leading-13 text-[#1B5E20]!">
            10
          </p>
          <p class="text-sm leading-5 text-[#5C6B55] text-center">
            Youth innovation teams
          </p>
        </div>
      </div>
    </section>

    <!--Support -->
    <section class="bg-[#C47A1A] py-14">
      <div class="max-w-2xl mx-auto space-y-6 text-white text-center">
        <div class="space-y-3">
          <p class="playfair font-bold text-4xl leading-10 mt-2.5">
            Support WiSMES
          </p>
        <p class="leading-6 text-[#FFFFFFCC]">Help us empower women miners and restore the environment in Migori County.</p>
        </div>

        <div class="flex gap-3 justify-center">
          <NuxtLink to="/donate" class="outlined-btn border-0! bg-white! hover:bg-white/80! text-[#C47A1A]!">Donate Now</NuxtLink>
          <NuxtLink to="/contact" class="outlined-btn border-[#FFFFFF80]! hover:bg-white/20! text-white! bg-transparent!">Become a Partner</NuxtLink>

        </div>
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
