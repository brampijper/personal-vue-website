<template>
  <AppHeader :class="darkModeClass" />
    <main :class="darkModeClass">
      <div class="page-wrap">
        <MainContent />
        <ProjectCollection :projects="state.repositories" :loading="state.isLoading" />
      </div>
    </main>
    <AppFooter :class="darkModeClass" />
</template>

<script>
import { ref, onMounted, computed } from "vue";
import ProjectCollection from "./components/projects/ProjectCollection.vue";
import AppHeader from "./components/layout/AppHeader.vue"
import AppFooter from "./components/layout/AppFooter.vue"
import MainContent from "./components/layout/MainContent.vue"
import useFetchData from "./hooks/useFetchData";

import data from "../clients-data.json";
import { store } from './store.js';

export default {
  components: {
    ProjectCollection,
    AppHeader,
    MainContent,
    AppFooter
  },
  setup() {
    const clientProjects = ref(data.clients);
    const state = ref({ repositories: [], isLoading: true })

    onMounted(async () => {
      const repositories = await useFetchData('/api/repos', '?username=brampijper'); // server expects a route path and a githubname to fetch data. 

      state.value = {
        repositories: repositories.reverse(), //latest project first
        isLoading: false
      } 
    });

    const darkModeClass = computed(() => {
      return store.isDarkMode ? 'dark' : '';
    })

    return {
      clientProjects,
      darkModeClass,
      state
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
  box-sizing: inherit;
}

html {
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  text-size-adjust: 100%;
  list-style-type: none;
}

body {
  height: 100%;
}

main {
  background-color: $bg-color;
  color: $font-colors;

  svg, a {
     color: $font-colors; 
  }

  .card {
    background-color: $card-bg;
    box-shadow: rgb(0 0 0 / 5%) 0px 0px 2px 2px;
  }
}

main.dark {
  background-color: $bg-color-dark;
  color: $font-colors-dark;

  svg, a {
    color: $font-colors-dark; 
  }

  .card {
    background-color: $card-bg-dark;
    box-shadow: rgb(100 100 100 / 30%) 0px 0px 2px 2px;
  }
}

.page-wrap {
  margin: auto;
  max-width: 1280px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-flow: row wrap;
  -webkit-box-pack: start;
  justify-content: flex-start;
}

span,
p,
ul,
li {
  font-family: $font-family;
  font-weight: 300;
}

h2, h3 {
  font-family: $title-font-family;
  font-weight: $title-weight;
}

a {
  transition: all 0.5s;
  text-decoration: none;
  color:inherit;
}

a:visited {
  color: inherit;
}

@media (min-width: 360px) {
  main {
    min-width: calc(100vw - 64px);
    padding: 32px 16px;
  }
}

@media (min-width: 660px) {
  main {
    min-height: calc(100vh - calc(15px + 3vh)); //height of header
    padding: 32px 32px;
  }
}

@media (min-width: 1440px) {
  main {
    min-width: calc(100vw - 64px);
    padding: 32px;
  }
}

// global card styles
.card {
  border-radius: 16px;
}


</style>
