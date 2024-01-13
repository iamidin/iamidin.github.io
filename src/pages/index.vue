<template>
  <generic-panel>
    <header class="neutral h-screen">
      <div class="relative isolate flex items-center h-full">
        <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true">
          <div
            class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-sky-500 to-blue-600 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)">
          </div>
        </div>
        <div class="container">
          <img src="~/assets/images/avatar.jpeg" class="h-20 rounded-full mb-4" />
          <p data-aos="flip-down" class="text-2xl md:text-3xl font-bold  mb-2">Hi, I'm Idin</p>
          <p data-aos="fade-down" data-aos-delay="300" class="text-5xl  md:text-6xl font-bold">Fullstack Developer</p>&nbsp
          <p data-aos="fade-down" data-aos-delay="600" class="text-gray-600 italic mt-6 text-lg md:text-xl">I’m from Indonesia and I have been working as a Programmer for more than 6 years. I’ve worked for several company in Indonesia as a Back-end Developer and Front-end Developer.</p>
          <div class="flex items-center gap-x-6 mt-20">
            <!-- <a href="#"
              class="cursor-pointer rounded-full bg-gradient-to-br from-sky-500 to-blue-500 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600">Email
              Me</a> -->
            <button class="btn btn-primary rounded-full
            ">Contact Me</button>
            <a href="#" class="cursor-pointer font-semibold leading-6 flex justify-center items-center">
              <i class="la la-file-download text-3xl"></i>
              <span class="ml-2">Download CV</span></a>
          </div>
        </div>
        <div
          class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true">
          <div
            class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-sky-500 to-blue-600 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)">
          </div>
        </div>
      </div>
    </header>
  </generic-panel>
</template>

<script>
import { useHead, useSeoMeta } from '#app';
import { definePageMeta } from '#imports';
import GenericPanel from '~/components/commons/GenericPanel';
import banner from '~/assets/images/idindev.png';

export default {
  components: {
    GenericPanel,
  },
  setup () {
    definePageMeta({
      layout: 'default',
    });

    const baseURL = 'https://iamidin.github.io';
    const siteName = 'Idindev';
    const title = 'Ahmad Muhyidin - Techpreneur | Freelancer';
    const desc = "Hi I'm Idin. I’m from Indonesia and I have been working as a Programmer for more than 6 years. I’ve worked for several company in Indonesia as a Back-end Developer and Front-end Developer";

    useSeoMeta({
      description: desc,
    });

    useHead({
      htmlAttrs: {
        lang: 'id',
      },
      title,
      description: desc,
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico',
        },
        {
          hid: 'canonical',
          rel: 'canonical',
          href: 'https://iamidin.github.io',
          // href: `https://iamidin.github.io/articles/${this.$route.params.slug}`,
        },
      ],
      meta: [
        {
          charset: 'utf-8',
        },
        {
          name: 'HandheldFriendly',
          content: 'True',
        },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
        {
          hid: 'og:image',
          name: 'og:image',
          property: 'og:image',
          content: banner,
        },
        {
          property: 'og:site_name',
          content: siteName,
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'website',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: baseURL,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: title,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: desc,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: banner,
        },
        {
          name: 'twitter:site',
          content: '@idindev',
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          hid: 'twitter:url',
          name: 'twitter:url',
          content: baseURL,
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: title,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: desc,
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: banner,
        },
      ],
    });

    return {};
  },
};
</script>
