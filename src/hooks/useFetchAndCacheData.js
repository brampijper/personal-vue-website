export async function fetchAndCacheData (path, param = '') {
    const baseURL = 'https://seashell-app-u77ys.ondigitalocean.app'; //change baseurl between http://localhost:3000 (dev) / https://seashell-app-u77ys.ondigitalocean.app (prod)
    const fullURL = `${baseURL}${path}${param}`;

    try {
        const headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': 'http:localhost:8080',
            'Access-Control-Allow-Methods': 'GET',
            'Access-Control-Allow-Headers': 'Content-Type',
        };

        const { cachedEtag } = await returnCachedData(path); // Here we check to see if an ETag is already stored in the browser cache.

        if (cachedEtag) { // When the ETag exists, we set the headers with that ETag.
            headers['If-None-Match'] = cachedEtag;
        }

        const response = await fetch(fullURL, { headers }); // We send back the ETag to the server, so that it can check if the (cached) data is still valid.

        if ( response.status === 304) { // The server sends back a 304 if the data is still valid. 
            const { cachedData } = await returnCachedData(path) // Here we retrieve the cached data from the browser.

            if (!cachedData) { // CachedData is removed on the front-end so we need to fetch it again.
                const freshResponse = await fetch(fullURL);
                const freshData = await freshResponse.json(); // not liking this repeated code block
                const freshEtag = freshResponse.headers.get('etag');
                storeInCache(path, freshData, freshEtag);
                return freshData;
            }
            return cachedData;
        }

        const data = await response.json();
        const etag = response.headers.get('etag');
        storeInCache(path, data, etag); // Store data and etag in the browser cache, with path being it's unique key.
        return data;

    } catch (error) {
        console.log('error while fetching, ', error)
    }
}

async function returnCachedData (path) {
    try {
        const stringifiedData = localStorage.getItem(path);
        const parsedData = JSON.parse(stringifiedData);

        if (parsedData) {
            const { data, etag, expirationTime } = parsedData;
            return { cachedData: data, cachedEtag: etag }
        }

        return { cachedData: null } // if there is no cachedData return null

    } catch (error) {
        console.log('failed while checking browser cache: ', error)
    }

}

function storeInCache(path, data, etag) {
    const expirationTime = new Date().getTime() + 604800000 // 1 week
    const cachedData = { data, etag, expirationTime }

    localStorage.setItem(path, JSON.stringify(cachedData));
}

export default fetchAndCacheData;