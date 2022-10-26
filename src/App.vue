<template>
  <main>
    <AppIntro />
    <AppProjects :projects="clientProjects" />
  </main>
</template>

<script>
import { ref, onMounted } from "vue";
import AppIntro from "./components/intro/AppIntro.vue";
import AppProjects from "./components/projects/AppProjects.vue";
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
    const projects = ref([]);
    const isLoading = ref(true);
    const clientProjects = ref(data.clients);

    onMounted(async () => {
      const { loading, repositories } = await useGithubRepositories();
      projects.value = repositories;
      isLoading.value = loading;
    });

    return {
      projects,
      isLoading,
      clientProjects,
    };
  },
};
</script>

<style lang="scss">
//base font
@import url("https://fonts.googleapis.com/css?family=Roboto:300,400&display=swap");

* {
  margin: 0px;
  padding: 0px;
  border: 0px;
}

html {
  list-style-type: none;
}

body {
  background-image: $bg-gradient;
  height: 100%;
}

span,
p,
h2,
ul,
li {
  font-family: $font-family;
  font-weight: 300;
}

a {
  transition: all 0.5s;
  text-decoration: none;
  color: $a-color;
}

a:hover {
  color: $a-hover-color;
}

a:visited {
  color: inherit;
}

</style>
