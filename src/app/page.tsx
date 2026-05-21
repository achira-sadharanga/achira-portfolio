"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import {
  FaGithub,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";

export default function Home() {
  return (
    <main className="bg-black text-white overflow-hidden">

      {/* NAVBAR */}

      <nav className="fixed top-0 w-full z-50 bg-black/30 backdrop-blur-xl border-b border-gray-800">

  <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

    {/* LOGO */}

    <h1 className="text-2xl md:text-3xl font-bold text-cyan-400">
      Achira.dev
    </h1>

    {/* DESKTOP MENU */}

    <ul className="hidden md:flex gap-8 text-gray-300 font-medium">

      <li>
        <a href="#home" className="hover:text-cyan-400 transition">
          Home
        </a>
      </li>

      <li>
        <a href="#about" className="hover:text-cyan-400 transition">
          About
        </a>
      </li>

      <li>
        <a href="#skills" className="hover:text-cyan-400 transition">
          Skills
        </a>
      </li>

      <li>
        <a href="#projects" className="hover:text-cyan-400 transition">
          Projects
        </a>
      </li>

      <li>
        <a href="#contact" className="hover:text-cyan-400 transition">
          Contact
        </a>
      </li>

    </ul>

    {/* DOWNLOAD CV */}

    <a
      href="/cv/AchiraCV.pdf"
      download
      className="hidden md:block bg-cyan-500 hover:bg-cyan-400 px-6 py-3 rounded-full font-semibold transition duration-300"
    >

      Download CV

    </a>

  </div>

</nav>

      {/* HERO SECTION */}

      <section
        id="home"
        className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-gray-950 to-black text-white px-6 relative overflow-hidden"
      >

        <div className="absolute w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl top-20 left-10 animate-pulse"></div>

        <div className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl bottom-10 right-10 animate-pulse"></div>

        {/* FLOATING ICONS */}

<div className="absolute top-32 left-20 text-cyan-400 text-6xl animate-bounce">
  ⚛️
</div>

<div className="absolute bottom-32 right-20 text-cyan-400 text-6xl animate-pulse">
  💻
</div>

<div className="absolute top-1/2 left-10 text-cyan-400 text-5xl animate-bounce">
  🐍
</div>

<div className="absolute top-40 right-40 text-cyan-400 text-5xl animate-pulse">
  🚀
</div>

        <div className="text-center relative z-10">

          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-8xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
          >
            Achira Sadharanga
          </motion.h1>

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

          <p className="mt-8 text-gray-400 max-w-2xl mx-auto text-lg leading-8">

            Passionate about Artificial Intelligence, software engineering,
            cybersecurity, leadership, and building impactful digital solutions.

          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-6">

            <a
              href="#projects"
              className="bg-cyan-500 hover:bg-cyan-400 px-8 py-4 rounded-full text-lg font-semibold transition duration-300"
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

          <div className="flex justify-center gap-8 mt-12 text-4xl">

            <a
              href="https://github.com/achira-sadharanga"
              target="_blank"
            >
              <FaGithub className="hover:text-cyan-400 transition duration-300" />
            </a>

            <a
              href="https://www.facebook.com/achira.2003"
              target="_blank"
            >
              <FaFacebook className="hover:text-cyan-400 transition duration-300" />
            </a>

            <a
              href="https://www.linkedin.com/in/achira-sadharanga"
              target="_blank"
            >
              <FaLinkedin className="hover:text-cyan-400 transition duration-300" />
            </a>

          </div>

        </div>

      </section>

      {/* ABOUT SECTION */}

<section
  id="about"
  className="min-h-screen bg-gradient-to-b from-black to-gray-950 text-white px-6 py-24"
>

  <div className="max-w-7xl mx-auto">

    <motion.h2
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-5xl font-bold text-center mb-20"
    >

      About <span className="text-cyan-400">Me</span>

    </motion.h2>

    <div className="grid md:grid-cols-2 gap-16 items-center">

      {/* LEFT SIDE */}

      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="bg-white/5 border border-gray-800 rounded-3xl p-10 backdrop-blur-lg"
      >

        <h3 className="text-3xl font-bold text-cyan-400 mb-8">
          Who Am I?
        </h3>

        <p className="text-gray-300 leading-8 text-lg">

          I am a passionate Data Science undergraduate at SLTC Research
          University with interests in Artificial Intelligence,
          software engineering, cybersecurity, and digital innovation.

        </p>

        <p className="text-gray-300 leading-8 text-lg mt-6">

          Alongside academics, I actively engage in leadership,
          university organizations, and technical communities including
          IEEE, Leo Club, and Media Unit activities.

        </p>

        <p className="text-gray-300 leading-8 text-lg mt-6">

          I enjoy building impactful technology solutions while
          continuously improving my technical, leadership,
          and communication skills.

        </p>

      </motion.div>

      {/* RIGHT SIDE */}

      <motion.div
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="grid grid-cols-2 gap-6"
      >

        <div className="bg-cyan-500/10 border border-cyan-500 rounded-3xl p-8 text-center">

          <h1 className="text-5xl font-bold text-cyan-400">
            2+
          </h1>

          <p className="mt-4 text-gray-300">
            Years Learning Tech
          </p>

        </div>

        <div className="bg-white/5 border border-gray-700 rounded-3xl p-8 text-center">

          <h1 className="text-5xl font-bold text-cyan-400">
            10+
          </h1>

          <p className="mt-4 text-gray-300">
            Certifications
          </p>

        </div>

        <div className="bg-white/5 border border-gray-700 rounded-3xl p-8 text-center">

          <h1 className="text-5xl font-bold text-cyan-400">
            5+
          </h1>

          <p className="mt-4 text-gray-300">
            Leadership Roles
          </p>

        </div>

        <div className="bg-cyan-500/10 border border-cyan-500 rounded-3xl p-8 text-center">

          <h1 className="text-5xl font-bold text-cyan-400">
            100%
          </h1>

          <p className="mt-4 text-gray-300">
            Passion & Dedication
          </p>

        </div>

      </motion.div>

    </div>

  </div>

</section>

{/* SKILLS SECTION */}

<section
  id="skills"
  className="min-h-screen bg-black text-white px-6 py-24"
>

  <div className="max-w-7xl mx-auto">

    <motion.h2
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-5xl font-bold text-center mb-20"
    >

      My <span className="text-cyan-400">Skills</span>

    </motion.h2>

    <div className="grid md:grid-cols-2 gap-20 items-center">

      {/* LEFT SIDE */}

      <div className="space-y-8">

        {/* PYTHON */}

        <div>

          <div className="flex justify-between mb-3">
            <h3 className="text-xl font-semibold">
              Python
            </h3>

            <span className="text-cyan-400">
              90%
            </span>
          </div>

          <div className="w-full bg-gray-800 rounded-full h-4">

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "90%" }}
              transition={{ duration: 1.5 }}
              className="bg-cyan-400 h-4 rounded-full"
            />

          </div>

        </div>

        {/* HTML CSS */}

        <div>

          <div className="flex justify-between mb-3">
            <h3 className="text-xl font-semibold">
              HTML / CSS
            </h3>

            <span className="text-cyan-400">
              95%
            </span>
          </div>

          <div className="w-full bg-gray-800 rounded-full h-4">

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "95%" }}
              transition={{ duration: 1.5 }}
              className="bg-cyan-400 h-4 rounded-full"
            />

          </div>

        </div>

        {/* JAVASCRIPT */}

        <div>

          <div className="flex justify-between mb-3">
            <h3 className="text-xl font-semibold">
              JavaScript
            </h3>

            <span className="text-cyan-400">
              80%
            </span>
          </div>

          <div className="w-full bg-gray-800 rounded-full h-4">

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "80%" }}
              transition={{ duration: 1.5 }}
              className="bg-cyan-400 h-4 rounded-full"
            />

          </div>

        </div>

        {/* REACT */}

        <div>

          <div className="flex justify-between mb-3">
            <h3 className="text-xl font-semibold">
              React / Next.js
            </h3>

            <span className="text-cyan-400">
              75%
            </span>
          </div>

          <div className="w-full bg-gray-800 rounded-full h-4">

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "75%" }}
              transition={{ duration: 1.5 }}
              className="bg-cyan-400 h-4 rounded-full"
            />

          </div>

        </div>

      </div>

      {/* RIGHT SIDE */}

      <div className="grid grid-cols-2 gap-6">

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white/5 border border-gray-800 rounded-3xl p-10 text-center backdrop-blur-lg"
        >

          <h1 className="text-5xl">
            🐍
          </h1>

          <h3 className="mt-6 text-2xl font-semibold">
            Python
          </h3>

        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white/5 border border-gray-800 rounded-3xl p-10 text-center backdrop-blur-lg"
        >

          <h1 className="text-5xl">
            ⚛️
          </h1>

          <h3 className="mt-6 text-2xl font-semibold">
            React
          </h3>

        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white/5 border border-gray-800 rounded-3xl p-10 text-center backdrop-blur-lg"
        >

          <h1 className="text-5xl">
            💻
          </h1>

          <h3 className="mt-6 text-2xl font-semibold">
            Web Dev
          </h3>

        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white/5 border border-gray-800 rounded-3xl p-10 text-center backdrop-blur-lg"
        >

          <h1 className="text-5xl">
            🗄️
          </h1>

          <h3 className="mt-6 text-2xl font-semibold">
            Database
          </h3>

        </motion.div>

      </div>

    </div>

  </div>

