export default async function useBlogPosts() {
    
    async function fetchLatestPost() {
        try {
            const res = await fetch("https://focused-galileo-c3ee18.netlify.app/react");
            
            if (res) {
                const jsonData = await res.json()
            } else {
                console.log("no response received", res);
            }
            return data;
        } catch (err) {
            throw new Error(err)
        }
    }
    return await fetchLatestPost()
}