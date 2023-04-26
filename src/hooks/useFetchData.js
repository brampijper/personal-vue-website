import { reactive, toRefs } from 'vue';

const state = reactive({
    cachedData: null,
    cachedETag: null,
    lastFetched: null,
    cacheExpirationTime: 604800000, // 1 week
});

async function fetchData (path, param) {
    const baseURL = 'http://localhost:3000'; //change baseurl between http://localhost:3000 (dev) / https://seashell-app-u77ys.ondigitalocean.app (prod)
    const fullURL = `${baseURL}${path}${param}`;

    if (state.cachedData && state.cachedETag && state.lastFetched && Date.now() - state.lastFetched < state.cacheExpirationTime) {
        // Data is still fresh, return cached data
        console.log('yeah')
        return state.cachedData;
    }

    // setting headers for req to server
    const headers = {};
    if (state.cachedETag) {
        console.log('yeah yeah')
        headers['If-None-Match'] = state.cachedETag;
    }

    try {
        const response = await fetch(fullURL, { headers });
        const data = await response.json();

        if (response.status === 304) {
            // Data is still up to date, update last fetched time and return cached data
            state.lastFetched = Date.now();
            return state.cachedData;
        }

        // Data has changed, update cached data, ETag, and last fetched time
        state.cachedData = data;
        state.cachedETag = response.headers.get('ETag');
        state.lastFetched = Date.now();
        return data;

    } catch (error) {
        throw new Error('Failed to fetch data ', error)
    }
}

export default async function loadData(path, param="") {
    const data = reactive({
        value: null,
        // isLoading: false,
        // hasError: false,
    });
    
    // data.isLoading = true;
    
    try {
        const result = await fetchData(path, param);
        data.value = result;
      } catch (error) {
        console.error(error);
        // data.hasError = true;
      }
    //   data.isLoading = false;
      
      return {
          ...toRefs(data),
    };        
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