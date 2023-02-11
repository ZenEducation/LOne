<template>
  <div class="main-content w-full px-[var(--margin-x)] pb-8">
    <div class="flex items-center space-x-4 py-5 lg:py-6">
      <h2
        class="text-xl font-medium text-slate-800 dark:text-navy-50 lg:text-2xl"
      >
        Modal
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
        <li>Modal</li>
      </ul>
    </div>
    <div class="grid grid-cols-1 gap-4 sm:gap-5 lg:gap-6">
      <!-- Basic Modal -->
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
            Basic Modal
          </h2>
        </div>
        <div>
          <p class="max-w-xl">
            The Modal component inform users about a specific task and may
            contain critical information, require decisions, or involve multiple
            tasks.
          </p>
          <div class="mt-5">
            <button
              data-toggle="modal"
              data-target="#modal1"
              class="
                btn
                bg-slate-150
                font-medium
                text-slate-800
                hover:bg-slate-200
                focus:bg-slate-200
                active:bg-slate-200/80
                dark:bg-navy-500
                dark:text-navy-50
                dark:hover:bg-navy-450
                dark:focus:bg-navy-450
                dark:active:bg-navy-450/90
              "
            >
              Basic Modal
            </button>
          </div>
        </div>
      </div>

      <!-- Backdrop Blur -->
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
            Backdrop Blur
          </h2>
        </div>
        <div>
          <p class="max-w-xl">
            The Modal component inform users about a specific task and may
            contain critical information, require decisions, or involve multiple
            tasks.
          </p>
          <div class="mt-5">
            <button
              data-toggle="modal"
              data-target="#modal2"
              class="
                btn
                bg-slate-150
                font-medium
                text-slate-800
                hover:bg-slate-200
                focus:bg-slate-200
                active:bg-slate-200/80
                dark:bg-navy-500
                dark:text-navy-50
                dark:hover:bg-navy-450
                dark:focus:bg-navy-450
                dark:active:bg-navy-450/90
              "
            >
              Backdrop Blur
            </button>
          </div>
        </div>
      </div>

      <!-- Modal Transition -->
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
            Modal Transition
          </h2>
        </div>
        <div>
          <p class="max-w-xl">
            The Modal component inform users about a specific task and may
            contain critical information, require decisions, or involve multiple
            tasks.
          </p>
          <div class="inline-space mt-5 flex">
            <button
              data-toggle="modal"
              data-target="#modal3"
              class="
                btn
                bg-slate-150
                font-medium
                text-slate-800
                hover:bg-slate-200
                focus:bg-slate-200
                active:bg-slate-200/80
                dark:bg-navy-500
                dark:text-navy-50
                dark:hover:bg-navy-450
                dark:focus:bg-navy-450
                dark:active:bg-navy-450/90
              "
            >
              Shift Up
            </button>
            <button
              data-toggle="modal"
              data-target="#modal4"
              class="
                btn
                bg-slate-150
                font-medium
                text-slate-800
                hover:bg-slate-200
                focus:bg-slate-200
                active:bg-slate-200/80
                dark:bg-navy-500
                dark:text-navy-50
                dark:hover:bg-navy-450
                dark:focus:bg-navy-450
                dark:active:bg-navy-450/90
              "
            >
              Shift Down
            </button>
          </div>
        </div>
      </div>

      <!-- Modal Scale -->
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
            Modal Scale
          </h2>
        </div>
        <div>
          <p class="max-w-xl">
            The Modal component inform users about a specific task and may
            contain critical information, require decisions, or involve multiple
            tasks.
          </p>
          <div class="inline-space mt-5 flex">
            <button
              data-toggle="modal"
              data-target="#modal5"
              class="
                btn
                bg-slate-150
                font-medium
                text-slate-800
                hover:bg-slate-200
                focus:bg-slate-200
                active:bg-slate-200/80
                dark:bg-navy-500
                dark:text-navy-50
                dark:hover:bg-navy-450
                dark:focus:bg-navy-450
                dark:active:bg-navy-450/90
              "
            >
              Origin Top
            </button>
            <button
              data-toggle="modal"
              data-target="#modal6"
              class="
                btn
                bg-slate-150
                font-medium
                text-slate-800
                hover:bg-slate-200
                focus:bg-slate-200
                active:bg-slate-200/80
                dark:bg-navy-500
                dark:text-navy-50
                dark:hover:bg-navy-450
                dark:focus:bg-navy-450
                dark:active:bg-navy-450/90
              "
            >
              Origin bottom
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
</style>