<template>
  <div id="projects">
    <segment-title title="Projects" />
    <div class="container max-w-screen-xl mx-auto flex flex-wrap flex-col md:flex-row items-center px-8 md:px-16">
      <Tinybox
        v-for="project in projects"
        :key="project.id + '-gallery'"
        v-model="project.galleryIndex"
        :images="project.gallery"
      />
      <div v-for="project in projects" :key="project.id + '-content'" :class="`project ${project.id}`" data-aos="fade-up">
        <div class="content-box">
          <div class="flex items-center">
            <img :src="getProjectAsset(project.id, 'icon')" class="project-icon" :alt="`${project.name} Logo`" />
            <div class="flex-grow">
              <h2 class="font-bold text-2xl md:text-3xl">{{ project.name }}</h2>
              <h3 class="text-black font-light text-base">{{ project.type }}</h3>
            </div>
          </div>
          <component :is="project.solo ? 'user-icon' : 'users-icon'" size="40" class="text-gray-300 absolute top-8 right-8 hidden md:block"></component>
          <div class="pt-6 mb-72 md:mb-0 lg:mr-96">
            <p class="font-light leading-7 text-lg md:pr-4">{{ project.description }}</p>
            <div class="md:mr-72 lg:mr-0">
              <span class="text-gray-500 font-light text-base block mt-6 pb-1">Screenshots:</span>
              <img
                v-for="(img, idx) in project.gallery"
                :src="img.thumbnail"
                :title="img.caption"
                :key="`img-${project.id}-${idx}`"
                height="80"
                class="project-image"
                @click="project.galleryIndex = idx"
              />
              <div class="clear-both" />
              <a class="project-button" :href="project.link" rel="noreferrer" target="_blank">
                <external-link-icon size="24" class="mx-1.5 mr-3"></external-link-icon>
                <span class="pr-3">
                  <span class="hidden md:inline">Check out </span>{{ project.name }}
                </span>
              </a>
            </div>
          </div>
        </div>
        <div class="project-blob" :style="{backgroundImage: 'url(' + getProjectAsset(project.id, 'blob') + ')'}" />
        <div class="project-glow" :style="{backgroundImage: 'url(' + getProjectAsset(project.id, 'glow') + ')'}" />
        <div class="project-graphic" :style="{backgroundImage: 'url(' + getProjectAsset(project.id, 'graphic') + ')'}" data-aos="zoom-in" data-aos-delay="250" />
      </div>
    </div>
  </div>
</template>

<script>
import Tinybox from "vue-tinybox";
import SegmentTitle from '../SegmentTitle.vue';
import { UsersIcon, UserIcon, ExternalLinkIcon } from 'vue-feather-icons';

