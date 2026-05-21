"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import {
  FaGithub,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-gray-950 to-black text-white px-6 relative overflow-hidden"
    >

      {/* GLOW BACKGROUND */}

      <div className="absolute w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl top-20 left-10 animate-pulse"></div>

      <div className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl bottom-10 right-10 animate-pulse"></div>

      {/* MAIN CONTENT */}

      <div className="text-center relative z-10">

        {/* NAME */}

        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-8xl font-bold"
        >
          Achira Sadharanga
        </motion.h1>

        {/* TYPING ANIMATION */}

        <div className="mt-6 text-2xl md:text-4xl text-cyan-400 font-semibold">

          <TypeAnimation
            sequence={[
              "Data Science Undergraduate",
              2000,
              "Future AI Engineer",
              2000,
              "Software Developer",
              2000,
              "Tech Community Leader",
              2000,
            ]}
            speed={50}
            repeat={Infinity}
          />

        </div>

        {/* DESCRIPTION */}

        <p className="mt-8 text-gray-400 max-w-2xl mx-auto text-lg leading-8">

          Passionate about Artificial Intelligence, software engineering,
          cybersecurity, leadership, and building impactful digital solutions.

        </p>

        {/* BUTTONS */}

        <div className="mt-10 flex flex-wrap justify-center gap-6">

          <a
            href="#projects"
            className="bg-cyan-500 hover:bg-cyan-400 px-8 py-4 rounded-full text-lg font-semibold transition duration-300 shadow-lg shadow-cyan-500/30"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="border border-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-4 rounded-full text-lg font-semibold transition duration-300"
          >
            Contact Me
          </a>

        </div>

        {/* SOCIAL ICONS */}

        <div className="flex justify-center gap-8 mt-12 text-4xl">

          <a
            href="https://github.com/achira-sadharanga"
            target="_blank"
          >
            <FaGithub className="hover:text-cyan-400 hover:scale-110 transition duration-300" />
          </a>

          <a
            href="https://www.facebook.com/achira.2003"
            target="_blank"
          >
            <FaFacebook className="hover:text-cyan-400 hover:scale-110 transition duration-300" />
          </a>

          <a
            href="https://www.linkedin.com/in/achira-sadharanga"
            target="_blank"
          >
            <FaLinkedin className="hover:text-cyan-400 hover:scale-110 transition duration-300" />
          </a>

        </div>

      </div>

    </section>
  );
}