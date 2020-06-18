<template>
  <div>
    <TheHeader @clicked="onExtending" />
    
    <AppIconLoading :loading="isLoading" />

    <FadeTransition>
      <AppCard
        v-if="!extended"
        :cards="githubProjects"
        class='abs-position'
        card-size="medium">
      </AppCard>
    </FadeTransition>

  </div>
</template>

<script>
const {Octokit} = require("@octokit/rest");

import TheHeader from "./components/TheHeader.vue";
import AppCard from "./components/interface/AppCard.vue";
import AppIconLoading from "./components/interface/AppIconLoading.vue";
import FadeTransition from "./components/transitions/FadeTransition.vue"

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
      isLoading: true
    };
  },
  created() {
    const octokit = Octokit({
      auth: this.VUE_APP_OCTOKIT,
      userAgent: "brampijper",
      Accept: "application/vnd.github.16.28.4.raw"
    });

    octokit.repos
      .listForUser({
        username: "brampijper"
      })
      .then(({ data }) => {
        data.filter(project => {
          if (!project.archived && project.has_pages) {
            project.url = "https://brampijper.github.io/" +  this.extractChars(project.full_name, 11); 
            this.isLoading = false; 
            this.githubProjects.push(project);
          };
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
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400&display=swap');

$base-color: #3498db;
$secondary-color: #F62A00;
$font-color: #F1F3CE; 

* {
  margin: 0px;
  padding: 0px;
  border: 0px;
  font-family: "Roboto", sans-serif;
  list-style-type: none;
  font-weight: 300;
}

body {
  background-color: rgb(245, 245, 245);
  height: 100%;
  overflow-x: hidden;
}

a {
  transition: all 0.5s;
}

a:hover {
  color: black; 
}

.abs-position {
  top:0;
  position: absolute;
}
</style>
