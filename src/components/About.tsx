"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white px-6 py-24"
    >

      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold text-center mb-20"
        >
          About <span className="text-cyan-400">Me</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="bg-white/5 border border-gray-800 backdrop-blur-lg rounded-3xl p-10 shadow-2xl"
          >

            <h3 className="text-3xl font-bold mb-6 text-cyan-400">
              Who Am I?
            </h3>

            <p className="text-gray-300 leading-8 text-lg">
              I am a passionate Data Science undergraduate at SLTC Research
              University with interests in Artificial Intelligence, software
              engineering, cybersecurity, and digital innovation.
            </p>

            <p className="text-gray-300 leading-8 text-lg mt-6">
              Alongside academics, I actively engage in leadership, university
              organizations, and technical communities including IEEE, Leo Club,
              and Media Unit activities.
            </p>

            <p className="text-gray-300 leading-8 text-lg mt-6">
              I enjoy building impactful technology solutions while continuously
              improving my technical, leadership, and communication skills.
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
              <h1 className="text-5xl font-bold text-cyan-400">2+</h1>
              <p className="mt-4 text-gray-300">Years Learning Tech</p>
            </div>

            <div className="bg-white/5 border border-gray-700 rounded-3xl p-8 text-center">
              <h1 className="text-5xl font-bold text-cyan-400">10+</h1>
              <p className="mt-4 text-gray-300">Certifications</p>
            </div>

            <div className="bg-white/5 border border-gray-700 rounded-3xl p-8 text-center">
              <h1 className="text-5xl font-bold text-cyan-400">5+</h1>
              <p className="mt-4 text-gray-300">Leadership Roles</p>
            </div>

            <div className="bg-cyan-500/10 border border-cyan-500 rounded-3xl p-8 text-center">
              <h1 className="text-5xl font-bold text-cyan-400">100%</h1>
              <p className="mt-4 text-gray-300">Passion & Dedication</p>
            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}