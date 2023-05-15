import getExpirationFromHeaders from "./getExpirationFromHeaders";
import { getCachedData } from "./getCacheData";
import { storeInCache } from "./cacheHelpers";

const SERVER_BASE_URL = process.env.SERVER_BASE_URL; // Base URL depending on the environment (dev / prod)

/**
 * Fetches data from the server and caches it in the browser.
 * @param {string} path - The path to fetch data from.
 * @param {string} param - Additional parameter for the request URL.
 * @returns {Promise<any>} - The fetched or cached data.
 */

export async function fetchAndCacheData (path, param = '') { 
    const fetchURL = `${SERVER_BASE_URL}${path}?${param}`;
    let requestOptions = {};

    try {
        const { cachedEtag } = await getCachedData(path); // Check if an ETag is already stored in the browser cache.        

        if (cachedEtag) {
            requestOptions.headers = {
                'If-None-Match': cachedEtag,
            }
        }

        const response = await fetch(fetchURL, requestOptions); // Send the ETag to the server, to check if the cached data is still valid.

        if ( response.status === 304) { // Data is still valid (304 status)
            const { cachedData } = await getCachedData(path) // Retrieve the cached data from the browser.
            return cachedData;
        } 
        
        const etag = response.headers.get('ETag');

        const data = await response.json();

        const expirationTime = getExpirationFromHeaders(response.headers);

        if (etag && data && expirationTime) {
            const cachedData = { data, etag, expirationTime }
            storeInCache(path, cachedData); // Store data and etag in the browser cache, with path being it's unique key.  
        }

        return data;

    } catch (error) {
        console.log('error while fetching, ', error)
    }
}

export default fetchAndCacheData;