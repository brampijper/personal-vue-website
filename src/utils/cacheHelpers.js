
/**
 * @param {string} path - The path/key used for caching the data.
 * @param {object} cachedData - The data to be cached.
 */
function storeInCache(path, cachedData) {
    try {
        localStorage.setItem(path, JSON.stringify(cachedData));
    } catch(error) {
        console.log('Failed to store data in cache: ', error)
    }
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

export { 
    storeInCache, 
    removeExpiredCache 
}
