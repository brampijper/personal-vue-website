export default async function useGithubRepositories() {
  let github = {
    repositories: [],
    isLoading: true
  }

  try {
    const response = await fetch('https://seashell-app-u77ys.ondigitalocean.app/api/repos') // how do i switch between production and dev build? They need different links? or not?
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const repos = await response.json();
    
    repos.filter( repo => repo.homepage && github.repositories.push(repo));
    github.isLoading = false;
    
    return github;
  
  }
    catch(error) {
      console.error('Problem while fetching: ', error)
   }

  return await useGithubRepositories();
}
