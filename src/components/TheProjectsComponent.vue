<template>
  <div>
    <ul>
      <li v-for="project in projects" :key="project.id">
        <div class="card-container">
          <p>{{ project.full_name }}</p>
          <a :href="project.pages" target="_blank"> View Website </a>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
const Octokit = require("@octokit/rest");
export default {
  data() {
    return {
      VUE_APP_OCTOKIT: process.env.VUE_APP_OCTOKIT_VAR,
      projects: [],
      pagesBaseUrl: "https://brampijper.github.io/"
    };
  },
  mounted() {
    const octokit = Octokit({
      auth: this.VUE_APP_OCTOKIT,
      userAgent: "brampijper",
      log: console
    });

    octokit.repos
      .listForUser({
        username: "brampijper"
      })
      .then(({ data }) => {
        data.filter(project => {
          if (!project.archived && project.has_pages) {
            let myLength = project.full_name.length;
            project.pages =
              this.pagesBaseUrl + project.full_name.substring(11, myLength);
            this.projects.push(project);
          }
          console.log(this.projects);
        });
      });
  }
};
</script>
<style lang="scss">
ul {
  margin-top: 150px;
  position: absolute;
  text-align: center;
  width: 100vw;
  max-height: 100%;

  li {
    display: inline-flex;
    width: 250px;
    max-height: 300px;
    min-height: 250px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    color: black;
    background-color: rgba($color: #ffffff, $alpha: 0.4);
    border-radius: 2px;
    margin: 10px;
    border-top: 5px solid aquamarine;

    .card-container {
      display: grid;
      margin: 0 auto;
      grid-template-rows: 80% 20% auto;
      margin-bottom: 10px;

      a {
        align-self: end;
      }
    }
  }
}

li:hover {
  box-shadow: 0 14px 28px rgba(148, 106, 106, 0.15),
    0 10px 10px rgba(0, 0, 0, 0.12);
}
</style>
