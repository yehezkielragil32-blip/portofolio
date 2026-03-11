'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiTailwindcss, SiNextdotjs, SiNodedotjs, SiPython, SiGit, SiVite, SiVercel, SiNetlify, SiMongodb, SiGraphql, SiExpress } from 'react-icons/si';
import { FaGithub, FaLock } from 'react-icons/fa';

type Skill = {
  name: string;
  icon: React.ComponentType;
  category: string;
  level: string;
};

const categories = ['Frontend', 'Backend', 'Full Stack', 'Other Tools', 'AI/ML & Tools'];

const skills: Skill[] = [
  { name: 'HTML', icon: SiHtml5, category: 'Frontend', level: 'Learning' },
  { name: 'CSS', icon: SiCss3, category: 'Frontend', level: 'Learning' },
  { name: 'JavaScript', icon: SiJavascript, category: 'Frontend', level: 'Learning' },
  { name: 'React', icon: SiReact, category: 'Frontend', level: 'Advanced' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, category: 'Frontend', level: 'Learning' },
  { name: 'Vite', icon: SiVite, category: 'Frontend', level: 'Learning' },
  { name: 'Node.js', icon: SiNodedotjs, category: 'Backend', level: 'Learning' },
  { name: 'Express.js', icon: SiExpress, category: 'Backend', level: 'Learning' },
  { name: 'MongoDB', icon: SiMongodb, category: 'Backend', level: 'Learning' },
  { name: 'Python', icon: SiPython, category: 'AI/ML & Tools', level: 'Still Learning' },
  { name: 'Git', icon: SiGit, category: 'Other Tools', level: 'Learning' },
  { name: 'GitHub', icon: FaGithub, category: 'Other Tools', level: 'Learning' },
  { name: 'Vercel', icon: SiVercel, category: 'Other Tools', level: 'Learning' },
  { name: 'Netlify', icon: SiNetlify, category: 'Other Tools', level: 'Learning' },
  { name: 'Next.js', icon: SiNextdotjs, category: 'Full Stack', level: 'Learning' },
  { name: 'GraphQL', icon: SiGraphql, category: 'Full Stack', level: 'Learning' },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const [selectedCategory, setSelectedCategory] = useState('Frontend');

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
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const filteredSkills = skills.filter(skill => skill.category === selectedCategory);

  return (
    <motion.section
      id="skills"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="min-h-screen w-screen flex flex-col justify-center items-center bg-[#1e2a44] text-white px-6 py-16"
    >
      <div className="max-w-6xl w-full">
        <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-center mb-12">
          Skills
        </motion.h2>
        <motion.div variants={itemVariants} className="flex justify-center mb-8 space-x-4">
          {categories.map(category => (
            <motion.button
              key={category}
              variants={itemVariants}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-md border ${
                selectedCategory === category
                  ? 'bg-white text-[#1e2a44] border-white'
                  : 'border-white text-white'
              } transition-colors duration-300`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>
        <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {filteredSkills.map((skill) => {
            const Icon = skill.icon as React.ComponentType<{ size?: number }>;
            return (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              className="relative border border-white rounded-md p-6 flex flex-col items-center hover:opacity-100 opacity-80 hover:scale-110 transform transition-all duration-300"
            >
              {skill.name === 'Python' && (
                <motion.div variants={itemVariants} className="absolute top-2 right-2 text-white" title="Skill locked">
                  <FaLock size={20} />
                </motion.div>
              )}
              {skill.name === 'Python' ? (
                <motion.div variants={itemVariants} className="flex flex-col items-center pointer-events-none">
                  <motion.div variants={itemVariants} className="text-white mb-4 filter blur-sm">
                    <Icon size={48} />
                  </motion.div>
                  <motion.p variants={itemVariants} className="text-lg font-semibold">{skill.name}</motion.p>
                  <motion.p variants={itemVariants} className="text-sm text-gray-400">{skill.level}</motion.p>
                </motion.div>
              ) : (
                <>
                  <motion.div variants={itemVariants} className="text-white mb-4">
                    <Icon size={48} />
                  </motion.div>
                  <motion.p variants={itemVariants} className="text-lg font-semibold">{skill.name}</motion.p>
                  <motion.p variants={itemVariants} className="text-sm text-gray-400">{skill.level}</motion.p>
                </>
              )}
            </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
}
