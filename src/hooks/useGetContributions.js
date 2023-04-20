export default async function useGetContributions() {
  try {
    const response = await fetch('https://seashell-app-u77ys.ondigitalocean.app/api/stats')

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const { data } = await response.json();
    const { 
      user: { 
        contributionsCollection: { 
          contributionCalendar: { 
            totalContributions 
          }
        }
      }  
    } = data
    return totalContributions;    
  }

  catch(error) {
    console.error('Problem while fetching: ', error)
 }
}