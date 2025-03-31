import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { getPostBySlug, getSortedPosts } from "@/lib/blog";
import type { BlogPost } from "@/types/blog"; // Make sure this is created

type BlogPostWithContent = BlogPost & {
  contentHtml: string;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getSortedPosts();
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const post = await getPostBySlug(slug);

  return {
    props: {
      post,
    },
  };
};

export default function BlogPostPage({ post }: { post: BlogPostWithContent }) {
  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.description} />
      </Head>

      <article className="max-w-4xl mx-auto py-16 px-4 prose">
        <h1>{post.title}</h1>
        <p className="text-sm text-gray-500">{post.date}</p>
        <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />

        {/* Adding share links here */}
        <div className="mt-10 flex gap-4">
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(fullUrl)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
            >
              Share on Facebook
            </a>
            
            <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(fullUrl)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
            >
            Share on LinkedIn
          </a>
        </div>
      </article>
    </>
  );
}
