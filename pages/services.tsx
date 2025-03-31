// pages/services.tsx
import Head from "next/head";

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>Services</title>
      </Head>
      <main className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">What I Offer</h1>
        <ul className="list-disc pl-6 space-y-2">
          <li>Full-stack web development</li>
          <li>UI/UX Design</li>
          <li>Technical consulting</li>
          <li>Custom software solutions</li>
        </ul>
      </main>
    </>
  );
}
