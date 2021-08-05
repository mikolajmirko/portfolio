<template>
    <div>
        <transition name="fade">
            <scrollactive v-show="menuOpened" :offset="80" :duration="250" class="mobile-menu" v-on:itemchanged="onItemChanged">
                <a href="#home" class="scrollactive-item">Start</a>
                <a href="#about" class="scrollactive-item">About me</a>
                <a href="#experience" class="scrollactive-item">Experience</a>
                <a href="#skills" class="scrollactive-item">Skills</a>
                <a href="#projects" class="scrollactive-item">Projects</a>
                <a href="#contact" class="scrollactive-item">Contact</a>
            </scrollactive>
        </transition>
        <div class="w-full py-6 lg:py-10 fixed z-20">
            <nav class="max-w-screen-xl mx-auto flex justify-between items-center px-6 lg:px-24" data-aos="flip-up">
                <scrollactive :offset="80" class="main-menu hidden md:flex items-center">
                    <div class="slider" ref="navSlider"></div>
                    <a href="#home" class="scrollactive-item" @click="onNavClick" aria-label="Go to start" title="Go to start"><home-icon size="22" class="pointer-events-none"></home-icon></a>
                    <a href="#about" class="scrollactive-item" @click="onNavClick">About me</a>
                    <a href="#experience" class="scrollactive-item" @click="onNavClick">Experience</a>
                    <a href="#skills" class="scrollactive-item" @click="onNavClick">Skills</a>
                    <a href="#projects" class="scrollactive-item" @click="onNavClick">Projects</a>
                    <a href="#contact" class="scrollactive-item" @click="onNavClick">Contact</a>
                </scrollactive>
                <button class="mobile-menu-icon md:hidden" @click="$emit('toggle-menu')">
                    <component v-bind:is="menuOpened ? 'x-icon' : 'menu-icon'"></component>
                </button>
                <div class="flex py-2 social-buttons">
                    <a class="linkedin-icon" rel="noreferrer" href="https://www.linkedin.com/in/mikolajmirko/" target="_blank" aria-label="LinkedIn"><linkedin-icon size="24"></linkedin-icon></a>
                    <a class="github-icon" rel="noreferrer" href="https://github.com/mikolajmirko" target="_blank" aria-label="Github"><github-icon size="24"></github-icon></a>
                    <a class="dribbble-icon" rel="noreferrer" href="https://dribbble.com/mikolajmirko" target="_blank" aria-label="Dribbble"><dribbble-icon size="24"></dribbble-icon></a>
                </div>
            </nav>
        </div>
    </div>
</template>

<script>
import { HomeIcon, XIcon, MenuIcon, LinkedinIcon, GithubIcon, DribbbleIcon } from 'vue-feather-icons';

export default {
  name: 'PageNav',
  components: {
    HomeIcon, XIcon, MenuIcon, LinkedinIcon, GithubIcon, DribbbleIcon
  },
  created () {
    window.addEventListener('scroll', this.onPageScroll);
    window.addEventListener('resize', this.onPageResize);
  },
  destroyed () {
    window.removeEventListener('scroll', this.onPageScroll);
    window.removeEventListener('resize', this.onPageResize);
  },
  methods: {
    setStyle(element) {
        this.$refs.navSlider.style.width = element.getBoundingClientRect().width + 'px';
        this.$refs.navSlider.style.left = element.offsetLeft + 'px';
    },
    onPageScroll(_event) {
        this.setStyle(document.querySelector('.main-menu > a.is-active'));
    },
    onPageResize(_event) {
        if(this.menuOpened && document.body.getBoundingClientRect().width > 768)
            this.$emit('toggle-menu');
    },
    onNavClick(event) {
        this.setStyle(event.target);
    },
    onItemChanged(event, currentItem, lastActiveItem) {
        if(event === null)
            this.$emit('toggle-menu');
    }
  },
  mounted() {
    this.setStyle(document.querySelector('.main-menu > a.is-active'));
  },
  props: {
    menuOpened: Boolean
  },
  emits: ['toggle-menu']
}
</script>
