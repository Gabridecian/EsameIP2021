import Vue from "vue";
import App from "./App";
import VueRouter from "vue-router";
import Oggi from "./src/view/Oggi.vue";
import Settimana from "./src/view/Settimana.vue";
import Ora from "./src/view/Ora.vue";
import Network from "./src/view/Network.vue";
import Webcam from "./src/view/Webcam.vue";
import Sole from "./src/view/Sole.vue";

Vue.config.productionTip = false;
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";
import axios from "axios";

Vue.use(VueMaterial);
Vue.use(VueRouter);
const routes = [
  { path: "/", name: "Oggi", component: Oggi },
  { path: "/Settimana", name: "Settimana", component: Settimana },
  { path: "/Ora", name: "Ora", component: Ora },
  { path: "/Network", name: "Network", component: Network },
  { path: "/Webcam", name: "Webcam", component: Webcam },
  { path: "/Sole", name: "Sole", component: Sole }
];
const router = new VueRouter({
  mode: "history",
  routes
});

new Vue({
  router,
  el: "#app",
  components: { App },
  template: "<App/>"
});
