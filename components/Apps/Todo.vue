<template>
  <div>
    <div class="main-content todo-app w-full px-[var(--margin-x)] pb-8">
      <div class="flex items-center justify-between py-5">
        <div>
          <div class="flex space-x-2">
            <p class="text-xl font-medium text-slate-800 dark:text-navy-50">
              My Day
            </p>

            <div id="top-header-menu" class="inline-flex">
              <button
                class="
                  popper-ref
                  btn
                  h-7
                  w-7
                  rounded-full
                  p-0
                  hover:bg-slate-300/20
                  focus:bg-slate-300/20
                  active:bg-slate-300/25
                  dark:hover:bg-navy-300/20
                  dark:focus:bg-navy-300/20
                  dark:active:bg-navy-300/25
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4.5 w-4.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                  />
                </svg>
              </button>

              <div class="popper-root">
                <div
                  class="
                    popper-box
                    rounded-md
                    border border-slate-150
                    bg-white
                    py-1.5
                    font-inter
                    dark:border-navy-500 dark:bg-navy-700
                  "
                >
                  <ul>
                    <li>
                      <a
                        href="#"
                        class="
                          flex
                          h-8
                          items-center
                          px-3
                          pr-8
                          font-medium
                          tracking-wide
                          outline-none
                          transition-all
                          hover:bg-slate-100 hover:text-slate-800
                          focus:bg-slate-100 focus:text-slate-800
                          dark:hover:bg-navy-600
                          dark:hover:text-navy-100
                          dark:focus:bg-navy-600
                          dark:focus:text-navy-100
                        "
                        >Action</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="
                          flex
                          h-8
                          items-center
                          px-3
                          pr-8
                          font-medium
                          tracking-wide
                          outline-none
                          transition-all
                          hover:bg-slate-100 hover:text-slate-800
                          focus:bg-slate-100 focus:text-slate-800
                          dark:hover:bg-navy-600
                          dark:hover:text-navy-100
                          dark:focus:bg-navy-600
                          dark:focus:text-navy-100
                        "
                        >Another Action</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="
                          flex
                          h-8
                          items-center
                          px-3
                          pr-8
                          font-medium
                          tracking-wide
                          outline-none
                          transition-all
                          hover:bg-slate-100 hover:text-slate-800
                          focus:bg-slate-100 focus:text-slate-800
                          dark:hover:bg-navy-600
                          dark:hover:text-navy-100
                          dark:focus:bg-navy-600
                          dark:focus:text-navy-100
                        "
                        >Something else</a
                      >
                    </li>
                  </ul>
                  <div class="my-1 h-px bg-slate-150 dark:bg-navy-500"></div>
                  <ul>
                    <li>
                      <a
                        href="#"
                        class="
                          flex
                          h-8
                          items-center
                          px-3
                          pr-8
                          font-medium
                          tracking-wide
                          outline-none
                          transition-all
                          hover:bg-slate-100 hover:text-slate-800
                          focus:bg-slate-100 focus:text-slate-800
                          dark:hover:bg-navy-600
                          dark:hover:text-navy-100
                          dark:focus:bg-navy-600
                          dark:focus:text-navy-100
                        "
                        >Separated Link</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <p class="mt-1 text-xs">Sunday, Sep. 14</p>
        </div>
        <div class="flex items-center space-x-2">
          <label class="relative hidden sm:flex">
            <input
              class="
                form-input
                peer
                h-9
                w-full
                rounded-lg
                border border-slate-300
                bg-transparent
                px-3
                py-2
                pl-9
                placeholder:text-slate-400/70
                hover:z-10 hover:border-slate-400
                focus:z-10 focus:border-primary
                dark:border-navy-450
                dark:hover:border-navy-400
                dark:focus:border-accent
              "
              placeholder="Search todos..."
              type="text"
            />
            <span
              class="
                pointer-events-none
                absolute
                flex
                h-full
                w-10
                items-center
                justify-center
                text-slate-400
                peer-focus:text-primary
                dark:text-navy-300 dark:peer-focus:text-accent
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4.5 w-4.5 transition-colors duration-200"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M3.316 13.781l.73-.171-.73.171zm0-5.457l.73.171-.73-.171zm15.473 0l.73-.171-.73.171zm0 5.457l.73.171-.73-.171zm-5.008 5.008l-.171-.73.171.73zm-5.457 0l-.171.73.171-.73zm0-15.473l-.171-.73.171.73zm5.457 0l.171-.73-.171.73zM20.47 21.53a.75.75 0 101.06-1.06l-1.06 1.06zM4.046 13.61a11.198 11.198 0 010-5.115l-1.46-.342a12.698 12.698 0 000 5.8l1.46-.343zm14.013-5.115a11.196 11.196 0 010 5.115l1.46.342a12.698 12.698 0 000-5.8l-1.46.343zm-4.45 9.564a11.196 11.196 0 01-5.114 0l-.342 1.46c1.907.448 3.892.448 5.8 0l-.343-1.46zM8.496 4.046a11.198 11.198 0 015.115 0l.342-1.46a12.698 12.698 0 00-5.8 0l.343 1.46zm0 14.013a5.97 5.97 0 01-4.45-4.45l-1.46.343a7.47 7.47 0 005.568 5.568l.342-1.46zm5.457 1.46a7.47 7.47 0 005.568-5.567l-1.46-.342a5.97 5.97 0 01-4.45 4.45l.342 1.46zM13.61 4.046a5.97 5.97 0 014.45 4.45l1.46-.343a7.47 7.47 0 00-5.568-5.567l-.342 1.46zm-5.457-1.46a7.47 7.47 0 00-5.567 5.567l1.46.342a5.97 5.97 0 014.45-4.45l-.343-1.46zm8.652 15.28l3.665 3.664 1.06-1.06-3.665-3.665-1.06 1.06z"
                />
              </svg>
            </span>
          </label>
          <div class="flex">
            <button
              data-tooltip="Search"
              class="
                btn
                h-9
                w-9
                p-0
                hover:bg-slate-300/20
                focus:bg-slate-300/20
                active:bg-slate-300/25
                dark:hover:bg-navy-300/20
                dark:focus:bg-navy-300/20
                dark:active:bg-navy-300/25
                sm:hidden
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
            <button
              data-tooltip="Filter"
              class="
                btn
                h-9
                w-9
                p-0
                hover:bg-slate-300/20
                focus:bg-slate-300/20
                active:bg-slate-300/25
                dark:hover:bg-navy-300/20
                dark:focus:bg-navy-300/20
                dark:active:bg-navy-300/25
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                />
              </svg>
            </button>
            <button
              data-tooltip="Sort"
              class="
                btn
                h-9
                w-9
                p-0
                hover:bg-slate-300/20
                focus:bg-slate-300/20
                active:bg-slate-300/25
                dark:hover:bg-navy-300/20
                dark:focus:bg-navy-300/20
                dark:active:bg-navy-300/25
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div @click="todoedit = true" class="card px-4 pt-2 pb-4">
        <div id="todo-list">
          <div
            class="border-b border-slate-150 py-3 dark:border-navy-500"
            data-toggle="drawer"
            data-target="#edit-todo-drawer"
          >
            <div class="flex items-center space-x-2 sm:space-x-3">
              <label class="flex">
                <input
                  type="checkbox"
                  checked
                  class="
                    todo-checkbox
                    form-checkbox
                    is-outline
                    h-5
                    w-5
                    rounded-full
                    border-slate-400/70
                    before:bg-primary
                    checked:border-primary
                    hover:border-primary
                    focus:border-primary
                    dark:border-navy-400
                    dark:before:bg-accent
                    dark:checked:border-accent
                    dark:hover:border-accent
                    dark:focus:border-accent
                  "
                />
              </label>
              <h2
                class="
                  cursor-pointer
                  text-slate-600
                  line-clamp-1
                  dark:text-navy-100
                "
              >
                Design UI
              </h2>
            </div>
            <div class="mt-1 flex items-end justify-between">
              <div class="flex flex-wrap items-center font-inter text-xs">
                <p>Today</p>
                <div
                  class="m-1.5 w-px self-stretch bg-slate-200 dark:bg-navy-500"
                ></div>
                <span class="flex items-center space-x-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-3.5 w-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                  <span>06:00</span>
                </span>
                <div
                  class="m-1.5 w-px self-stretch bg-slate-200 dark:bg-navy-500"
                ></div>
                <div class="badge space-x-2.5 px-1 text-success">
                  <div class="h-2 w-2 rounded-full bg-current"></div>
                  <span>Low</span>
                </div>
              </div>
              <div class="flex items-center space-x-1">
                <button
                  class="
                    btn
                    h-7
                    w-7
                    rounded-full
                    p-0
                    hover:bg-slate-300/20
                    focus:bg-slate-300/20
                    active:bg-slate-300/25
                    dark:hover:bg-navy-300/20
                    dark:focus:bg-navy-300/20
                    dark:active:bg-navy-300/25
                  "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4.5 w-4.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                  </svg>
                </button>

                <div class="avatar h-6 w-6">
                  <img
                    class="rounded-full"
                    src="images/200x200.png"
                    alt="avatar"
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            class="border-b border-slate-150 py-3 dark:border-navy-500"
            data-toggle="drawer"
            data-target="#edit-todo-drawer"
          >
            <div class="flex items-center space-x-2 sm:space-x-3">
              <label class="flex">
                <input
                  type="checkbox"
                  class="
                    todo-checkbox
                    form-checkbox
                    is-outline
                    h-5
                    w-5
                    rounded-full
                    border-slate-400/70
                    before:bg-primary
                    checked:border-primary
                    hover:border-primary
                    focus:border-primary
                    dark:border-navy-400
                    dark:before:bg-accent
                    dark:checked:border-accent
                    dark:hover:border-accent
                    dark:focus:border-accent
                  "
                />
              </label>
              <h2
                class="
                  cursor-pointer
                  text-slate-600
                  line-clamp-1
                  dark:text-navy-100
                "
              >
                Lorem ipsum dolor.
              </h2>
            </div>
            <div class="mt-1 flex items-end justify-between">
              <div class="flex flex-wrap items-center font-inter text-xs">
                <p>Today</p>
                <div
                  class="m-1.5 w-px self-stretch bg-slate-200 dark:bg-navy-500"
                ></div>
                <span class="flex items-center space-x-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-3.5 w-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                  <span>10:00</span>
                </span>
                <div
                  class="m-1.5 w-px self-stretch bg-slate-200 dark:bg-navy-500"
                ></div>
                <div class="badge space-x-2.5 px-1 text-warning">
                  <div class="h-2 w-2 rounded-full bg-current"></div>
                  <span>Medium</span>
                </div>
                <div
                  class="m-1.5 w-px self-stretch bg-slate-200 dark:bg-navy-500"
                ></div>
                <div class="badge space-x-2.5 px-1 text-info">
                  <div class="h-2 w-2 rounded-full bg-current"></div>
                  <span>Update</span>
                </div>
              </div>
              <div class="flex items-center space-x-1">
                <button
                  class="
                    btn
                    h-7
                    w-7
                    rounded-full
                    p-0
                    hover:bg-slate-300/20
                    focus:bg-slate-300/20
                    active:bg-slate-300/25
                    dark:hover:bg-navy-300/20
                    dark:focus:bg-navy-300/20
                    dark:active:bg-navy-300/25
                  "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4.5 w-4.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div
            class="border-b border-slate-150 py-3 dark:border-navy-500"
            data-toggle="drawer"
            data-target="#edit-todo-drawer"
          >
            <div class="flex items-center space-x-2 sm:space-x-3">
              <label class="flex">
                <input
                  type="checkbox"
                  class="
                    todo-checkbox
                    form-checkbox
                    is-outline
                    h-5
                    w-5
                    rounded-full
                    border-slate-400/70
                    before:bg-primary
                    checked:border-primary
                    hover:border-primary
                    focus:border-primary
                    dark:border-navy-400
                    dark:before:bg-accent
                    dark:checked:border-accent
                    dark:hover:border-accent
                    dark:focus:border-accent
                  "
                />
              </label>
              <h2
                class="
                  cursor-pointer
                  text-slate-600
                  line-clamp-1
                  dark:text-navy-100
                "
              >
                Chat App fragment.
              </h2>
            </div>
            <div class="mt-1 flex items-end justify-between">
              <div class="flex flex-wrap items-center font-inter text-xs">
                <p>Today</p>
                <div
                  class="m-1.5 w-px self-stretch bg-slate-200 dark:bg-navy-500"
                ></div>
                <span class="flex items-center space-x-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-3.5 w-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                  <span>11:00</span>
                </span>
                <div
                  class="m-1.5 w-px self-stretch bg-slate-200 dark:bg-navy-500"
                ></div>
                <div class="badge space-x-2.5 px-1 text-error">
                  <div class="h-2 w-2 rounded-full bg-current"></div>
                  <span>High</span>
                </div>
              </div>
              <div class="flex items-center space-x-1">
                <button
                  class="
                    btn
                    h-7
                    w-7
                    rounded-full
                    p-0
                    hover:bg-slate-300/20
                    focus:bg-slate-300/20
                    active:bg-slate-300/25
                    dark:hover:bg-navy-300/20
                    dark:focus:bg-navy-300/20
                    dark:active:bg-navy-300/25
                  "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5.5 w-5.5 text-primary dark:text-accent"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                </button>
                <div class="avatar h-6 w-6">
                  <img
                    class="rounded-full"
                    src="images/200x200.png"
                    alt="avatar"
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            class="border-b border-slate-150 py-3 dark:border-navy-500"
            data-toggle="drawer"
            data-target="#edit-todo-drawer"
          >
            <div class="flex items-center space-x-2 sm:space-x-3">
              <label class="flex">
                <input
                  checked
                  type="checkbox"
                  class="
                    todo-checkbox
                    form-checkbox
                    is-outline
                    h-5
                    w-5
                    rounded-full
                    border-slate-400/70
                    before:bg-primary
                    checked:border-primary
                    hover:border-primary
                    focus:border-primary
                    dark:border-navy-400
                    dark:before:bg-accent
                    dark:checked:border-accent
                    dark:hover:border-accent
                    dark:focus:border-accent
                  "
                />
              </label>
              <h2
                class="
                  cursor-pointer
                  text-slate-600
                  line-clamp-1
                  dark:text-navy-100
                "
              >
                Unit Testing
              </h2>
            </div>
            <div class="mt-1 flex items-end justify-between">
              <div class="flex flex-wrap items-center font-inter text-xs">
                <p>Tomorrow</p>
                <div
                  class="m-1.5 w-px self-stretch bg-slate-200 dark:bg-navy-500"
                ></div>
                <span class="flex items-center space-x-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-3.5 w-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                  <span>14:00</span>
                </span>
                <div
                  class="m-1.5 w-px self-stretch bg-slate-200 dark:bg-navy-500"
                ></div>
                <div class="badge space-x-2.5 px-1 text-info">
                  <div class="h-2 w-2 rounded-full bg-current"></div>
                  <span>Update</span>
                </div>
              </div>
              <div class="flex items-center space-x-1">
                <button
                  class="
                    btn
                    h-7
                    w-7
                    rounded-full
                    p-0
                    hover:bg-slate-300/20
                    focus:bg-slate-300/20
                    active:bg-slate-300/25
                    dark:hover:bg-navy-300/20
                    dark:focus:bg-navy-300/20
                    dark:active:bg-navy-300/25
                  "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4.5 w-4.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                  </svg>
                </button>
                <div class="avatar h-6 w-6">
                  <img
                    class="rounded-full"
                    src="images/200x200.png"
                    alt="avatar"
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            class="border-b border-slate-150 py-3 dark:border-navy-500"
            data-toggle="drawer"
            data-target="#edit-todo-drawer"
          >
            <div class="flex items-center space-x-2 sm:space-x-3">
              <label class="flex">
                <input
                  type="checkbox"
                  class="
                    todo-checkbox
                    form-checkbox
                    is-outline
                    h-5
                    w-5
                    rounded-full
                    border-slate-400/70
                    before:bg-primary
                    checked:border-primary
                    hover:border-primary
                    focus:border-primary
                    dark:border-navy-400
                    dark:before:bg-accent
                    dark:checked:border-accent
                    dark:hover:border-accent
                    dark:focus:border-accent
                  "
                />
              </label>
              <h2
                class="
                  cursor-pointer
                  text-slate-600
                  line-clamp-1
                  dark:text-navy-100
                "
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquid minus numquam vero.
              </h2>
            </div>
            <div class="mt-1 flex items-end justify-between">
              <div class="flex flex-wrap items-center font-inter text-xs">
                <p>Tomorrow</p>
                <div
                  class="m-1.5 w-px self-stretch bg-slate-200 dark:bg-navy-500"
                ></div>
                <span class="flex items-center space-x-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-3.5 w-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                  <span>08:00</span>
                </span>
                <div
                  class="m-1.5 w-px self-stretch bg-slate-200 dark:bg-navy-500"
                ></div>
                <div class="badge space-x-2.5 px-1 text-error">
                  <div class="h-2 w-2 rounded-full bg-current"></div>
                  <span>High</span>
                </div>
              </div>
              <div class="flex items-center space-x-1">
                <button
                  class="
                    btn
                    h-7
                    w-7
                    rounded-full
                    p-0
                    hover:bg-slate-300/20
                    focus:bg-slate-300/20
                    active:bg-slate-300/25
                    dark:hover:bg-navy-300/20
                    dark:focus:bg-navy-300/20
                    dark:active:bg-navy-300/25
                  "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5.5 w-5.5 text-primary dark:text-accent"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                </button>
                <div class="avatar h-6 w-6">
                  <img
                    class="rounded-full"
                    src="images/200x200.png"
                    alt="avatar"
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            class="border-b border-slate-150 py-3 dark:border-navy-500"
            data-toggle="drawer"
            data-target="#edit-todo-drawer"
          >
            <div class="flex items-center space-x-2 sm:space-x-3">
              <label class="flex">
                <input
                  type="checkbox"
                  class="
                    todo-checkbox
                    form-checkbox
                    is-outline
                    h-5
                    w-5
                    rounded-full
                    border-slate-400/70
                    before:bg-primary
                    checked:border-primary
                    hover:border-primary
                    focus:border-primary
                    dark:border-navy-400
                    dark:before:bg-accent
                    dark:checked:border-accent
                    dark:hover:border-accent
                    dark:focus:border-accent
                  "
                />
              </label>
              <h2
                class="
                  cursor-pointer
                  text-slate-600
                  line-clamp-1
                  dark:text-navy-100
                "
              >
                Launch new home page
              </h2>
            </div>
            <div class="mt-1 flex items-end justify-between">
              <div class="flex flex-wrap items-center font-inter text-xs">
                <p>Tomorrow</p>
                <div
                  class="m-1.5 w-px self-stretch bg-slate-200 dark:bg-navy-500"
                ></div>
                <span class="flex items-center space-x-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-3.5 w-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                  <span>10:30</span>
                </span>
                <div
                  class="m-1.5 w-px self-stretch bg-slate-200 dark:bg-navy-500"
                ></div>
                <div class="badge space-x-2.5 px-1 text-warning">
                  <div class="h-2 w-2 rounded-full bg-current"></div>
                  <span>Medium</span>
                </div>
              </div>
              <div class="flex items-center space-x-1">
                <button
                  class="
                    btn
                    h-7
                    w-7
                    rounded-full
                    p-0
                    hover:bg-slate-300/20
                    focus:bg-slate-300/20
                    active:bg-slate-300/25
                    dark:hover:bg-navy-300/20
                    dark:focus:bg-navy-300/20
                    dark:active:bg-navy-300/25
                  "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4.5 w-4.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                  </svg>
                </button>
                <div class="avatar h-6 w-6">
                  <img
                    class="rounded-full"
                    src="images/200x200.png"
                    alt="avatar"
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            class="border-b border-slate-150 py-3 dark:border-navy-500"
            data-toggle="drawer"
            data-target="#edit-todo-drawer"
          >
            <div class="flex items-center space-x-2 sm:space-x-3">
              <label class="flex">
                <input
                  type="checkbox"
                  class="
                    todo-checkbox
                    form-checkbox
                    is-outline
                    h-5
                    w-5
                    rounded-full
                    border-slate-400/70
                    before:bg-primary
                    checked:border-primary
                    hover:border-primary
                    focus:border-primary
                    dark:border-navy-400
                    dark:before:bg-accent
                    dark:checked:border-accent
                    dark:hover:border-accent
                    dark:focus:border-accent
                  "
                />
              </label>
              <h2
                class="
                  cursor-pointer
                  text-slate-600
                  line-clamp-1
                  dark:text-navy-100
                "
              >
                Review Announcement Blog
              </h2>
            </div>
            <div class="mt-1 flex items-end justify-between">
              <div class="flex flex-wrap items-center font-inter text-xs">
                <p>Tomorrow</p>
                <div
                  class="m-1.5 w-px self-stretch bg-slate-200 dark:bg-navy-500"
                ></div>
                <span class="flex items-center space-x-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-3.5 w-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                  <span>12:00</span>
                </span>
                <div
                  class="m-1.5 w-px self-stretch bg-slate-200 dark:bg-navy-500"
                ></div>
                <div class="badge space-x-2.5 px-1 text-success">
                  <div class="h-2 w-2 rounded-full bg-current"></div>
                  <span>Low</span>
                </div>
              </div>
              <div class="flex items-center space-x-1">
                <button
                  class="
                    btn
                    h-7
                    w-7
                    rounded-full
                    p-0
                    hover:bg-slate-300/20
                    focus:bg-slate-300/20
                    active:bg-slate-300/25
                    dark:hover:bg-navy-300/20
                    dark:focus:bg-navy-300/20
                    dark:active:bg-navy-300/25
                  "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5.5 w-5.5 text-primary dark:text-accent"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                </button>
                <div class="avatar h-6 w-6">
                  <img
                    class="rounded-full"
                    src="images/200x200.png"
                    alt="avatar"
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            class="border-b border-slate-150 py-3 dark:border-navy-500"
            data-toggle="drawer"
            data-target="#edit-todo-drawer"
          >
            <div class="flex items-center space-x-2 sm:space-x-3">
              <label class="flex">
                <input
                  checked
                  type="checkbox"
                  class="
                    todo-checkbox
                    form-checkbox
                    is-outline
                    h-5
                    w-5
                    rounded-full
                    border-slate-400/70
                    before:bg-primary
                    checked:border-primary
                    hover:border-primary
                    focus:border-primary
                    dark:border-navy-400
                    dark:before:bg-accent
                    dark:checked:border-accent
                    dark:hover:border-accent
                    dark:focus:border-accent
                  "
                />
              </label>
              <h2
                class="
                  cursor-pointer
                  text-slate-600
                  line-clamp-1
                  dark:text-navy-100
                "
              >
                Check Email
              </h2>
            </div>
            <div class="mt-1 flex items-end justify-between">
              <div class="flex flex-wrap items-center font-inter text-xs">
                <p>Every Day</p>
                <div
                  class="m-1.5 w-px self-stretch bg-slate-200 dark:bg-navy-500"
                ></div>
                <span class="flex items-center space-x-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-3.5 w-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                  <span>07:00</span>
                </span>
              </div>
              <div class="flex items-center space-x-1">
                <button
                  class="
                    btn
                    h-7
                    w-7
                    rounded-full
                    p-0
                    hover:bg-slate-300/20
                    focus:bg-slate-300/20
                    active:bg-slate-300/25
                    dark:hover:bg-navy-300/20
                    dark:focus:bg-navy-300/20
                    dark:active:bg-navy-300/25
                  "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5.5 w-5.5 text-primary dark:text-accent"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Todoedit v-show="todoedit" @close="todoedit = false" />
  </div>
</template>

<script setup>
import Todoedit from "@/components/Apps/Todo-edit.vue";
import { ref } from "vue";
const todoedit = ref(false);
</script>

<style scoped>
</style>