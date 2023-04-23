import Parser from 'rss-parser';
const parser = new Parser()

export default async function useBlogPosts() {
    let state = {
        isLoading: true
    }

    async function fetchRSSFeed() {
        const feed = await parser.parseURL('https://focused-galileo-c3ee18.netlify.app/rss.xml');
        
        if (feed && feed.items.length) {
            const [firstPost] = feed.items;
            state = {...state, firstPost}; 
            state.isLoading = false;
        } else {
            const message = `An error has occured: ${feed}`;
            throw new Error(message); 
        }
        return state;
    }
    return await fetchRSSFeed()
}