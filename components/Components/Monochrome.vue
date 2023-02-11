<template>
  <div class="main-content w-full px-[var(--margin-x)] pb-8">
    <div class="flex items-center space-x-4 py-5 lg:py-6">
      <h2
        class="text-xl font-medium text-slate-800 dark:text-navy-50 lg:text-2xl"
      >
        Monochrome Mode
      </h2>
      <div class="hidden h-full py-1 sm:flex">
        <div class="h-full w-px bg-slate-300 dark:bg-navy-600"></div>
      </div>
      <ul class="hidden flex-wrap items-center space-x-2 sm:flex">
        <li class="flex items-center space-x-2">
          <a
            class="
              text-primary
              transition-colors
              hover:text-primary-focus
              dark:text-accent-light dark:hover:text-accent
            "
            href="#"
            >Components</a
          >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </li>
        <li>Monochrome Mode</li>
      </ul>
    </div>
    <div class="grid grid-cols-1 gap-4 sm:gap-5 lg:gap-6">
      <!--  Monochrome Mode  -->
      <div class="card px-4 pb-4 sm:px-5">
        <div class="my-3 h-8">
          <h2
            class="
              font-medium
              tracking-wide
              text-slate-700
              line-clamp-1
              dark:text-navy-100
              lg:text-base
            "
          >
            Monochrome Mode
          </h2>
        </div>
        <div class="max-w-xl">
          <p>
            Monochromatic UI/UX design may look simpler. Monochrome mode can be
            used if the network is offline.
          </p>
          <div class="inline-space mt-5 flex flex-wrap">
            <div class="h-16 w-16 rounded-lg bg-primary dark:bg-accent"></div>
            <div class="h-16 w-16 rounded-lg bg-secondary"></div>
            <div class="h-16 w-16 rounded-lg bg-info"></div>
            <div class="h-16 w-16 rounded-lg bg-success"></div>
            <div class="h-16 w-16 rounded-lg bg-warning"></div>
            <div class="h-16 w-16 rounded-lg bg-error"></div>
          </div>
          <label class="mt-4 flex items-center space-x-2">
            <input
              id="monochromeToggle"
              class="
                form-switch
                h-5
                w-10
                rounded-lg
                bg-slate-300
                before:rounded-md before:bg-slate-50
                checked:bg-slate-500 checked:before:bg-white
                dark:bg-navy-900
                dark:before:bg-navy-300
                dark:checked:bg-navy-400
                dark:checked:before:bg-white
              "
              type="checkbox"
            />
            <span> Toggle Monochrome Mode</span>
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
</style>