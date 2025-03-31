import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
const postsDirectory = path.join(process.cwd(), 'content/blog');

export function getSortedPosts() {
    const fileNames = fs.readdirSync(postsDirectory);

    const posts = fileNames.map((fileName)=> {
        const slug = fileName.replace(/\.md$/, '');
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data } = matter(fileContents);

        return {
            slug, 
            ...data,
        };
    });

    return posts.sort((a: any, b: any) => (a.date < b.date ? 1 : -1));
}

export async function getPostBySlug(slug: string) {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const { data, content } = matter(fileContents);
    const processedContent = await remark().use(html).process(content);
    const contentHtml = processedContent.toString();

    return {
        slug, 
        contentHtml, 
        ...data,
    };
}