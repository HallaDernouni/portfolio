import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import 'typeface-poppins'
import 'typeface-libre-franklin'

import 'swiper/swiper-bundle.css'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  render: (h) => h(App)
}).$mount("#app");
