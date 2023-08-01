<template>
  <p class="font-light text-gray-500 w-full leading-8 text-lg md:text-center py-16 pl-8 md:pl-0" data-aos="zoom-in">
    © {{ currentYear }} Mikołaj Mirko 
  </p>
</template>

<script>
export default {
  name: 'PageFooter',
  computed: {
    currentYear: function() {
      const date = new Date();
      return date.getFullYear();
    }
  }
}
</script>