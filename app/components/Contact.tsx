'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaGithub, FaInstagram, FaTwitter, FaArrowRight } from 'react-icons/fa';

interface ContactProps {
}

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <motion.section
      id="contact"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="min-h-screen w-screen flex flex-col justify-center items-center bg-[#1e2a44] text-white px-6 py-16"
    >
      <div className="max-w-6xl w-full">
        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
        >
          Contact Me
        </motion.h2>
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left: Contact Links */}
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.a
              variants={itemVariants}
              href="https://github.com/yehezkielragil32-blip"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between border border-white rounded-md p-4 hover:bg-white hover:text-[#1e2a44] transition opacity-90 hover:opacity-100 hover:scale-102 transform transition-all duration-300"
            >
              <div className="flex items-center space-x-4">
                <div className="bg-white text-[#1e2a44] rounded p-3 flex items-center justify-center">
                  <FaGithub size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">GitHub</h3>
                  <p className="text-sm text-gray-300">Explore my code & projects</p>
                </div>
              </div>
              <FaArrowRight />
            </motion.a>
            <motion.a
              variants={itemVariants}
              href="https://www.instagram.com/kkiellrh/?__pwa=1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between border border-white rounded-md p-4 hover:bg-white hover:text-[#1e2a44] transition opacity-90 hover:opacity-100 hover:scale-102 transform transition-all duration-300"
            >
              <div className="flex items-center space-x-4">
                <div className="bg-white text-[#1e2a44] rounded p-3 flex items-center justify-center">
                  <FaInstagram size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Instagram</h3>
                  <p className="text-sm text-gray-300">My life updates</p>
                </div>
              </div>
              <FaArrowRight />
            </motion.a>
            <motion.a
              variants={itemVariants}
              href="https://x.com/ejodksbskso"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between border border-white rounded-md p-4 hover:bg-white hover:text-[#1e2a44] transition opacity-90 hover:opacity-100 hover:scale-102 transform transition-all duration-300"
            >
              <div className="flex items-center space-x-4">
                <div className="bg-white text-[#1e2a44] rounded p-3 flex items-center justify-center">
                  <FaTwitter size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Twitter</h3>
                  <p className="text-sm text-gray-300">Random thoughts</p>
                </div>
              </div>
              <FaArrowRight />
            </motion.a>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.form variants={itemVariants} className="bg-[#2a3a5a] rounded-md p-6 flex flex-col space-y-4">
            <motion.h3 variants={itemVariants} className="text-xl font-semibold mb-4 text-white">Send Me a Message</motion.h3>
            <motion.input
              variants={itemVariants}
              type="text"
              placeholder="Your Name"
              className="rounded-md p-3 text-white bg-[#1e2a44] placeholder-gray-400"
              required
            />
            <motion.input
              variants={itemVariants}
              type="email"
              placeholder="Your Email"
              className="rounded-md p-3 text-white bg-[#1e2a44] placeholder-gray-400"
              required
            />
            <motion.textarea
              variants={itemVariants}
              placeholder="Your Message"
              rows={6}
              className="rounded-md p-3 text-white resize-none bg-[#1e2a44] placeholder-gray-400"
              required
            />
            <motion.button
              variants={itemVariants}
              type="submit"
              className="bg-white text-[#1e2a44] rounded-md py-3 font-semibold flex items-center justify-center space-x-2 hover:bg-gray-200 opacity-90 hover:opacity-100 hover:scale-102 transform transition-all duration-300"
            >
              <span>Send</span>
              <FaArrowRight />
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </motion.section>
  );
}
