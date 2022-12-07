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
      const res = await octokit.rest.repos.listForUser({
        username: "brampijper",
      });

      if (res) {
        res.data.filter( repo => 
          repo.homepage && github.repositories.push(repo));
        github.isLoading = false;
      } else { 
        console.log("no response received", res);
      }
      return github;
    } catch (err) {
      throw new Error(err);
    }
  }
  return await fetchRepo()
}
