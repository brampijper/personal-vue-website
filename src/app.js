import { createApp } from "vue";
import App from "./App.vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faExpandAlt } from "@fortawesome/free-solid-svg-icons/faExpandAlt";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faExternalLinkSquareAlt } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faExpandAlt,faEnvelope, faHome, faExternalLinkSquareAlt, faMoon, faSun);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");