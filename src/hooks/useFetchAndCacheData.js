/**
 * Fetches data from the server and caches it in the browser.
 * @param {string} path - The path to fetch data from.
 * @param {string} param - Additional parameter for the request URL.
 * @param {number} expiration - Expiration time for the cached data in seconds.
 * @returns {Promise<any>} - The fetched or cached data.
 */

export async function fetchAndCacheData (path, param = '', expiration = 10000) {
    const serverBaseUrl = process.env.SERVER_BASE_URL; // Base URL depending on the environment (dev or prod)
    const fullURL = `${serverBaseUrl}${path}${param}`;

    try {
        const { cachedEtag } = await returnCachedData(path); // Check if an ETag is already stored in the browser cache.
        let requestOptions = {};

        if (cachedEtag) {
            requestOptions.headers = {
                'If-None-Match': cachedEtag
            }
        }

        const response = await fetch(fullURL, requestOptions); // Send the ETag to the server, to check if the cached data is still valid.

        if ( response.status === 304) { // Data is still valid (304 status)
            const { cachedData } = await returnCachedData(path) // Retrieve the cached data from the browser.
            
            if (!cachedData) { // Cached data was removed, so fetch it again with the previous ETag still being valid for the backend.
                const freshData = await response.json()
                const freshEtag = response.headers.get('ETag')
                storeInCache(path, freshData, freshEtag, expiration);
                return freshData;
            }
            return cachedData;
        } else {
            const etag = response.headers.get('ETag');
            const data = await response.json();
            if (etag && data) {
                storeInCache(path, data, etag, expiration); // Store data and etag in the browser cache, with path being it's unique key.  
            }
            return data;
        }


    } catch (error) {
        console.log('error while fetching, ', error)
    }
}

/**
 * Retrieves cached data from the browser cache.
 * @param {string} path - The path/key used for caching the data.
 * @returns {Promise<{ cachedData: any, cachedEtag: string }>} - The cached data and ETag.
 */
async function returnCachedData (path) {
    try {
        const stringifiedData = localStorage.getItem(path);
        let parsedData;
        if (!stringifiedData) { // There's no cachedData, so return null
            return { cachedData: null } 
        }

        try {
            parsedData = JSON.parse(stringifiedData);
        } catch(parseError) {
            console.log('Failed to parse cached data:', parseError);
            return { cachedData: null };
        }

        const { data, etag, expirationTime } = parsedData;
        const isExpired = expirationTime < new Date().getTime();
        if (isExpired) { // Cached data is stale: remove it from the cache.
            removeExpiredCache(path);
            return { cachedData: null };
        }
        // all good, return the cachedData and ETag.
        return { cachedData: data, cachedEtag: etag }


    } catch (error) {
        console.log('failed while checking browser cache: ', error)
    }

}

/**
 * 
 * @param {string} path - The path/key used for caching the data.
 * @param {any} data - The data to be cached.
 * @param {string} etag - The ETag associated with the data.
 * @param {number} expiration - Expiration time for the cached data
 */
function storeInCache(path, data, etag, expiration) {
    const expirationTime = new Date().getTime() + expiration;  
    const cachedData = { data, etag, expirationTime }
    localStorage.setItem(path, JSON.stringify(cachedData));
}

/**
 * Remove expired cache from localStorage based on the provided path.
 * @param {string} path - The path/key used for caching the data.
 */
function removeExpiredCache(path) {
    try {
      localStorage.removeItem(path);
    } catch (error) {
      console.log('Failed to remove expired cache:', error);
    }
}

export default fetchAndCacheData;