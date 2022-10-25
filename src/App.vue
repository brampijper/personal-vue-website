<template>
  <main>
    <AppIntro />
      <div>
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

    onMounted(async () => {
      const { loading, repositories } = await useGithubRepositories();
      projects.value = repositories;
      isLoading.value = loading;
    });

    return {
      projects,
      isLoading,
      clients,
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
background-color:snow;
background-image: linear-gradient(
  180deg,
  hsl(0deg 0% 0%) 0%,
  hsl(230deg 100% 4%) 45%,
  hsl(223deg 100% 5%) 59%,
  hsl(218deg 92% 5%) 100%
);
height: 100%;
overflow-x: hidden;
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
  color: #cbfffa;
}

a:hover {
  color: white;
}

a:visited {
  color: inherit;
}

</style>
