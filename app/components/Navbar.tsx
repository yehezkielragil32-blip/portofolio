'use client';

import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 shadow-lg bg-[#1e2a44] text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-bold">Portofolio Website </h1>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('hero')} className="transition-colors px-3 py-1 rounded hover:bg-black hover:text-white">Home</button>
            <button onClick={() => scrollToSection('about')} className="transition-colors px-3 py-1 rounded hover:bg-black hover:text-white">About</button>
            <button onClick={() => scrollToSection('skills')} className="transition-colors px-3 py-1 rounded hover:bg-black hover:text-white">Skills</button>
            <button onClick={() => scrollToSection('projects')} className="transition-colors px-3 py-1 rounded hover:bg-black hover:text-white">Projects</button>
            <button onClick={() => scrollToSection('contact')} className="transition-colors px-3 py-1 rounded hover:bg-black hover:text-white">Contact</button>
          </div>
          <div className="md:hidden flex items-center space-x-4">
            <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none text-black">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
              <button onClick={() => scrollToSection('hero')} className="block px-3 py-2 w-full text-left rounded transition-colors text-black hover:bg-black hover:text-white">Home</button>
              <button onClick={() => scrollToSection('about')} className="block px-3 py-2 w-full text-left rounded transition-colors text-black hover:bg-black hover:text-white">About</button>
              <button onClick={() => scrollToSection('skills')} className="block px-3 py-2 w-full text-left rounded transition-colors text-black hover:bg-black hover:text-white">Skills</button>
              <button onClick={() => scrollToSection('projects')} className="block px-3 py-2 w-full text-left rounded transition-colors text-black hover:bg-black hover:text-white">Projects</button>
              <button onClick={() => scrollToSection('contact')} className="block px-3 py-2 w-full text-left rounded transition-colors text-black hover:bg-black hover:text-white">Contact</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
