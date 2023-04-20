import Parser from 'rss-parser';

export default async function useBlogPosts() {
    let state = {
        isLoading: true
    }
    let parser = new Parser();

    async function fetchRSSFeed() {
        try {
            const feed = await parser.parseURL('https://focused-galileo-c3ee18.netlify.app/rss.xml');
            
            if (feed && feed.items.length) {
                const [firstPost] = feed.items;
                state = {...state, firstPost}; 
                state.isLoading = false;
            } else {
                console.log("no feed returned", feed)
            }
        return state;
        } catch (err) {
            throw new Error(err)
        }
    }
    return await fetchRSSFeed();
}