<template>
  <div id="about">
    <segment-title title="About me" />
    <div class="container max-w-screen-xl mx-auto flex flex-wrap flex-col md:flex-row items-center px-8 md:px-16 pb-8">
      <p class="font-light leading-8 text-lg text-center mb-8" data-aos="fade-up">
        Not long ago I finished my masters at the Gdańsk University of Technology at the Faculty of Electronics, Telecommunications and Informatics in the field of System Engineering. 🎓 I’m interested in topics related to UI/UX, usability & accessibility of technology and frontend development. I have worked with clients – both big and small – as a front-end developer. Front-end technologies are my domain.
      </p>
      <p class="font-light leading-8 text-lg text-center mb-8" data-aos="fade-up">
        I aspire to be a UI/UX designer. 💻 Though I’m still starting my adventure, I already have some basic knowledge about visual & human-centered design. My graphical style consists of rather practical elements – simple and flat shapes are my domain at the moment. With every new project, I’m trying to improve my skills and broaden my craft.
      </p>
      <p class="font-light leading-8 text-lg text-center" data-aos="fade-up" >
        It should come as no surprise that, as an IT guy, I love pizza. Come to think of it, everyone likes pizza… If it was up to me, I’d start every meeting with one! 🍕 I spend my free time playing video & board games 🎮 with my friends and watching detailed video essays on YouTube about my last watched TV show. Is there anything better to do than this?
      </p>
    </div>
  </div>
</template>

<script>
import SegmentTitle from '../SegmentTitle.vue';

export default {
  components: { SegmentTitle },
  name: 'AboutMe'
}
</script>