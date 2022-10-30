import { createApp } from "vue";
import App from "./App.vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTimes,
  faAt,
  faSpinner,
  faEye,
  faBook,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faTimes, faLinkedin, faGithub, faAt, faSpinner, faEye, faBook);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
