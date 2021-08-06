<template>
  <div id="contact">
    <segment-title title="Contact" />
    <div class="container max-w-screen-xl mx-auto flex flex-wrap flex-col md:flex-row items-center px-8 md:px-16">
      <p class="font-light leading-8 text-lg mb-4 text-center w-full" data-aos="fade-up">Send a message to me via the form below, write directly to <a href="mailto:contact@mikolajmirko.me" title="Mail to contact@mikolajmirko.me">contact@mikolajmirko.me</a> or check my socials.</p>
      <div class="content-box max-w-screen-sm mx-auto" data-aos="zoom-in">
        <div class="blobs blobs-4" data-aos="zoom-in" data-aos-delay="200" />
        <form class="contact-form" name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
          <input type="hidden" name="form-name" value="contact" />
          <div>
            <label for="form_name" class="text-base text-dark font-bold">Full Name</label>
            <input class="w-full border-gray-200 border-2 text-gray-900 mt-2 p-3 px-4 rounded-lg focus:outline-none focus:border-yellow-100" type="text" name="name" v-model="name" id="form_name" required minlength="4" maxlength="64">
            <transition name="fade">
              <span v-if="nameError" class="text-sm text-red">{{ nameError }}</span>
            </transition>
          </div>
          <div class="mt-6">
            <label for="form_email" class="text-base text-dark font-bold">Email</label>
            <input class="w-full border-gray-200 border-2 text-gray-900 mt-2 p-3 px-4 rounded-lg focus:outline-none focus:border-yellow-100" type="text" name="email" v-model="email" id="form_email" required minlength="4" maxlength="64">
            <transition name="fade">
              <span v-if="emailError" class="text-sm text-red">{{ emailError }}</span>
            </transition>
          </div>
          <div class="mt-6">
            <label for="form_message" class="text-base text-dark font-bold">Message</label>
            <textarea class="w-full h-32 border-gray-200 border-2 text-gray-900 mt-2 p-3 px-4 rounded-lg focus:outline-none focus:border-yellow-100" name="message" v-model="message" id="form_message" required minlength="4" maxlength="480"></textarea>
            <transition name="fade">
              <span v-if="messageError" class="text-sm text-red">{{ messageError }}</span>
            </transition>
          </div>
          <div class="mt-6 flex justify-center md:justify-between items-center felx-col md:flex-row">
            <div>
              <transition name="fade">
                <span class="text-sm text-green mb-2 md:mb-0" v-if="isSent">Message sent!</span>
              </transition>
            </div>
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
      nameError: '',
      email: '',
      emailError: '',
      message: '',
      messageError: '',
      isSent: false
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
      // Spam prevention
      if(this.isSent) {
        return;
      }
      // Form validation
      this.nameError = this.emailError = this.messageError = '';
      if(this.name.length === 0 || this.name.length > 64) {
        this.nameError = 'This field is required';
      }
      if(this.email.length === 0 || this.email.length > 64) {
        this.emailError = 'This field is required';
      }
      if(this.message.length === 0) {
        this.messageError = 'This field is required';
      } else if(this.message.length < 16 || this.message.length > 480) {
        this.messageError = 'Message field should have between 16 to 480 characters';
      }
      if(this.emailError === '' && this.emailError === '' && this.messageError === '') {
        // Preparing and sending data
        let contactForm = document.querySelector('.contact-form');
        let formData = new FormData(contactForm)
        fetch('/', {
          method: 'POST',
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(formData).toString()
        })
          .then(() => this.isSent = true)
          .catch((error) => alert(error));
      }
    }
  }
}
</script>