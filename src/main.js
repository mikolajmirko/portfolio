import Vue from "vue";
import Page from "./Page.vue";
import "./main.css";
import VueScrollactive from "vue-scrollactive";
import AOS from "aos";
import "aos/dist/aos.css";

Vue.config.productionTip = false;
Vue.use(VueScrollactive);

new Vue({
  render: (h) => h(Page),
  mounted() {
    AOS.init();
  },
}).$mount("#app");
