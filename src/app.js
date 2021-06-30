import Vue, { createApp } from "vue";
import App from "./App.vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTimes,
  faAt,
  faSpinner,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faTimes, faLinkedin, faGithub, faAt, faSpinner, faEye);

Vue.component("FontAwesomeIcon", FontAwesomeIcon);

Vue.config.productionTip = false;

const MyApp = createApp(App);
MyApp.mount("#app");
