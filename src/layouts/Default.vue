<template>
  <div :data-theme="theme">
    <!-- <div x-data="{ open: true }" x-show="open"
      class="relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-50 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
      <div class="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
        aria-hidden="true">
        <div class="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-indigo-500 to-purple-600 opacity-30"
          style="clip-path: polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)">
        </div>
      </div>
      <div class="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
        aria-hidden="true">
        <div class="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-indigo-500 to-purple-600 opacity-30"
          style="clip-path: polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)">
        </div>
      </div>
      <div class="flex flex-wrap items-center gap-x-4 gap-y-2">
        <p class="text-sm leading-6 text-gray-900 hover:text-indigo-500">
          <strong class="font-semibold">GasBro 2023</strong><svg viewBox="0 0 2 2"
            class="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true">
            <circle cx="1" cy="1" r="1" /></svg>Ikuti acara kami di Jakarta dari 15-16 Desember untuk melihat keseruan
          yang
          akan datang.
        </p>
        <a href="#"
          class="flex-none rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900">Daftar
          Sekarang <span aria-hidden="true">&rarr;</span></a>
      </div>
      <div class="flex flex-1 justify-end">
        <button @click="open = false" type="button" class="-m-3 p-3 focus-visible:outline-offset-[-4px]">
          <span class="sr-only">Dismiss</span>
          <svg class="h-5 w-5 text-gray-900" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path
              d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
          </svg>
        </button>
      </div>
    </div> -->

    <div class="navbar fixed z-40 bg-neutral/70 justify-center">
      <div class="flex w-full md:max-w-7xl px-5">
        <div class="navbar-start">
          <div class="dropdown">
            <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><a>About</a></li>
              <li>
                <a>Services</a>
                <ul class="p-2">
                  <li><a>Front-End</a></li>
                  <li><a>Back-End</a></li>
                </ul>
              </li>
              <li><a>Portofolio</a></li>
              <li><a>Contact</a></li>
            </ul>
          </div>
          <a class="text-xl font-bold">Idindev<span class="text-primary">.</span></a>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal px-1 font-semibold">
            <li><a>About</a></li>
            <li>
              <details>
                <summary>Services</summary>
                <ul class="p-2">
                  <li class="w-32"><a>Front-End</a></li>
                  <li class="w-32"><a>Back-End</a></li>
                </ul>
              </details>
            </li>
            <li><a>Portofolio</a></li>
            <li><a>Contact</a></li>
          </ul>
        </div>
        <div class="navbar-end">
          <div class="flex w-full justify-end">
            <svg v-if="theme === 'light'" @click="changeTheme('dark')" class="w-6 h-6 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
            <svg v-else @click="changeTheme('light')" class ="w-6 h-6 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
          </div>
        </div>
      </div>
    </div>

    <slot />

    <footer class="footer footer-center p-10 bg-base-50">
      <div>
        <!-- <h1 class="text-2xl md:text3xl font-bold">Idindev</h1> -->
        <p class="md:font-bold">
          Idindev - Ahmad Muhyidin
        </p>
        <p>Copyright © {{new Date().getFullYear()}} - All right reserved</p>
      </div>
      <div class="z-50 justify-center flex items-center">
        <div class="grid grid-flow-col gap-4">
          <a href="https://www.linkedin.com/in/idindev" class="cursor-pointer" target="_blank">
            <i class="lab la-linkedin text-4xl"></i>
          </a>
          <a href="https://github.com/iamidin" class="cursor-pointer" target="_blank">
            <i class="lab la-github text-4xl"></i>
          </a>
          <a href="https://www.instagram.com/idin.dev" class="cursor-pointer" target="_blank">
            <i class="lab la-instagram text-4xl"></i>
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { ref, watch, onMounted } from 'vue';
export default {
  setup () {
    const theme = ref(null);

    watch(theme, (value) => {
      localStorage.setItem('daisyui-theme', value);
    });

    onMounted(() => {
      theme.value = localStorage.getItem('daisyui-theme') || 'light';
    });

    const changeTheme = ((value) => {
      theme.value = value;
    })

    return {
      theme,
      changeTheme
    };
  },
};
</script>