export default {
  components: { Tinybox, SegmentTitle, UsersIcon, UserIcon, ExternalLinkIcon },
  name: 'Projects',
  data() {
    return {
      index: null,
      projects: [
        {
          id: "techbites",
          name: "TechBites",
          type: "Website",
          description: "I was fortunate enough to do a Master thesis project that is both interesting to me and can potently have an impact on the real world. TechBites is a web portal designed from scratch that brings people interested in usability & accessibility together. On the website, you can find bites – short and easy to digest portions of information on various topics in the field of UI/UX.",
          link: "https://techbites.pl/en/",
          solo: true,
          galleryIndex: null,
          gallery: [
            {
              src: require(`../../assets/projects/techbites/gallery/screen1.png`),
              thumbnail: require(`../../assets/projects/techbites/gallery/thumbs/screen1.png`),
              caption: "Techbites homepage"
            },
            {
              src: require(`../../assets/projects/techbites/gallery/screen2.png`),
              thumbnail: require(`../../assets/projects/techbites/gallery/thumbs/screen2.png`),
              caption: "Main categories based on software development process"
            },
            {
              src: require(`../../assets/projects/techbites/gallery/screen3.png`),
              thumbnail: require(`../../assets/projects/techbites/gallery/thumbs/screen3.png`),
              caption: "Catalog page in high-contrast view"
            },
            {
              src: require(`../../assets/projects/techbites/gallery/screen4.png`),
              thumbnail: require(`../../assets/projects/techbites/gallery/thumbs/screen4.png`),
              caption: "Mobile view of an article"
            },
          ]
        },
        {
          id: "fokus",
          name: "Fokus",
          type: "Mobile App",
          description: "Fokus is a mobile application that helps kids complete their daily tasks under parental control. Main features include task scheduling and progress tracking, as well as awarding badges and points. I was in charge of designing and evaluating the prototype, as well as writing the front-end.",
          link: "https://fokus.link/index-en.html",
          solo: false,
          galleryIndex: null,
          gallery: [
            {
              src: require(`../../assets/projects/fokus/gallery/screen1.png`),
              thumbnail: require(`../../assets/projects/fokus/gallery/thumbs/screen1.png`),
              caption: "Caregiver panel with children"
            },
            {
              src: require(`../../assets/projects/fokus/gallery/screen2.png`),
              thumbnail: require(`../../assets/projects/fokus/gallery/thumbs/screen2.png`),
              caption: "Reward details screen"
            },
            {
              src: require(`../../assets/projects/fokus/gallery/screen3.png`),
              thumbnail: require(`../../assets/projects/fokus/gallery/thumbs/screen3.png`),
              caption: "Plan creator"
            },
            {
              src: require(`../../assets/projects/fokus/gallery/screen4.png`),
              thumbnail: require(`../../assets/projects/fokus/gallery/thumbs/screen4.png`),
              caption: "Child achivements"
            },
            {
              src: require(`../../assets/projects/fokus/gallery/screen5.png`),
              thumbnail: require(`../../assets/projects/fokus/gallery/thumbs/screen5.png`),
              caption: "Completion of a task"
            },
          ]
        },
        {
          id: "codenames",
          name: "Codenames",
          type: "Website",
          description: "This is a simple multiplayer game where you uncover cryptic agents names in two teams. It is based on real game called Codenames. I build it solo to test my skills and challenge myself with implementing Vue.js front-end and WebSocket back-end.",
          link: "https://retro-codenames.netlify.app/",
          solo: true,
          galleryIndex: null,
          gallery: [
            {
              src: require(`../../assets/projects/codenames/gallery/screen1.png`),
              thumbnail: require(`../../assets/projects/codenames/gallery/thumbs/screen1.png`),
              caption: "Lobby screen"
            },
            {
              src: require(`../../assets/projects/codenames/gallery/screen2.png`),
              thumbnail: require(`../../assets/projects/codenames/gallery/thumbs/screen2.png`),
              caption: "Empty room with dealt cards"
            },
            {
              src: require(`../../assets/projects/codenames/gallery/screen3.png`),
              thumbnail: require(`../../assets/projects/codenames/gallery/thumbs/screen3.png`),
              caption: "Game over for indigo team"
            },
          ]
        },
        {
          id: "wikigraph",
          name: "WikiGraph",
          type: "Virtual Reality Cave Application",
          description: "WikiGraph is an immersive virtual reality cave application that allows its users to browse any Wikipedia in 3D. All the articles and links between them are visualized in form of a graph. It was build as part of a Bachelor’s thesis group project. I was responsible for designing the user interactions and the general visual look.",
          link: "https://wikitools.github.io/index-en.html",
          solo: false,
          galleryIndex: null,
          gallery: [
            {
              src: require(`../../assets/projects/wikigraph/gallery/screen1.png`),
              thumbnail: require(`../../assets/projects/wikigraph/gallery/thumbs/screen1.png`),
              caption: "Free flight mode view"
            },
            {
              src: require(`../../assets/projects/wikigraph/gallery/screen2.png`),
              thumbnail: require(`../../assets/projects/wikigraph/gallery/thumbs/screen2.png`),
              caption: "Browsing through links view"
            },
            {
              src: require(`../../assets/projects/wikigraph/gallery/photo1.jpg`),
              thumbnail: require(`../../assets/projects/wikigraph/gallery/thumbs/photo1.jpg`),
              caption: "Testing the app inside the cave"
            },
            {
              src: require(`../../assets/projects/wikigraph/gallery/photo2.jpg`),
              thumbnail: require(`../../assets/projects/wikigraph/gallery/thumbs/photo2.jpg`),
              caption: "The look of the cave from outside"
            },
          ]
        },
      ]
    };
  },
  methods: {
    getProjectAsset(id, type) {
      return require(`../../assets/projects/${id}/${type}.png`);
    }
  }
}
</script>