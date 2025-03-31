// pages/portfolio.tsx
import Head from "next/head";

export default function PortfolioPage() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>
      <main className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">My Projects</h1>
        <p>Explore a collection of my work and personal projects.</p>
        {/* Replace this with dynamic project cards if you have a list */}
      </main>
    </>
  );
}
