import Parser from 'rss-parser';

export default async function useBlogPosts() {
    let parser = new Parser();

    async function getBlogPost() {
        try {
            const feed = await parser.parseURL('https://focused-galileo-c3ee18.netlify.app/rss.xml');
            
            if (feed && feed.items.length) {
                const [firstBlogPost] = feed.items;
                return firstBlogPost;
            } else {
                console.log("no feed returned", feed)
            }
        } catch (err) {
            throw new Error(err)
        }
    }
    return await getBlogPost();
}