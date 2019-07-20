<template>
  <div>
      <ul>
        <li v-for="project in testData" :key="project.id">
          <p>{{ project.full_name}} </p>
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
      testData: []
    };
  },
  mounted() {
    const octokit = Octokit({
      auth: this.VUE_APP_OCTOKIT,
      userAgent: 'brampijper',
      log: console
    })
    
    octokit.repos.listForUser({
      username: 'brampijper'
    }).then(({data, headers, status}) => {
      data.filter(repo => {
        console.log(repo)
        if(!repo.archived && repo.has_pages) {
          this.testData.push(repo)
        }
      })
    })

  }
};
</script>
<style lang="scss">
ul {
  margin-top: 150px;
  position: absolute;
  text-align:center;

  li {
    display: inline-flex;
    width: 250px;
    min-height: 250px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    color: black;
    background-color: rgba($color: #ffffff, $alpha: 0.4);
    border-radius: 2px;
    margin: 5px;
    border-top: 5px solid aquamarine;

    p {
      width:100%;
    }
  }
}

li:hover {
    box-shadow: 0 14px 28px rgba(148, 106, 106, 0.15), 0 10px 10px rgba(0, 0, 0, 0.12);
}

</style>
