'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaThLarge, FaDesktop, FaServer, FaCode, FaCheckCircle } from 'react-icons/fa';

interface ProjectsProps {
}

type Project = {
  id: number;
  name: string;
  category: 'Frontend' | 'Backend' | 'Fullstack';
  year: number;
  status: string;
  features: string[];
  techStack: string[];
  demoLink: string;
  codeLink: string;
};

const projects: Project[] = [
  {
    id: 1,
    name: 'Personal Portfolio',
    category: 'Frontend',
    year: 2025,
    status: 'Tipis',
    features: [
      'Tailwind CSS',
      'Animated',
      'Project & skills showcase',
    ],
    techStack: ['React', 'Tailwind'],
    demoLink: '#',
    codeLink: '#',
  },
  {
    id: 2,
    name: 'Backend API',
    category: 'Backend',
    year: 2025,
    status: 'Tipis',
    features: [
      'Database',
    ],
    techStack: ['Supabase', 'MariaDB', 'MySql'],
    demoLink: '#',
    codeLink: '#',
  },
  {
    id: 3,
    name: 'Fullstack',
    category: 'Fullstack',
    year: 2025,
    status: 'Belum Bisa',
    features: [
      'Sistem Perpustakaan Sekolah',
    ],
    techStack: ['Next.js', 'React', 'Node.js', 'Supabase'],
    demoLink: '#',
    codeLink: '#',
  },
];

const categories = [
  { key: 'All', label: 'All Projects' },
  { key: 'Frontend', label: 'Frontend' },
  { key: 'Backend', label: 'Backend' },
  { key: 'Fullstack', label: 'Fullstack' },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1});
  const [selectedCategory, setSelectedCategory] = useState('All');

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.1} }
  };

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <motion.section
      id="projects"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="min-h-screen w-screen flex flex-col justify-center items-center bg-white text-black dark:bg-gray-900 dark:text-white px-6 py-16"
    >
      <div className="max-w-6xl w-full">
        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold text-center mb-12"
        >
          Projects
        </motion.h2>

        {/* Filter Bar */}
        <motion.div variants={itemVariants} className="flex justify-center mb-8 space-x-4">
          {categories.map(({ key, label }) => (
            <motion.button
              key={key}
              variants={itemVariants}
              onClick={() => setSelectedCategory(key)}
              className={`px-4 py-2 rounded-md border transition-colors duration-300 ${
                selectedCategory === key
                  ? 'bg-black text-white dark:bg-white dark:text-black border-black dark:border-white'
                  : 'border-black text-black dark:border-white dark:text-white'
              }`}
            >
              {label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="border border-black dark:border-white rounded-md p-6 flex flex-col justify-between opacity-90 hover:opacity-100 hover:scale-102 transform transition-all duration-300"
            >
              <div className="mb-4">
                <h3 className="text-xl font-semibold">{project.name}</h3>
                <p className="text-sm text-gray-400">
                  {project.category} • {project.year} • {project.status}
                </p>
              </div>

              <div className="mb-4">
                <p className="font-semibold mb-2">Features:</p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  {project.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="mb-4">
                <p className="font-semibold mb-2">Tech Stack:</p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex space-x-4">
                <motion.a
                  variants={itemVariants}
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-black text-white dark:bg-white dark:text-black rounded-md py-2 text-center hover:bg-gray-800 dark:hover:bg-gray-200 opacity-90 hover:opacity-100 hover:scale-102 transition-all duration-300"
                >
                  Demo
                </motion.a>
                <motion.a
                  variants={itemVariants}
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 border border-black dark:border-white rounded-md py-2 text-center hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black opacity-90 hover:opacity-100 hover:scale-102 transition-all duration-300"
                >
                  Code
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
