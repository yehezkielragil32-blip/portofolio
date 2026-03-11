'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';
import { SiHtml5, SiCss3, SiJavascript, SiReact } from 'react-icons/si';

export default function Hero() {
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
      id="hero"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="min-h-screen w-screen flex flex-col md:flex-row justify-center items-center bg-[#1e2a44] text-white px-6 md:px-20 py-12"
    >
      {/* Left Column */}
      <motion.div variants={itemVariants} className="flex-1 text-left space-y-6">
        <motion.span variants={itemVariants} className="text-4xl font-bold block mt-10 mb-6">Yehezkiel Ragil A. H.</motion.span>
        <motion.p variants={itemVariants} className="text-xl max-w-md mb-8">
          I build modern, responsive web apps with clean UI and smooth UX blending design and code to create experiences that feel intuitive, fast, and delightful to use.
        </motion.p>

        {/* Social Icons */}
        <motion.div variants={itemVariants} className="flex space-x-4 mt-4">
          <motion.a
            variants={itemVariants}
            href="https://github.com/yehezkielragil32-blip"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-3 bg-white text-black rounded-full hover:bg-gray-200 transition pop-click hover:opacity-100 opacity-80 hover:scale-110 transform transition-all duration-300"
          >
            <FaGithub size={24} />
          </motion.a>
          <motion.a
            variants={itemVariants}
            href="https://www.instagram.com/kkiellrh/?__pwa=1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="p-3 bg-white text-black rounded-full hover:bg-gray-200 transition pop-click hover:opacity-100 opacity-80 hover:scale-110 transform transition-all duration-300"
          >
            <FaInstagram size={24} />
          </motion.a>
          <motion.a
            variants={itemVariants}
            href="https://x.com/ejodksbskso"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="p-3 bg-white text-black rounded-full hover:bg-gray-200 transition pop-click hover:opacity-100 opacity-80 hover:scale-110 transform transition-all duration-300"
          >
            <FaTwitter size={24} />
          </motion.a>
        </motion.div>

        {/* Buttons */}
        <motion.div variants={itemVariants} className="mt-8 flex space-x-4">
          <motion.a
            variants={itemVariants}
            href="#projects"
            className="flex items-center space-x-2 bg-white text-black px-6 py-3 rounded-md font-semibold hover:bg-gray-200 transition hover:opacity-100 opacity-80 hover:scale-110 transform transition-all duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-6h6v6m-6 0l3-3 3 3" />
            </svg>
            <span>Explore My Project</span>
          </motion.a>
          <motion.a
            variants={itemVariants}
            href="/cv.pdf"
            download
            className="flex items-center space-x-2 border border-black px-6 py-3 rounded-md font-semibold hover:bg-black hover:text-white transition hover:opacity-100 opacity-80 hover:scale-110 transform transition-all duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
            <span>Download My CV</span>
          </motion.a>
        </motion.div>
      </motion.div>

    
      <motion.div variants={itemVariants} className="flex-1 relative flex justify-center items-center mt-12 md:mt-0">
        <motion.div variants={itemVariants} className="relative rounded-full overflow-hidden w-64 h-64 shadow-lg pop-click">
          <img src="/pf.jpg" alt="Profile" className="w-full h-full object-cover" />
        </motion.div>

       
        <motion.div variants={itemVariants} className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg pop-click">
          <SiHtml5 size={24} color="black" />
        </motion.div>
        <motion.div variants={itemVariants} className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg pop-click">
          <SiCss3 size={24} color="black" />
        </motion.div>
        <motion.div variants={itemVariants} className="absolute bottom-0 left-0 transform -translate-x-1/2 translate-y-1/2 bg-white rounded-full p-3 shadow-lg pop-click">
          <SiJavascript size={24} color="black" />
        </motion.div>
        <motion.div variants={itemVariants} className="absolute bottom-0 right-0 transform translate-x-1/2 translate-y-1/2 bg-white rounded-full p-3 shadow-lg pop-click">
          <SiReact size={24} color="black" />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
