import React from "react";

const ProjectList = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A sleek personal portfolio built with Next.js and Tailwind.",
      image: "/images/projects/portfolio.png",
      link: "/projects/portfolio",
    },
    {
      title: "Blog CMS",
      description: "A markdown-based blog with static generation.",
      image: "/images/projects/blog.png",
      link: "/projects/blog",
    },
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">Recent Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a href={project.link} key={index} className="bg-white rounded shadow hover:shadow-lg transition">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-t" />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-gray-600 text-sm mt-2">{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectList;