</section>

{/* PROJECTS SECTION */}

<section
  id="projects"
  className="min-h-screen bg-gradient-to-b from-black to-gray-950 text-white px-6 py-24"
>

  <div className="max-w-7xl mx-auto">

    <motion.h2
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-5xl font-bold text-center mb-20"
    >

      My <span className="text-cyan-400">Projects</span>

    </motion.h2>

    <div className="grid md:grid-cols-2 gap-10">

      {/* PROJECT 1 */}

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.03 }}
        className="bg-white/5 border border-gray-800 rounded-3xl p-8 backdrop-blur-lg"
      >

        <h3 className="text-3xl font-bold text-cyan-400">
          SLTC ScanGO
        </h3>

        <p className="mt-6 text-gray-300 leading-8">

          QR-based hostel entry and exit management system with
          admin dashboard and student tracking features.

        </p>

        <div className="mt-6 flex flex-wrap gap-3">

          <span className="bg-cyan-500/10 border border-cyan-500 px-4 py-2 rounded-full text-sm">
            Next.js
          </span>

          <span className="bg-cyan-500/10 border border-cyan-500 px-4 py-2 rounded-full text-sm">
            MySQL
          </span>

          <span className="bg-cyan-500/10 border border-cyan-500 px-4 py-2 rounded-full text-sm">
            Tailwind
          </span>

        </div>

        <a
          href="https://github.com/achira-sadharanga"
          target="_blank"
          className="inline-block mt-8 bg-cyan-500 hover:bg-cyan-400 px-6 py-3 rounded-full font-semibold transition duration-300"
        >

          View Project

        </a>

      </motion.div>

      {/* PROJECT 2 */}

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        whileHover={{ scale: 1.03 }}
        className="bg-white/5 border border-gray-800 rounded-3xl p-8 backdrop-blur-lg"
      >

        <h3 className="text-3xl font-bold text-cyan-400">
          Traffic Violation System
        </h3>

        <p className="mt-6 text-gray-300 leading-8">

