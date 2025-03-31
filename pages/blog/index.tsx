import Link from "next/link";
import { getSortedPosts } from "@/lib/posts";

type BlogPost = {
    slug: string;
    title: string;
    date: string;
    description: string;
};

export async function getStaticProps() {
    const posts = getSortedPosts();
    return { props: { posts } };
}

export default function Blog({ posts }: { posts:  BlogPost[] }) {
    return (
        <section className="max-w-4xl mx-auto py-20 px-4">
            <h1 className="text-4xl font-bold mb-10 text-center">My Blog</h1>
            <div className="space-y-8">
                {posts.map((post: any) => (
                    <div key={post.slug} className="p-6 bg-white rounded-xl shadow-md">
                        <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
                        <p className="text-gray-500 text-sm">{post.date}</p>
                        <p className="text-gray-600 mt-2">{post.description}</p>
                        <Link href={`/blog/${post.slug}`} className="text-blue-600 mt-3 inline-block">
                        Read More →
                        </Link>
                    </div>
                ))}
            </div>
        </section>

    );
};