export default async function useGetContributions() {
    try {
      const response = await fetch('https://seashell-app-u77ys.ondigitalocean.app/blog/posts')
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return { data };    
    } catch(error) {
      console.error('Problem while fetching: ', error)
   }
}