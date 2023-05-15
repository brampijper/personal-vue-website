/**
 * Calculates the expiration time for cache based on the headers.
 *
 * @param {Headers} headers - The headers object containing cache-control header.
 * @returns {number} - The expiration timestamp in milliseconds.
 */

export default function getExpirationFromHeaders(headers) {
    
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