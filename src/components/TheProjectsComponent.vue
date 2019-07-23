<template>
  <div>
    <ul>
      <li v-for="project in projects" :key="project.id">
        <div class="card-container">
          <p class="title">{{ project.name }}</p>
          <div class="center">
            <p>{{ project.text }}</p>
          </div>
          <a :href="project.pages" target="_blank"> View Website </a>
        </div>
      </li>
      <div class="spacing"></div>
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
      Accept: "application/vnd.github.16.28.4.raw"
    });

    octokit.repos
      .listForUser({
        username: "brampijper"
      })
      .then(({ data }) => {
        data.filter(project => {
          if (!project.archived && project.has_pages) {
            octokit.repos
              .getReadme({
                owner: "brampijper",
                repo: project.name
              })
              .then(({ data }) => {
                project.text = this.b64DecodeUnicode(data.content, project);
                project.pages =
                  this.pagesBaseUrl +
                  project.full_name.substring(11, project.full_name.length);
                this.projects.push(project);
              });
          }
        });
      });
  },
  methods: {
    b64DecodeUnicode(str) {
      return decodeURIComponent(
        Array.prototype.map
          .call(atob(str), function(c) {
            return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
          })
          .join("")
      );
    }
  }
};
</script>
<style lang="scss">
ul {
  margin-top: 150px;
  position: absolute;
  text-align: center;
  width: 100vw;

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
      grid-template-rows: 10% 80% 10% auto;
      margin-bottom: 10px;

      .title {
        font-weight: 600;
        padding: 5px;
      }

      .center {
        display: flex;
        align-items: center;
        justify-content: center;
        font-style: italic;
        font-weight: 300;
        width: 85%;
        margin: 0 auto;
      }

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

.spacing {
  height: 100px;
  width: 100px;
}
</style>
