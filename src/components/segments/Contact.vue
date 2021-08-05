<template>
  <div id="contact">
    <segment-title title="Contact" />
    <div class="container max-w-screen-xl mx-auto flex flex-wrap flex-col md:flex-row items-center px-8 md:px-16">
      <p class="font-light leading-8 text-lg mb-4 text-center w-full" data-aos="fade-up">Send a message to me via the form below, write directly to <a href="mailto:contact@mikolajmirko.me" title="Mail to contact@mikolajmirko.me">contact@mikolajmirko.me</a> or check my socials.</p>
      <div class="content-box max-w-screen-sm mx-auto" data-aos="zoom-in">
        <div class="blobs blobs-4" data-aos="zoom-in" data-aos-delay="200" />
        <form class="contact-form" name="contact" method="POST" data-netlify="true">
          <div>
            <label for="form_name" class="text-base text-black font-bold">Full Name</label>
            <input class="w-full border-gray-200 border-2 text-gray-900 mt-2 p-3 px-4 rounded-lg focus:outline-none focus:border-yellow-100" type="text" name="name" v-model="name" id="form_name" required minlength="4" maxlength="64">
          </div>
          <div class="mt-6">
            <label for="form_email" class="text-base text-black font-bold">Email</label>
            <input class="w-full border-gray-200 border-2 text-gray-900 mt-2 p-3 px-4 rounded-lg focus:outline-none focus:border-yellow-100" type="text" name="email" v-model="email" id="form_email" required minlength="4" maxlength="64">
          </div>
          <div class="mt-6">
            <label for="form_message" class="text-base text-black font-bold">Message</label>
            <textarea class="w-full h-32 border-gray-200 border-2 text-gray-900 mt-2 p-3 px-4 rounded-lg focus:outline-none focus:border-yellow-100" name="message" v-model="message" id="form_message" required minlength="4" maxlength="480"></textarea>
          </div>
          <div class="mt-6 text-center md:text-right">
            <button @click="sendMessage">
              <send-icon size="24" class="mx-1.5 mr-3"></send-icon>
              <span class="pr-3">Send Message</span>
            </button>
          </div>
        </form>
      </div>
      <p class="font-light text-gray-500 w-full leading-8 text-lg md:text-center py-16 pl-8 md:pl-0" data-aos="zoom-in">
        © {{ currentYear }} Mikolaj Mirko 
      </p>
    </div>
  </div>
</template>

<script>
import { SendIcon } from 'vue-feather-icons';
import SegmentTitle from '../SegmentTitle.vue';

export default {
  components: { SegmentTitle, SendIcon },
  name: 'Contact',
  data() {
    return {
      name: '',
      email: '',
      message: ''
    };
  },
  computed: {
    currentYear: function() {
      const date = new Date();
      return date.getFullYear();
    }
  },
  methods: {
    sendMessage(event) {
      event.preventDefault();
      if(this.name.length < 4 || this.name.length > 64) {
        alert('Full name field should have between 4 to 64 characters');
        return;
      }
      if(this.email.length < 4 || this.email.length > 64) {
        alert('Email field should have between 4 to 64 characters');
        return;
      }
      if(this.name.length < 4 || this.name.length > 480) {
        alert('Message field should have between 4 to 480 characters');
        return;
      }
      let contactForm = document.querySelector('.contact-form');
      let formData = new FormData(contactForm)
      fetch('/', {
        method: 'POST',
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString()
      })
        .then(() => console.log('Form successfully submitted'))
        .catch((error) => alert(error));
    }
  }
}
</script>