A Traffic Violation Management System is a web-based system that detects and manages traffic violations digitally. 
          It uses HTML, CSS, JavaScript, React, PHP/Node.js, and MySQL/Firebase to record violations, generate fines, and improve road safety.

        </p>

        <div className="mt-6 flex flex-wrap gap-3">

          <span className="bg-cyan-500/10 border border-cyan-500 px-4 py-2 rounded-full text-sm">
            React
          </span>

          <span className="bg-cyan-500/10 border border-cyan-500 px-4 py-2 rounded-full text-sm">
            Node.js
          </span>

          <span className="bg-cyan-500/10 border border-cyan-500 px-4 py-2 rounded-full text-sm">
            Database
          </span>

        </div>

        <a
          href="https://github.com/achira-sadharanga"
          target="_blank"
          className="inline-block mt-8 bg-cyan-500 hover:bg-cyan-400 px-6 py-3 rounded-full font-semibold transition duration-300"
        >

          View Project

        </a>

      </motion.div>

      {/* PROJECT 3 */}

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4 }}
        whileHover={{ scale: 1.03 }}
        className="bg-white/5 border border-gray-800 rounded-3xl p-8 backdrop-blur-lg"
      >

        <h3 className="text-3xl font-bold text-cyan-400">
          AI Attendance Dashboard
        </h3>

        <p className="mt-6 text-gray-300 leading-8">

          Smart analytics dashboard for attendance monitoring,
          reporting, and student activity visualization.

        </p>

        <div className="mt-6 flex flex-wrap gap-3">

          <span className="bg-cyan-500/10 border border-cyan-500 px-4 py-2 rounded-full text-sm">
            Python
          </span>

          <span className="bg-cyan-500/10 border border-cyan-500 px-4 py-2 rounded-full text-sm">
            Analytics
          </span>

          <span className="bg-cyan-500/10 border border-cyan-500 px-4 py-2 rounded-full text-sm">
            Dashboard
          </span>

        </div>

        <a
          href="https://github.com/achira-sadharanga"
          target="_blank"
          className="inline-block mt-8 bg-cyan-500 hover:bg-cyan-400 px-6 py-3 rounded-full font-semibold transition duration-300"
        >

          View Project

        </a>

      </motion.div>

      {/* PROJECT 4 */}

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.6 }}
        whileHover={{ scale: 1.03 }}
        className="bg-white/5 border border-gray-800 rounded-3xl p-8 backdrop-blur-lg"
      >

        <h3 className="text-3xl font-bold text-cyan-400">
          Personal Portfolio
        </h3>

        <p className="mt-6 text-gray-300 leading-8">

          Modern animated portfolio website built using Next.js,
          Framer Motion, and Tailwind CSS.

        </p>

        <div className="mt-6 flex flex-wrap gap-3">

          <span className="bg-cyan-500/10 border border-cyan-500 px-4 py-2 rounded-full text-sm">
            Next.js
          </span>

          <span className="bg-cyan-500/10 border border-cyan-500 px-4 py-2 rounded-full text-sm">
            Framer Motion
          </span>

          <span className="bg-cyan-500/10 border border-cyan-500 px-4 py-2 rounded-full text-sm">
            Tailwind
          </span>

        </div>

        <a
          href="https://github.com/achira-sadharanga"
          target="_blank"
          className="inline-block mt-8 bg-cyan-500 hover:bg-cyan-400 px-6 py-3 rounded-full font-semibold transition duration-300"
        >

          View Project

        </a>

      </motion.div>

    </div>

  </div>

