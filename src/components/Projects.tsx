"use client";

import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "SLTC ScanGO",
      description:
        "QR-based hostel entry and exit management system with admin dashboard and cloud database integration.",
      tech: "Next.js • MySQL • Tailwind CSS",
      github: "https://github.com/achira-sadharanga",
    },

    {
      title: "SLTC UniGO",
      description:
        "University security verification system using QR code scanning and student management.",
      tech: "React • Node.js • Database Systems",
      github: "https://github.com/achira-sadharanga",
    },

    {
      title: "AI Attendance Dashboard",
      description:
        "Smart attendance and analytics dashboard with modern data visualization features.",
      tech: "Python • Analytics • Dashboard UI",
      github: "https://github.com/achira-sadharanga",
    },

    {
      title: "Portfolio Website",
      description:
        "Modern personal portfolio website with animations, responsive UI, and professional styling.",
      tech: "Next.js • Framer Motion • Tailwind",
      github: "https://github.com/achira-sadharanga",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen bg-gradient-to-b from-black to-gray-950 text-white px-6 py-24"
    >

      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold text-center mb-20"
        >
          My <span className="text-cyan-400">Projects</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.03 }}
              className="bg-white/5 border border-gray-800 backdrop-blur-lg rounded-3xl p-8 shadow-2xl"
            >

              <h3 className="text-3xl font-bold text-cyan-400">
                {project.title}
              </h3>

              <p className="mt-6 text-gray-300 leading-7">
                {project.description}
              </p>

              <div className="mt-6">
                <span className="bg-cyan-500/10 border border-cyan-500 px-4 py-2 rounded-full text-sm text-cyan-300">
                  {project.tech}
                </span>
              </div>

              <div className="mt-8 flex gap-4">

                <a
                  href={project.github}
                  target="_blank"
                  className="flex items-center gap-3 bg-cyan-500 hover:bg-cyan-400 px-6 py-3 rounded-full font-semibold transition duration-300"
                >
                  <FaGithub />
                  GitHub
                </a>

              </div>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}