<template>
  <main>
    <AppIntro :show-intro="showIntro" @toggle-show-intro="toggleShowIntro" />

    <FadeTransition>
      <div v-if="!showIntro" class="projects-container">
        <AppCard
          :cards="clients"
          class="projects"
          card-size="big"
          title="Client Websites"
        >
        </AppCard>
        <!-- <AppCard
          :cards="projects.value"
          :loading="isLoading.value"
          class="projects dark-mode"
          card-size="medium"
          title="Personal Projects"
        >
        </AppCard> -->
      </div>
    </FadeTransition>
  </main>
</template>

<script>
import { ref, onMounted } from "vue";
import AppIntro from "./components/intro/AppIntro.vue";
import AppCard from "./components/ui/AppCard.vue";
import useGithubRepositories from "./hooks/useGithubRepositories";
import FadeTransition from "./components/transitions/FadeTransition.vue";
import data from "../clients-data.json";

export default {
  components: {
    AppIntro,
    AppCard,
    FadeTransition,
  },
  setup() {
    const projects = ref([]);
    const isLoading = ref(true);
    const clients = ref(data.clients);
    const showIntro = ref("show");

    onMounted(async () => {
      const { loading, repositories } = await useGithubRepositories();
      projects.value = repositories;
      isLoading.value = loading;
    });

    const toggleShowIntro = () => {
      showIntro.value == "show"
        ? (showIntro.value = "")
        : (showIntro.value = "show");
    };

    return {
      projects,
      isLoading,
      clients,
      showIntro,
      toggleShowIntro, // functions returned behave the same as methods
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
ul,
li,
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
