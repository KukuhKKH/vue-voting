import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import BootstrapVue from "bootstrap-vue"
import VueSweetalert2 from "vue-sweetalert2"

Vue.use(BootstrapVue)
Vue.use(VueSweetalert2)

import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