</section>

{/* GITHUB STATS SECTION */}

<section
  className="bg-gradient-to-b from-gray-950 to-black text-white px-6 py-24"
>

  <div className="max-w-7xl mx-auto">

    <motion.h2
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-5xl font-bold text-center mb-20"
    >

      Developer <span className="text-cyan-400">Analytics</span>

    </motion.h2>

    {/* STATS GRID */}

    <div className="grid md:grid-cols-3 gap-8">

      {/* CARD 1 */}

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.03 }}
        className="bg-white/5 border border-gray-800 rounded-3xl p-8 backdrop-blur-lg text-center"
      >

        <h1 className="text-6xl font-bold text-cyan-400">
          20+
        </h1>

        <p className="mt-6 text-gray-300 text-lg">
          GitHub Repositories
        </p>

      </motion.div>

      {/* CARD 2 */}

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        whileHover={{ scale: 1.03 }}
        className="bg-white/5 border border-gray-800 rounded-3xl p-8 backdrop-blur-lg text-center"
      >

        <h1 className="text-6xl font-bold text-cyan-400">
          100+
        </h1>

        <p className="mt-6 text-gray-300 text-lg">
          Coding Hours
        </p>

      </motion.div>

      {/* CARD 3 */}

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4 }}
        whileHover={{ scale: 1.03 }}
        className="bg-white/5 border border-gray-800 rounded-3xl p-8 backdrop-blur-lg text-center"
      >

        <h1 className="text-6xl font-bold text-cyan-400">
          15+
        </h1>

        <p className="mt-6 text-gray-300 text-lg">
          Technical Projects
        </p>

      </motion.div>

    </div>

    {/* GITHUB CARDS */}

    <div className="grid md:grid-cols-2 gap-10 mt-16">

      {/* GITHUB STATS */}

      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="bg-white/5 border border-gray-800 rounded-3xl p-8 backdrop-blur-lg"
      >

        <h3 className="text-3xl font-bold text-cyan-400 mb-8">

          GitHub Profile

        </h3>

        <img
          src="https://github-readme-stats.vercel.app/api?username=achira-sadharanga&show_icons=true&theme=tokyonight"
          alt="GitHub Stats"
          className="w-full rounded-2xl"
        />

      </motion.div>

      {/* STREAK */}

      <motion.div
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="bg-white/5 border border-gray-800 rounded-3xl p-8 backdrop-blur-lg"
      >

        <h3 className="text-3xl font-bold text-cyan-400 mb-8">

          Contribution Streak

        </h3>

        <img
          src="https://streak-stats.demolab.com?user=achira-sadharanga&theme=tokyonight"
          alt="GitHub Streak"
          className="w-full rounded-2xl"
        />

      </motion.div>

    </div>

  </div>

