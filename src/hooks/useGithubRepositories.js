import { Octokit } from "@octokit/rest";

const octokit = new Octokit({
  auth: process.env.OCTOKIT_API_KEY,
  userAgent: "brampijper",
  Accept: "application/vnd.github.16.28.4.raw",
});

export default async function useGithubRepositories() {
  let github = {
    repositories: [],
    isLoading: true
  }
  async function fetchRepo() {
    github.isLoading = true;
    try {
      const res = await octokit.repos.listForOrg({
        org: "brampijper-gh-pages",
      });
      if (!res) {
        console.log("no response received", res);
      }
      res.data.filter((repo) => {
        if (repo.homepage) {
          github.repositories.push(repo);
        }
      });
      github.isLoading = false;
      return github;
    } catch (err) {
      throw new Error(err);
    }
  }
  github = await fetchRepo();
  return github;
}
