import { removeExpiredCache } from "./cacheHelpers";

/**
 * Retrieves cached data from the browser cache.
 * @param {string} path - The path/key used for caching the data.
 * @returns {Promise<{ cachedData: any, cachedEtag: string }>} - The cached data and ETag.
 */
export async function getCachedData (path) {
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