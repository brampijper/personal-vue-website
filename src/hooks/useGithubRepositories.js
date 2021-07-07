import { ref } from "vue";
import { Octokit } from "@octokit/rest";

const octokit = new Octokit({
  auth: process.env.OCTOKIT_API_KEY,
  userAgent: "brampijper",
  Accept: "application/vnd.github.16.28.4.raw",
});

export default async function useGithubRepositories() {
  async function fetchRepo() {
    let repositories = [];
    loading.value = true;
    try {
      const res = await octokit.repos.listForOrg({
        org: "brampijper-gh-pages",
      });
      if (!res) {
        console.log("no response received", res);
      }
      res.data.filter((repo) => {
        if (repo.homepage) {
          repositories.push(repo);
        }
      });
      loading.value = false;
      return repositories;
    } catch (err) {
      throw new Error(err);
    }
  }
  let loading = ref(null);
  let repositories = ref(await fetchRepo());
  return {
    loading,
    repositories,
  };
}
