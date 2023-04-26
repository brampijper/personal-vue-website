export default async function useFetchData(path, param = "") {
    const baseURL = 'http://localhost:3000'; //change baseurl between http://localhost:3000 (dev) / https://seashell-app-u77ys.ondigitalocean.app (prod)
    const fullURL = `${baseURL}${path}${param}`; 

    try {
        const response = await fetch(fullURL);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();        
        return data;

    } catch(error) {
        console.error('Problem while fetching: ', error)
    }
}