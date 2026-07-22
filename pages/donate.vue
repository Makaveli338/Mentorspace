<template>
    <!-- Hero -->
    <section
      class="bg-[url('/about-hero.png')] bg-cover bg-center bg-no-repeat w-full pt-20.5 pb-13.5"
    >
      <div class="section text-white" data-aos="fade-right">
        <p class="text-xs tracking-[2px] uppercase mono">Give</p>
        <p class="text-5xl mt-2.5 playfair font-bold leading-14">
          Support Lasting Change
        </p>
        <p class="text-lg text-[#FFFFFFCC] mt-3">
          Your donation empowers communities, restores the environment, and
          transforms lives.
        </p>
      </div>
    </section>

    <!-- Body -->
    <div class="px-4 sm:px-0">
      <section
        class="max-w-2xl mx-auto border my-16 border-[#0000001A] p-4 sm:p-9 rounded-md space-y-5"
      >
        <p class="font-semibold text-2xl playfair leading-9">Make a Donation</p>
  
        <div class="grid grid-cols-2 gap-8">
          <button
            @click="frequency = 'one-time'"
            class="w-full py-2.5 text-sm cursor-pointer font-medium leading-5 rounded-sm border"
            :class="
              frequency === 'one-time'
                ? 'bg-primary text-white border-primary'
                : 'border-[#0000001F] hover:bg-primary/10'
            "
          >
            One-Time
          </button>
          <button
            @click="frequency = 'monthly'"
            class="w-full py-2.5 text-sm cursor-pointer font-medium leading-5 rounded-sm border"
            :class="
              frequency === 'monthly'
                ? 'bg-primary text-white border-primary'
                : 'border-[#0000001F] hover:bg-primary/10'
            "
          >
            Monthly Giving
          </button>
        </div>
  
        <!--Amount selection / input-->
        <div class="space-y-3">
          <div class="flex items-center justify-between">
            <p class="text-sm font-medium">Select Amount ({{ currency }})</p>
  
            <div class="relative">
              <button
                @click="isOpen = !isOpen"
                class="py-1.5 px-3 text-xs font-medium border rounded-md border-[#0000001A] flex gap-2 items-center cursor-pointer hover:bg-primary/10"
              >
                {{ currency }}
  
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-4 transition-transform duration-200"
                  :class="{ 'rotate-180': isOpen }"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </button>
  
              <div
                v-show="isOpen"
                class="absolute top-0 mt-8 bg-white border rounded-md border-[#0000001A] space-y-0.5 overflow-hidden z-10"
              >
                <button
                  v-for="code in Object.keys(currencies)"
                  :key="code"
                  @click="selectCurrency(code)"
                  class="hover:bg-primary/10 py-1.5 w-25 sm:w-35 cursor-pointer text-xs text-start px-3"
                  :class="{ 'bg-primary/10': code === currency }"
                >
                  {{ code }}
                </button>
              </div>
            </div>
          </div>
  
          <div class="grid grid-cols-5 gap-1.5">
            <button
              v-for="preset in currentCurrency.presets"
              :key="preset"
              @click="selectPreset(preset)"
              class="w-full py-2.5 text-sm cursor-pointer font-medium leading-5 rounded-sm border"
              :class="
                amount === preset
                  ? 'bg-primary text-white border-primary'
                  : 'border-[#0000001F] hover:bg-primary/10'
              "
            >
              {{ currentCurrency.symbol }}{{ preset.toLocaleString() }}
            </button>
          </div>
  
          <!--Enter custom account-->
          <div class="relative">
            <span
              class="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-[#5C6B55]"
            >
              {{ currentCurrency.symbol }}
            </span>
            <input
              v-model.number="amount"
              type="number"
              min="0"
              placeholder="Enter custom amount"
              class="no-spinner w-full py-2.5 pl-12 pr-3 text-sm rounded-sm border border-[#0000001F] focus:outline-none focus:ring-0 focus:border-primary"
            />
          </div>
        </div>
  
        <!--Donation input-->
        <div class="space-y-2">
          <p class="text-sm font-medium">
            Designate Your Gift
          </p>
  
          <select
            name="gift-direction"
            id="gift-direction"
            v-model="giftDirection"
            class="text-sm rounded-sm border border-[#0000001F] focus:outline-none focus:ring-0 focus:border-primary w-full py-2.5 px-3"
          >
            <option value="where-most-needed">Where most needed</option>
            <option value="youth-empowerment">Youth Empowerment</option>
            <option value="digital-skills">Digital Skills</option>
            <option value="agriculture">Agriculture</option>
            <option value="environmental-conservation">
              Environmental Conservation
            </option>
            <option value="community-development">Community Development</option>
            <option value="sports-development">Sports Development</option>
            <option value="research">Research</option>
          </select>
        </div>
  
        <!-- Person Details-->
        <div class="space-y-2">
          <!--Name-->
          <div class="flex gap-2 w-full">
            <div class="sm:w-1/2 w-full">
              <input
              v-model="firstName"
              type="text"
              placeholder="First Name"
              class="w-full py-2.5 px-4 text-sm rounded-sm border border-[#0000001F] focus:outline-none focus:ring-0 focus:border-primary"
            />
            </div>
  
            <div class="sm:w-1/2 w-full">
              <input
              v-model="lastName"
              type="text"
              placeholder="Last Name"
              class="w-full py-2.5 px-4 text-sm rounded-sm border border-[#0000001F] focus:outline-none focus:ring-0 focus:border-primary"
            />
            </div>
          </div>
  
          <!--Email-->
          <div>
            <input
             v-model="email"
             type="email"
             placeholder="Email Address"
             class="w-full py-2.5 px-4 text-sm rounded-sm border border-[#0000001F] focus:outline-none focus:ring-0 focus:border-primary"
           />
          </div>
  
          <!--country-->
          <div ref="countryRef" class="relative">
            <button
              type="button"
              @click="countryOpen = !countryOpen"
              class="w-full py-2.5 px-3 text-sm text-start rounded-sm border border-[#0000001F] flex items-center justify-between gap-2 cursor-pointer focus:outline-none focus:border-primary"
              :class="{ 'border-primary': countryOpen }"
            >
              <span :class="selectedCountry ? '' : 'text-[#5C6B55]'">
                {{ selectedCountry ? selectedCountry.name : "Select Country" }}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-4 shrink-0 transition-transform duration-200"
                :class="{ 'rotate-180': countryOpen }"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </button>
  
            <div
              v-show="countryOpen"
              class="absolute z-10 mt-1 w-full bg-white border rounded-sm border-[#0000001A] shadow-sm overflow-hidden"
            >
              <div class="p-2 border-b border-[#0000001A]">
                <input
                  v-model="countrySearch"
                  type="text"
                  placeholder="Search countries..."
                  class="w-full py-1.5 px-2.5 text-sm rounded-sm border border-[#0000001F] focus:outline-none focus:ring-0 focus:border-primary"
                />
              </div>
              <ul class="max-h-60 overflow-y-auto">
                <li v-for="c in filteredCountries" :key="c.code">
                  <button
                    type="button"
                    @click="selectCountry(c.code)"
                    class="w-full text-start py-2 px-3 text-sm cursor-pointer hover:bg-primary/10"
                    :class="{ 'bg-primary/10': c.code === country }"
                  >
                    {{ c.name }}
                  </button>
                </li>
                <li
                  v-if="!filteredCountries.length"
                  class="py-2 px-3 text-sm text-[#5C6B55]"
                >
                  No matches
                </li>
              </ul>
            </div>
          </div>
        </div>
  
        <div class="space-y-2">
          <!--Submit-->
          <button
            :disabled="!amount"
            class="w-full py-3 text-sm font-medium leading-5 text-white rounded-sm bg-[#C47A1A] cursor-pointer hover:bg-[#C47A1A]/90 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <template v-if="amount">
              Donate {{ currentCurrency.symbol }}{{ amount.toLocaleString()
              }}{{ frequency === "monthly" ? " / month" : "" }}
            </template>
            <template v-else>
              Donate {{ currentCurrency.symbol
              }}{{ currentCurrency.presets[1].toLocaleString()
              }}{{ frequency === "monthly" ? " Monthly" : " Now" }}
            </template>
          </button>
          <p
            v-if="amount && frequency === 'monthly'"
            class="text-xs text-center text-[#5C6B55]"
          >
            You'll be charged {{ currentCurrency.symbol }}{{ amount.toLocaleString() }}
            every month. Cancel anytime.
          </p>
  
          <p class="text-xs leading-4 text-[#5C6B55] text-center">🔒 Secure, encrypted payment processing</p>
  
        </div>
  
      </section>
    </div>
