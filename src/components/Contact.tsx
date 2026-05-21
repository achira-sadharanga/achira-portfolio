"use client";

import { motion } from "framer-motion";
import {
  FaGithub,
  FaFacebook,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-black text-white px-6 py-24"
    >

      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
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

            <h3 className="text-3xl font-bold mb-8">
              Let’s Build Something Amazing
            </h3>

            <p className="text-gray-400 text-lg leading-8">
              Interested in collaboration, projects, leadership opportunities,
              or technology discussions? Feel free to contact me.
            </p>

            <div className="mt-10 space-y-6">

              <div className="flex items-center gap-4">
                <FaEnvelope className="text-cyan-400 text-2xl" />
                <span className="text-lg">
                  achira2358@gmail.com
                </span>
              </div>

              <div className="flex items-center gap-4">
                <FaPhone className="text-cyan-400 text-2xl" />
                <span className="text-lg">
                  +94 713104445
                </span>
              </div>

            </div>

            <div className="flex gap-6 mt-10 text-3xl">

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

          </motion.div>

          {/* RIGHT SIDE */}
          <motion.form
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="bg-white/5 border border-gray-800 backdrop-blur-lg rounded-3xl p-10 space-y-6"
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
        <div className="border-t border-gray-800 mt-24 pt-10 text-center text-gray-500">

          <p>
            © 2026 Achira Sadharanga. All Rights Reserved.
          </p>

        </div>

      </div>

    </section>
  );
}