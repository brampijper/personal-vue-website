<template>
  <main>
    <!-- look into dynamic components works better i think -->
    <!-- a ~.8s delay is happening between the extend and fade transition. -->
    <!-- app header transition switch to max-height -->

    <ExtendTransition>
      <Intro
        v-if="displayAboutMe"
        @toggle-display-about-me="toggleDisplayAboutMe"
      />

      <AppHeader v-else :on-click="toggleDisplayAboutMe" />
    </ExtendTransition>

    <FadeTransition>
      <div v-if="!displayAboutMe" class="projects-container">
        <AppCard
          :cards="clients"
          class="projects"
          card-size="medium"
          title="Client Websites"
        >
        </AppCard>
        <AppCard
          :cards="projects.value"
          :loading="isLoading.value"
          class="projects dark-mode"
          card-size="medium"
          title="Personal Projects"
        >
        </AppCard>
      </div>
    </FadeTransition>
  </main>
</template>

<script>
import { ref, onMounted } from "vue";
import Intro from "./components/intro/intro.vue";
import AppCard from "./components/ui/AppCard.vue";
import AppHeader from "./components/layout/AppHeader.vue";
import useGithubRepositories from "./hooks/useGithubRepositories";
import FadeTransition from "./components/transitions/FadeTransition.vue";
import data from "../clients-data.json";

import ExtendTransition from "./components/transitions/ExtendTransition.vue";

export default {
  components: {
    Intro,
    AppHeader,
    AppCard,
    FadeTransition,
    ExtendTransition,
  },
  setup() {
    const projects = ref([]);
    const isLoading = ref(true);
    const clients = ref(data.clients);
    const displayAboutMe = ref(true);

    onMounted(async () => {
      const { loading, repositories } = await useGithubRepositories();
      projects.value = repositories;
      isLoading.value = loading;
    });

    const toggleDisplayAboutMe = () => {
      displayAboutMe.value = !displayAboutMe.value;
    };

    return {
      projects,
      isLoading,
      clients,
      displayAboutMe,
      toggleDisplayAboutMe, // functions returned behave the same as methods
    };
  },
};
</script>

<style lang="scss">
//base font
@import url("https://fonts.googleapis.com/css?family=Roboto:300,400&display=swap");

$base-color: #3498db;
$secondary-color: #f62a00;
$font-color: #f1f3ce;
$font-family: "Roboto", sans-serif;

* {
  margin: 0px;
  padding: 0px;
  border: 0px;
}

html {
  list-style-type: none;
}

body {
  background-color: rgb(245, 245, 245);
  height: 100%;
  overflow-x: hidden;
}

main {
  max-height: 100vh;
}

p,
h2,
span {
  font-family: $font-family;
  font-weight: 300;
}

a {
  transition: all 0.5s;
  text-decoration: none;
  color: black;
}

a:hover {
  color: black;
}

a:visited {
  color: inherit;
}

.projects-container {
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  gap: 5rem;
}

.projects {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
  width: 100%;
  min-height: 40rem;
  gap: 5rem;
}
</style>