</template>

<script setup lang="ts">
import { useSeoMeta } from "nuxt/app";
import { computed, onBeforeUnmount, onMounted, ref } from "vue";

const isOpen = ref(false);
const amount = ref<number | null>(null);
const frequency = ref<"one-time" | "monthly">("one-time");

// Supported currencies drive every currency-dependent bit of this page.
const currencies = {
  USD: { symbol: "$", presets: [25, 50, 100, 250, 500] },
  KSH: { symbol: "KSh ", presets: [2500, 5000, 10000, 25000, 50000] },
} as const;

const currency = ref<keyof typeof currencies>("USD");
const currentCurrency = computed(() => currencies[currency.value]);

function selectCurrency(code: string) {
  currency.value = code as keyof typeof currencies;
  isOpen.value = false;
  amount.value = null;
}

function selectPreset(preset: number) {
  amount.value = preset;
}
const firstName = ref("");
const lastName = ref("");
const email = ref("");
const country = ref("");
const giftDirection = ref("where-most-needed");

// Build the country list from the browser's Intl data — no hardcoded list.
const regionNames = new Intl.DisplayNames(["en"], { type: "region" });
const countries = Array.from({ length: 26 * 26 }, (_, i) => {
  const code =
    String.fromCharCode(65 + Math.floor(i / 26)) +
    String.fromCharCode(65 + (i % 26));
  const name = regionNames.of(code);
  return { code, name };
})
  // Keep only real countries/territories (Intl returns the code itself for
  // unassigned pairs, and skips non-letter names like "Outlying Oceania").
  .filter((c) => c.name && c.name !== c.code && /^[\p{L}]/u.test(c.name))
  .sort((a, b) => a.name!.localeCompare(b.name!));

// Searchable country dropdown state.
const countryRef = ref<HTMLElement | null>(null);
const countryOpen = ref(false);
const countrySearch = ref("");

const filteredCountries = computed(() => {
  const q = countrySearch.value.trim().toLowerCase();
  if (!q) return countries;
  return countries.filter((c) => c.name!.toLowerCase().includes(q));
});

const selectedCountry = computed(
  () => countries.find((c) => c.code === country.value) ?? null
);

function selectCountry(code: string) {
  country.value = code;
  countryOpen.value = false;
  countrySearch.value = "";
}

// Close the dropdown when clicking outside it.
function onClickOutside(e: MouseEvent) {
  if (countryRef.value && !countryRef.value.contains(e.target as Node)) {
    countryOpen.value = false;
  }
}
onMounted(() => document.addEventListener("click", onClickOutside));
onBeforeUnmount(() => document.removeEventListener("click", onClickOutside));
</script>
