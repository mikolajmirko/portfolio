<template>
  <div id="skills">
    <segment-title title="Skills" />
    <div class="container max-w-screen-xl mx-auto px-8 md:px-16 relative">
      <div class="blobs blobs-3" />
      <div class="grid gap-x-4 md:grid-cols-3 skills">
        <div>
          <div class="skill-blob code" data-aos="zoom-in" data-aos-delay="0" data-aos-offset="320"/>
          <div data-aos="fade-down" data-aos-delay="300">
            <h2>Code</h2>
            <ul>
              <li>JavaScript ES6</li>
              <li>Vue.js & React</li>
              <li>HTML 5</li>
              <li>CSS3, Sass</li>
              <li class="smaller-element">Multiple frameworks</li>
              <li>PHP & MySQL</li>
            </ul>
          </div>
        </div>
        <div>
          <div class="skill-blob design" data-aos="zoom-in" data-aos-delay="100" data-aos-offset="320"/>
          <div data-aos="fade-down" data-aos-delay="400">
            <h2>Design</h2>
            <ul>
              <li>Prototyping</li>
              <li class="smaller-element">Framer</li>
              <li class="smaller-element">Figma</li>
              <li class="smaller-element">UXPin</li>
              <li>Graphics</li>
              <li class="smaller-element">Affinity Designer</li>
              <li>Usability testing</li>
              <li>Accessibility tools</li>
            </ul>
          </div>
        </div>
        <div>
          <div class="skill-blob team" data-aos="zoom-in" data-aos-delay="200" data-aos-offset="320"/>
          <div data-aos="fade-down" data-aos-delay="500">
            <h2>Project & Team</h2>
            <ul>
              <li>Git</li>
              <li>JIRA</li>
              <li>Visual Studio Code</li>
              <li>Microsoft Office Apps</li>
              <li>Languages</li>
              <li class="smaller-element">English</li>
              <li class="smaller-element">Polish</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SegmentTitle from '../SegmentTitle.vue';

export default {
  components: { SegmentTitle },
  name: 'Skills'
}
</script>