<template>
  <div id="experience">
    <segment-title title="Experience" />
    <div class="container max-w-screen-xl mx-auto px-8 md:px-16 relative">
      <div class="blobs blobs-1" />
      <h2 class="secondary-header" data-aos="fade-right">Work</h2>
      <div class="py-4">
        <div class="md:flex md:flex-row" v-for="exp in work" :key="exp.description">
          <div class="timeline_element" data-aos="fade-down"></div>
          <content-box :title="exp.position" :subtitle="exp.type" :tagline="exp.details" icon="briefcase-icon" arrow="arrow-left" data-aos="fade-left">
            {{ exp.description }}
          </content-box>
        </div>
      </div>
    </div>
    <div class="container max-w-screen-xl mx-auto px-8 md:px-16 relative">
      <div class="blobs blobs-2" />
      <h2 class="secondary-header" data-aos="fade-right">Education</h2>
      <div class="py-4">
        <div class="md:flex md:flex-row" v-for="degree in education" :key="degree.title">
          <div class="timeline_element" data-aos="fade-down"></div>
          <content-box :title="degree.title" :subtitle="degree.specialization" :tagline="degree.details" arrow="arrow-left" icon="file-text-icon" data-aos="fade-left">
            {{ degree.description }}
          </content-box>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ContentBox from '../ContentBox.vue';
import SegmentTitle from '../SegmentTitle.vue';

export default {
  components: { SegmentTitle, ContentBox },
  name: 'Experience',
  data() {
    return {
      work: [
        {
          position: "Front-end developer",
          type: "Internship",
          description: "Implementing and testing front-end components on the Finnish TV advertising platform. Technologies used: JavaScript, Backbone framework, jQuery library, Sass, REST API.",
          details: "HiQ - July 2019 – September 2019"
        },
        {
          position: "Front-end developer",
          type: "Internship",
          description: "Web application developed in Laravel and Vue.js frameworks for universal product management. Designing complex widgets, creating documentation and bug fixing.",
          details: "LemonMind - July 2018 – May 2019"
        },
        {
          position: "Web developer",
          type: "Freelance",
          description: "Multiple website implementations based on WordPress CSM and visual designing. Clients from around Tri-city include: children nursery, public school, history museum, local cinema and more.",
          details: "2016 – 2018"
        }
      ],
      education: [
        {
          title: "Master of Science in Engineering",
          specialization: "Specialization in System Engineering",
          description: "Gdansk University of Technology, Faculty of Electronics, Telecommunications and Informatics",
          details: "2020 - 2021 (in progress)"
        },
        {
          title: "Bachelor of Science in Engineering",
          specialization: "Specialization in Intelligent Interactive Systems",
          description: "Gdansk University of Technology, Faculty of Electronics, Telecommunications and Informatics",
          details: "2017 - 2020"
        }
      ]
    };
  }
}
</script>