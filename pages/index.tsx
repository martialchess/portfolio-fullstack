// pages/index.tsx
import Head from "next/head";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import ProjectList from "@/components/sections/ProjectList";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Welcome to my portfolio website" />
      </Head>
      <main>
        <Hero />
        <About />
        <ProjectList />
      </main>
    </>
  );
}
