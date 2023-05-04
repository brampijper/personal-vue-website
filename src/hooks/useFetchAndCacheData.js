export async function fetchAndCacheData (path, param = '') {
    const serverBaseUrl = process.env.SERVER_BASE_URL; // depending on prod - dev env it switches to http://localhost:3000 and https://backend-api-requests-production.up.railway.app
    const fullURL = `${serverBaseUrl}${path}${param}`;

    try {
        const headers = {};

        const { cachedEtag } = await returnCachedData(path); // Here we check to see if an ETag is already stored in the browser cache.

        if (cachedEtag) { // When the ETag exists, we set the headers with that ETag.
            headers['If-None-Match'] = cachedEtag;
        }

        const response = await fetch(fullURL, { headers }); // We send back the ETag to the server, so that it can check if the (cached) data is still valid.
        // console.log(response.text())

        if ( response.status === 304) { // The server sends back a 304 if the data is still valid. 
            const { cachedData } = await returnCachedData(path) // Here we retrieve the cached data from the browser.

            if (!cachedData) { // CachedData is removed on the front-end so we need to fetch it again. //previous etag should still be valid for the backend
                const freshResponse = await fetch(fullURL, { headers });
                const freshData = await freshResponse.json(); // not liking this repeated code block
                const freshEtag = freshResponse.headers.get('etag');
                storeInCache(path, freshData, freshEtag);
                return freshData;
            }
            return cachedData;
        }

        const data = await response.json();
        // console.log('data ', data)
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