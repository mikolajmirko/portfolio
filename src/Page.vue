<template>
  <div class="relative w-full overflow-x-hidden overflow-y-hidden">
    <!-- <Blobs /> -->
    <Page-nav @toggle-menu="toggleMenu" :menu-opened="mobileMenuOpen" />
    <Page-header />
    <About-me />
    <Experience />
    <Skills />
    <Projects />
    <Page-footer />
  </div>
</template>

<script>
import PageNav from './components/PageNav.vue';
import PageHeader from './components/PageHeader.vue';
import Blobs from './components/Blobs.vue';
import AboutMe from './components/segments/AboutMe.vue';
import Experience from './components/segments/Experience.vue';
import Skills from  './components/segments/Skills.vue';
import Projects from './components/segments/Projects.vue';
import PageFooter from './components/PageFooter.vue';

export default {
  name: 'Page',
  data() {
    return {
      mobileMenuOpen: false
    };
  },
  components: {
    PageNav,
    PageHeader,
    Blobs,
    AboutMe,
    Skills,
    Experience,
    Projects,
    PageFooter
  },
  methods: {
    toggleMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen;
    }
  }
}
</script>