<template>
  <main>
    <TheHeader @clicked="onExtending" />

    <AppIconLoading :loading="isLoading" />

    <FadeTransition>
      <div v-if="!extended" class="projects-container">
        <AppCard
          :cards="githubProjects"
          class="projects"
          card-size="medium"
          title="Personal Projects"
        >
        </AppCard>
        <AppCard
          :cards="clients"
          class="projects dark-mode"
          card-size="medium"
          title="Client Websites"
        >
        </AppCard>
      </div>
    </FadeTransition>
  </main>
</template>

<script>
const { Octokit } = require("@octokit/rest");

import TheHeader from "./components/TheHeader.vue";
import AppCard from "./components/interface/AppCard.vue";
import AppIconLoading from "./components/interface/AppIconLoading.vue";
import FadeTransition from "./components/transitions/FadeTransition.vue";
import data from "../clients-data.json";

export default {
  components: {
    TheHeader,
    AppCard,
    AppIconLoading,
    FadeTransition
  },
  data() {
    return {
      extended: true,
      VUE_APP_OCTOKIT: process.env.VUE_APP_OCTOKIT_VAR,
      githubProjects: [],
      clients: data.clients,
      isLoading: true
    };
  },
  created() {
    const octokit = new Octokit({
      auth: this.VUE_APP_OCTOKIT,
      userAgent: "brampijper",
      Accept: "application/vnd.github.16.28.4.raw"
    });

    octokit.repos
      .listForOrg({
        org: "brampijper-gh-pages"
      })
      .then(({ data }) => {
        data.filter(project => {
          if (project.homepage) {
            this.isLoading = false;
            this.githubProjects.push(project);
          }
        });
      });
  },
  methods: {
    onExtending(value) {
      this.extended = value;
    },
    extractChars(str, indexStart) {
      return str.substring(indexStart, str.length);
    }
  }
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
