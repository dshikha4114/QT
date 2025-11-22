import React from "react";

const projects = [
  {
    title: "MERN Blog App",
    description: "A full-stack blog app built using MongoDB, Express, React, and Node.js.",
    link: "https://github.com/yourusername/blog-app",
  },
  {
    title: "E-commerce Website",
    description: "An online store with product management and payment integration.",
    link: "https://github.com/yourusername/ecommerce",
  },
  {
    title: "Portfolio Website",
    description: "This portfolio you're viewing right now!",
    link: "https://your-portfolio.com",
  },
];

const Projects = () => {
  return (
    <section className="py-10 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">My Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-10">
        {projects.map((project, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-gray-600 mt-2">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-blue-600 hover:underline"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
