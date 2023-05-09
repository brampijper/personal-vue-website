import { createApp } from "vue";
import App from "./App.vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faExpandAlt } from "@fortawesome/free-solid-svg-icons/faExpandAlt";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faExpandAlt,faEnvelope);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");