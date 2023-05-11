/**
 * Fetches data from the server and caches it in the browser.
 * @param {string} path - The path to fetch data from.
 * @param {string} param - Additional parameter for the request URL.
 * @param {number} expiration - Expiration time for the cached data in seconds.
 * @returns {Promise<any>} - The fetched or cached data.
 */

export async function fetchAndCacheData (path, param = '') { 
    const serverBaseUrl = process.env.SERVER_BASE_URL; // Base URL depending on the environment (dev or prod)
    const fullURL = `${serverBaseUrl}${path}?${param}`;

    try {
        const { cachedEtag } = await returnCachedData(path); // Check if an ETag is already stored in the browser cache.
        let requestOptions = {};

        if (cachedEtag) {
            requestOptions.headers = {
                'If-None-Match': cachedEtag,
            }
        }

        const response = await fetch(fullURL, requestOptions); // Send the ETag to the server, to check if the cached data is still valid.

        if ( response.status === 304) { // Data is still valid (304 status)
            const { cachedData } = await returnCachedData(path) // Retrieve the cached data from the browser.
            return cachedData;
        } 
        
        const etag = response.headers.get('ETag');
        const data = await response.json();
        const expirationTime = getExpirationFromHeaders(response.headers);

        if (etag && data) {
            storeInCache(path, data, etag, expirationTime); // Store data and etag in the browser cache, with path being it's unique key.  
        }

        return data;


    } catch (error) {
        console.log('error while fetching, ', error)
    }
}


function getExpirationFromHeaders(headers) {
    const cacheControl = headers.get('cache-control');
    if (cacheControl) {
      const maxAgeMatch = cacheControl.match(/max-age=(\d+)/);
      if (maxAgeMatch && maxAgeMatch[1]) {
        const maxAgeInSeconds = parseInt(maxAgeMatch[1]);
        return Date.now() + maxAgeInSeconds * 1000; // Convert max-age to milliseconds
      }
    }
    // Default to a fixed cache duration if headers are not available
    return Date.now() + 60 * 60 * 1000;
}

/**
 * Retrieves cached data from the browser cache.
 * @param {string} path - The path/key used for caching the data.
 * @returns {Promise<{ cachedData: any, cachedEtag: string }>} - The cached data and ETag.
 */
async function returnCachedData (path) {
    try {
        const stringifiedData = localStorage.getItem(path);
        
        if (!stringifiedData) { // There's no cachedData, so return null
            return false
        }

        let parsedData;
        try {
            parsedData = JSON.parse(stringifiedData);
        } catch(parseError) {
            console.log('Failed to parse cached data:', parseError);
            return false;
        }

        const { data, etag, expirationTime } = parsedData;

        const isExpired = expirationTime < new Date().getTime();
        if (isExpired) { // Cached data is stale: remove it from the cache.
            removeExpiredCache(path);
            return false;
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
function storeInCache(path, data, etag, expirationTime) {
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