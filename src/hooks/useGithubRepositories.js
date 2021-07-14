import { ref } from "vue";
import { Octokit } from "@octokit/rest";

const octokit = new Octokit({
  auth: process.env.OCTOKIT_API_KEY,
  userAgent: "brampijper",
  Accept: "application/vnd.github.16.28.4.raw",
});

export default async function useGithubRepositories() {
  const loading = ref(true);
  const repositories = await fetchRepo();

  async function fetchRepo() {
    let repositories = [];
    loading.value = true;
    try {
      const res = await octokit.repos.listForOrg({
        org: "brampijper-gh-pages",
      });
      if (!res) {
        console.log("no response received");
      }
      res.data.filter((repo) => {
        if (repo.homepage) {
          // pulling off the properties that I need
          const { id, homepage, name, description } = repo;

          //store the de-structured properties into an array.
          repositories.push({ id, homepage, name, description });
        }
      });
      loading.value = false;
      return repositories;
    } catch (err) {
      throw new Error(err);
    }
  }

  return {
    loading,
    repositories,
  };
}
