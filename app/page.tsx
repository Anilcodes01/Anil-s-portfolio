'use client';
import { motion } from "framer-motion";
import Image from "next/image";
import About from "./components/about";
import TechStack from "./components/Techstack";
import Projects from "./components/fullProject";
import Contact from "./components/contact";
import { useRef, useState, useEffect } from "react";

export default function Home() {
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const scrollToProjects = () => {
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.2, duration: 0.6, ease: "easeOut" }
    })
  };

 

  useEffect(() => {
    const storedMode = localStorage.getItem('darkMode');
    if (storedMode === 'true') {
      setIsDarkMode(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', isDarkMode.toString());
  }, [isDarkMode]);

  return (
    <div className={`min-h-screen   flex justify-center items-center lg:p-10  md:p-10 ${isDarkMode ? 'bg-gray-900 text-white' : ' text-black'}`}>
      <div className="flex flex-col max-w-screen-md mx-auto">
       
     
        
        <motion.div
          className="flex gap-4 justify-between items-center"
          custom={0}
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="flex flex-col   pl-3 lg:text-left">
            <div className="lg:text-6xl md:text-6xl  text-xl font-bold">Hi, I&apos;m Anil 👋</div>
            <div className={` ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} lg:text-md  md:text-md mt-1`}>
              I&apos;m a self-taught full stack developer, proficient in building fullstack web apps.
            </div>
          </div>
          <div>
            <Image
              src="/1704534290885-modified.png"
              alt="Anil's photo"
              width={140}
              height={140}
              className="rounded-full p-1 border"
            />
          </div>
        </motion.div>

       

        <motion.div
          className="mt-4"
          custom={1}
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <About isDarkMode={isDarkMode} onProjectsClick={scrollToProjects} />
        </motion.div>

        <motion.div
          className="mt-6"
          custom={2}
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <TechStack isDarkMode={isDarkMode} />
        </motion.div>

        <motion.div
          className="mt-6"
          custom={3}
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          ref={projectsRef}
        >
          <Projects isDarkMode={isDarkMode} />
        </motion.div>

        <motion.div
          className="mt-6"
          custom={4}
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <Contact isDarkMode={isDarkMode}/>
        </motion.div>
      </div>
    </div>
  );
}
