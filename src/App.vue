<template>
  <main>
    <AppIntro :show-intro="showIntro" @toggle-show-intro="toggleShowIntro" />

    <FadeTransition>
      <AppProjects
        v-if="!showIntro"
        :projects="state.projects"
        :loading="state.loading"
      />
    </FadeTransition>
  </main>
</template>

<script>
import { ref, onMounted, reactive } from "vue";
import AppIntro from "./components/intro/AppIntro.vue";
import AppProjects from "./components/project/AppProjects.vue";
import useGithubRepositories from "./hooks/useGithubRepositories";
import FadeTransition from "./components/transitions/FadeTransition.vue";
import data from "../clients-data.json";

export default {
  components: {
    AppIntro,
    AppProjects,
    FadeTransition,
  },
  setup() {
    const showIntro = ref("show");
    const state = reactive({
      projects: null,
      loading: true,
    });

    onMounted(async () => {
      const { loading, repositories } = await useGithubRepositories();

      state.projects = [...data.clients, ...repositories];
      state.loading = loading.value;
    });

    const toggleShowIntro = () => {
      showIntro.value == "show"
        ? (showIntro.value = "")
        : (showIntro.value = "show");
    };

    return {
      state,
      showIntro,
      toggleShowIntro, // functions returned behave the same as methods
    };
  },
};
</script>

<style lang="scss">
//base font
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap");
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
</style>
