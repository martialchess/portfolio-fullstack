import React from "react";

const ProjectList = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio built with Next.js and Tailwind CSS.",
      imageUrl: "/images/projects/portfolioproject.png",
      link: "/projects/portfolio",
    },
    {
      title: "Blog CMS",
      description: "A markdown-based blog CMS built with Next.js and Markdown.",
      imageUrl: "/images/projects/project2.jpg",
      link: "/projects/blog",
    },
  ];

  return (
    <section className="py-20 bg-[#f9fafb]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="w-full bg-[#e8f0fe] py-4 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 text-center">
            Recent Projects
          </h2>
        </div>

        <div className="flex justify-center">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <a
                href={project.link}
                key={index}
                className="bg-white rounded shadow hover:shadow-lg transition w-full max-w-sm"
              >
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-t"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-gray-600 text-sm mt-2">
                    {project.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectList;
