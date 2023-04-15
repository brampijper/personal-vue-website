import Parser from 'rss-parser';

export default async function useBlogPosts() {

    const CORS_PROXY = "https://cors-anywhere.herokuapp.com/"
    let parser = new Parser();

    async function getBlogPost() {
        const feed = await parser.parseURL(CORS_PROXY + 'https://focused-galileo-c3ee18.netlify.app/rss.xml');

        if(feed) {
            return feed.items[0]
        } else {
            throw new Error(err)
        }
    }
    return await getBlogPost();
}