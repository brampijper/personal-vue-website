import { reactive } from 'vue';

export function useFetchData() {
    const state = reactive({
        data: null,
        version: null,
    });

    async function fetchData (path, param = "") {
        const baseURL = 'http://localhost:3000'; //change baseurl between http://localhost:3000 (dev) / https://seashell-app-u77ys.ondigitalocean.app (prod)
        const fullURL = `${baseURL}${path}${param}`; 

        if (state.data && state.version) {
            return state.data;
        }

        try {
            const response = await fetch(fullURL);
            const etag = response.headers.get('ETag');
            console.log(etag)

            if (etag === state.version) {
                console.log('match')
                return state.data;
            }

            state.version = etag;
            const data = await response.json(); 
            state.data = data;
            return data;
        } catch (error) {
            throw new Error('Failed to fetch data ', error)
        }
    }

    return { fetchData };
}

// export default async function useFetchData(path, param = "") {

//     if(cachedData[path] && cachedData[path].version === version) {
//         console.log('returning cache: ', cachedData[path.data])
//         return Promise.resolve(cachedData[path.data]);
//     }    

//     try {


//         const response = await fetch(fullURL);

//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }

//         const {data} = await response.json(); 
//         const etag = response.headers.get('ETag'); 
        
//         if (etag === cachedVersion) {
//             return cachedData;
//         }

//         cachedVersion = etag;
//         console.log(data)     
//         return data;

//     } catch(error) {
//         console.error('Problem while fetching: ', error)
//     }
// }