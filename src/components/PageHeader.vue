<template>
  <div id="home">
    <div class="container max-w-screen-xl mx-auto flex flex-wrap flex-col md:flex-row items-stretch px-8 pt-20 md:pt-36 lg:pt-32 pb-4 md:pb-16">
      <div class="flex flex-col w-full md:w-2/5 justify-center items-center pb-0 md:pb-24 lg:pb-16" data-aos="fade-right">
        <div class="md:pl-8 pt-12 pb-16 md:py-12 w-full md:whitespace-nowrap text-center md:text-left">
          <span class="text-gray-500 text-2xl lg:text-3xl">Hello, I'm</span>
          <h1 class="text-black font-bold text-4xl lg:text-6xl relative pt-1">Mikołaj Mirko</h1>
          <img src="~@/assets/main_underline.svg" class="-mt-2 mx-auto md:-ml-6 w-72 md:w-96 select-none" alt="" /> 
          <h2 class="text-black font-light text-xl lg:text-2xl pt-2">Frontend developer <br class="lg:hidden">& UI designer</h2>
        </div>
        <div class="social-buttons hidden lg:block">
          <a class="linkedin-icon inline-flex flex-nowrap mb-1" href="https://www.linkedin.com/in/mikolajmirko/" rel="noreferrer" target="_blank" data-aos="fade-left" data-aos-delay="200">
            <linkedin-icon size="24" class="mx-1.5 mr-3"></linkedin-icon>
            <span class="pr-2.5">My experience on LinkedIn</span>
          </a><br>
          <a class="github-icon inline-flex mb-1 pr-3" href="https://github.com/mikolajmirko" rel="noreferrer" target="_blank" data-aos="fade-left" data-aos-delay="250">
            <github-icon size="24" class="mx-1.5 mr-3"></github-icon>
            <span class="pr-2.5">My projects on Github</span>
          </a><br>
          <a class="dribbble-icon inline-flex pr-3" href="https://dribbble.com/mikolajmirko" rel="noreferrer" target="_blank" data-aos="fade-left" data-aos-delay="300">
            <dribbble-icon size="24" class="mx-1.5 mr-3"></dribbble-icon>
            <span class="pr-2.5">My designs on Dribbble</span>
          </a>
        </div>
      </div>
      <div class="w-full md:w-3/5 relative header-image" data-aos="fade-left" data-aos-delay="150"></div>
    </div>
  </div>
</template>

<script>
import { LinkedinIcon, GithubIcon, DribbbleIcon } from 'vue-feather-icons';

export default {
  name: 'PageHeader',
  components: {
    LinkedinIcon, GithubIcon, DribbbleIcon
  }
}
</script>