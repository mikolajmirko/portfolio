<template>
  <div :class="`content-box ${arrow}`">
      <h3 class="font-bold text-xl">{{ title }}</h3>
      <h4 class="text-dark font-light text-base">{{ subtitle }}</h4>
      <p class="font-light leading-7 text-lg my-3"><slot></slot></p>
      <span class="text-gray-500 font-light text-base">{{ tagline }}</span>
      <component v-if="icon != null" :is="icon" size="40" class="text-gray-300 absolute top-4 right-6 hidden md:block"></component>
  </div>
</template>

<script>
import { BriefcaseIcon, FileTextIcon } from 'vue-feather-icons';

export default {
  name: 'ContentBox',
  components: {
    BriefcaseIcon,
    FileTextIcon,
  },
  props: {
    title: String,
    subtitle: String,
    tagline: String,
    icon: String,
    arrow: String
  }
}
</script>