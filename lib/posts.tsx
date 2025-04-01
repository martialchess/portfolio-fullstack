import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { BlogPost } from "@/types/blog";

const postsDirectory = path.join(process.cwd(), "content/blog");

export function getSortedPosts(): BlogPost[] {
    const fileNames = fs.readdirSync(postsDirectory);

    const posts = fileNames.map((fileName) => {
        const slug = fileName.replace(/\.md$/, "");

        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");

        const { data } = matter(fileContents);

        return {
            slug,
            title: data.title,
            date: data.date,
            description: data.description,
        };
    });

    return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}