</section>

{/* CONTACT SECTION */}

<section
  id="contact"
  className="bg-black text-white px-6 py-24"
>

  <div className="max-w-7xl mx-auto">

    <motion.h2
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-5xl font-bold text-center mb-20"
    >

      Contact <span className="text-cyan-400">Me</span>

    </motion.h2>

    <div className="grid md:grid-cols-2 gap-16">

      {/* LEFT SIDE */}

      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >

        <h3 className="text-4xl font-bold mb-8">

          Let’s Build Something Amazing

        </h3>

        <p className="text-gray-400 text-lg leading-8">

          Interested in collaboration, projects,
          leadership opportunities, or technology discussions?
          Feel free to contact me anytime.

        </p>

        {/* CONTACT CARDS */}

        <div className="mt-10 space-y-6">

          <div className="bg-white/5 border border-gray-800 rounded-2xl p-6">

            <h4 className="text-cyan-400 text-xl font-semibold">
              Email
            </h4>

            <p className="mt-2 text-gray-300">
              achira2358@gmail.com
            </p>

          </div>

          <div className="bg-white/5 border border-gray-800 rounded-2xl p-6">

            <h4 className="text-cyan-400 text-xl font-semibold">
              Phone
            </h4>

            <p className="mt-2 text-gray-300">
              +94 713104445
            </p>

          </div>

          <div className="bg-white/5 border border-gray-800 rounded-2xl p-6">

            <h4 className="text-cyan-400 text-xl font-semibold">
              GitHub
            </h4>

            <a
              href="https://github.com/achira-sadharanga"
              target="_blank"
              className="mt-2 block text-gray-300 hover:text-cyan-400"
            >

              github.com/achira-sadharanga

            </a>

          </div>

        </div>

      </motion.div>

      {/* RIGHT SIDE */}

      <motion.form
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="bg-white/5 border border-gray-800 rounded-3xl p-10 backdrop-blur-lg space-y-6"
      >

        <input
          type="text"
          placeholder="Your Name"
          className="w-full bg-black/40 border border-gray-700 rounded-xl px-5 py-4 outline-none focus:border-cyan-400"
        />

        <input
          type="email"
          placeholder="Your Email"
          className="w-full bg-black/40 border border-gray-700 rounded-xl px-5 py-4 outline-none focus:border-cyan-400"
        />

        <textarea
          rows={6}
          placeholder="Your Message"
          className="w-full bg-black/40 border border-gray-700 rounded-xl px-5 py-4 outline-none focus:border-cyan-400"
        />

        <button
          type="submit"
          className="w-full bg-cyan-500 hover:bg-cyan-400 py-4 rounded-xl text-lg font-semibold transition duration-300"
        >

          Send Message

        </button>

      </motion.form>

    </div>

    {/* FOOTER */}

    <div className="border-t border-gray-800 mt-24 pt-10 text-center">

      <h3 className="text-2xl font-bold text-cyan-400">
        Achira.dev
      </h3>

      <p className="mt-4 text-gray-500">

        Data Science Undergraduate | Future AI Engineer

      </p>

      <div className="flex justify-center gap-8 mt-8 text-gray-400">

        <a
          href="#home"
          className="hover:text-cyan-400"
        >
          Home
        </a>

        <a
          href="#about"
          className="hover:text-cyan-400"
        >
          About
        </a>

        <a
          href="#skills"
          className="hover:text-cyan-400"
        >
          Skills
        </a>

        <a
          href="#projects"
          className="hover:text-cyan-400"
        >
          Projects
        </a>

        <a
          href="#contact"
          className="hover:text-cyan-400"
        >
          Contact
        </a>

      </div>

      <p className="mt-8 text-gray-600">

        © 2026 Achira Sadharanga. All Rights Reserved.

      </p>

    </div>

  </div>

</section>

    </main>
  );
}
