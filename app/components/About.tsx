  'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaInfoCircle, FaLightbulb, FaIdCard, FaCalendarAlt, FaMapMarkerAlt, FaPhone, FaEnvelope, FaUniversity, FaGraduationCap } from 'react-icons/fa';

export default function About() {
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
      id="about"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="min-h-screen w-screen flex flex-col justify-center items-center bg-white text-black dark:bg-gray-900 dark:text-white px-6 py-16"
    >
      <div className="max-w-6xl w-full">
        <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-12 text-center">
          About Me
        </motion.h2>
        <motion.div variants={itemVariants} className="flex flex-col md:flex-row md:space-x-12">
          {/* Left: Portrait Image */}
          <motion.div variants={itemVariants} className="flex-shrink-0 mb-8 md:mb-0 md:w-1/3 flex justify-center">
            <motion.img
              variants={itemVariants}
              src="/p.jpg"
              alt="Portrait"
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </motion.div>

          {/* Right: Info Sections */}
          <motion.div variants={itemVariants} className="md:w-2/3 space-y-8">
            {/* Who Am I and My Approach */}
            <motion.div variants={itemVariants} className="flex flex-col md:flex-row md:space-x-12">
              <motion.div variants={itemVariants} className="flex items-start space-x-4 md:w-1/2">
                <motion.div variants={itemVariants} className="bg-white text-black dark:bg-gray-800 dark:text-white rounded p-3 flex items-center justify-center">
                  <FaInfoCircle size={24} />
                </motion.div>
                <div>
                  <motion.h3 variants={itemVariants} className="text-xl font-semibold mb-2">Who Am I</motion.h3>
                  <motion.p variants={itemVariants}>
                   Programmer muda, wkwk lol
                  </motion.p>
                </div>
              </motion.div>
              <motion.div variants={itemVariants} className="flex items-start space-x-4 md:w-1/2 mt-8 md:mt-0">
                <motion.div variants={itemVariants} className="bg-white text-black dark:bg-gray-800 dark:text-white rounded p-3 flex items-center justify-center">
                  <FaLightbulb size={24} />
                </motion.div>
                <div>
                  <motion.h3 variants={itemVariants} className="text-xl font-semibold mb-2">My Approach</motion.h3>
                  <motion.p variants={itemVariants}>
                  sek ya mikir
                  </motion.p>
                </div>
              </motion.div>
            </motion.div>

        
            <motion.div variants={itemVariants}>
              <motion.h3 variants={itemVariants} className="text-2xl font-bold mb-6 flex items-center space-x-3">
                <FaInfoCircle size={28} />
                <span>Personal Info</span>
              </motion.h3>
              <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4">
                <motion.div variants={itemVariants} className="flex items-center space-x-4">
                  <motion.div variants={itemVariants} className="bg-white text-black dark:bg-gray-800 dark:text-white rounded p-3 flex items-center justify-center">
                    <FaIdCard size={20} />
                  </motion.div>
                  <div>
                    <motion.p variants={itemVariants}><strong>Name:</strong> Yehezkiel Ragil Abdi Hamasiah</motion.p>
                  </div>
                </motion.div>
                <motion.div variants={itemVariants} className="flex items-center space-x-4">
                  <motion.div variants={itemVariants} className="bg-white text-black dark:bg-gray-800 dark:text-white rounded p-3 flex items-center justify-center">
                    <FaCalendarAlt size={20} />
                  </motion.div>
                  <div>
                    <motion.p variants={itemVariants}><strong>Date of Birth:</strong> February 17, 2009</motion.p>
                  </div>
                </motion.div>
                <motion.div variants={itemVariants} className="flex items-center space-x-4">
                  <motion.div variants={itemVariants} className="bg-white text-black dark:bg-gray-800 dark:text-white rounded p-3 flex items-center justify-center">
                    <FaMapMarkerAlt size={20} />
                  </motion.div>
                  <div>
                    <motion.p variants={itemVariants}><strong>Place of Birth:</strong> Malang, Jawa Timur, Indonesia</motion.p>
                  </div>
                </motion.div>
                <motion.div variants={itemVariants} className="flex items-center space-x-4">
                  <motion.div variants={itemVariants} className="bg-white text-black dark:bg-gray-800 dark:text-white rounded p-3 flex items-center justify-center">
                    <FaEnvelope size={20} />
                  </motion.div>
                  <div>
                    <motion.p variants={itemVariants}><strong>Email:</strong> yehezkielragil32@gmail.com</motion.p>
                  </div>
                </motion.div>
                <motion.div variants={itemVariants} className="flex items-center space-x-4">
                  <motion.div variants={itemVariants} className="bg-white text-black dark:bg-gray-800 dark:text-white rounded p-3 flex items-center justify-center">
                    <FaPhone size={20} />
                  </motion.div>
                  <div>
                    <motion.p variants={itemVariants}><strong>Phone:</strong> +62895-0932-7150</motion.p>
                  </div>
                </motion.div>
                <motion.div variants={itemVariants} className="flex items-center space-x-4">
                  <motion.div variants={itemVariants} className="bg-white text-black dark:bg-gray-800 dark:text-white rounded p-3 flex items-center justify-center">
                    <FaUniversity size={20} />
                  </motion.div>
                  <div>
                    <motion.p variants={itemVariants}><strong>Education:</strong> SMK Negeri 8 Malang</motion.p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
