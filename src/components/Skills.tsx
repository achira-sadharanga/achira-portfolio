"use client";

import { motion } from "framer-motion";
import {
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGithub,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiMysql,
  SiNextdotjs,
} from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "Python", level: "90%" },
    { name: "HTML / CSS", level: "95%" },
    { name: "JavaScript", level: "80%" },
    { name: "React / Next.js", level: "75%" },
    { name: "MySQL", level: "70%" },
    { name: "GitHub", level: "85%" },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen bg-black text-white px-6 py-24"
    >

      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold text-center mb-20"
        >
          My <span className="text-cyan-400">Skills</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE */}
          <div className="space-y-8">

            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >

                <div className="flex justify-between mb-2">
                  <h3 className="text-lg font-semibold">{skill.name}</h3>
                  <span className="text-cyan-400">{skill.level}</span>
                </div>

                <div className="w-full bg-gray-800 rounded-full h-3">

                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: skill.level }}
                    transition={{ duration: 1.5 }}
                    className="bg-cyan-400 h-3 rounded-full"
                  />

                </div>

              </motion.div>
            ))}

          </div>

          {/* RIGHT SIDE */}
          <div className="grid grid-cols-2 gap-6">

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 border border-gray-700 rounded-3xl p-8 text-center backdrop-blur-lg"
            >
              <FaPython className="text-6xl mx-auto text-cyan-400" />
              <h3 className="mt-6 text-xl font-semibold">Python</h3>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 border border-gray-700 rounded-3xl p-8 text-center backdrop-blur-lg"
            >
              <FaHtml5 className="text-6xl mx-auto text-cyan-400" />
              <h3 className="mt-6 text-xl font-semibold">HTML5</h3>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 border border-gray-700 rounded-3xl p-8 text-center backdrop-blur-lg"
            >
              <FaReact className="text-6xl mx-auto text-cyan-400" />
              <h3 className="mt-6 text-xl font-semibold">React</h3>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 border border-gray-700 rounded-3xl p-8 text-center backdrop-blur-lg"
            >
              <SiNextdotjs className="text-6xl mx-auto text-cyan-400" />
              <h3 className="mt-6 text-xl font-semibold">Next.js</h3>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 border border-gray-700 rounded-3xl p-8 text-center backdrop-blur-lg"
            >
              <SiMysql className="text-6xl mx-auto text-cyan-400" />
              <h3 className="mt-6 text-xl font-semibold">MySQL</h3>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 border border-gray-700 rounded-3xl p-8 text-center backdrop-blur-lg"
            >
              <FaGithub className="text-6xl mx-auto text-cyan-400" />
              <h3 className="mt-6 text-xl font-semibold">GitHub</h3>
            </motion.div>

          </div>

        </div>

      </div>

    </section>
  );
}