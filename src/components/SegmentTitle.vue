<template>
    <div class="main-header" data-aos="zoom-in">
        <h1>{{ title }}</h1>
        <img src="~@/assets/underline.svg" alt=""/>
    </div>
</template>

<script>
export default {
  name: 'SegmentTitle',
  props: {
    title: String
  }
}
</script>
