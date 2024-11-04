'use client'
import { motion } from "framer-motion";
import Image from "next/image";
import About from "./components/about";
import TechStack from "./components/Techstack";
import Projects from "./components/fullProject";
import Contact from "./components/contact";
import { useRef } from "react";

export default function Home() {
  const projectsRef = useRef<HTMLDivElement | null>(null);

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

  return (
    <div className="bg-gray-50 min-h-screen pt-20 flex justify-center items-center lg:p-10 p-4 md:p-10 text-black">
      <div className="flex flex-col max-w-screen-md mx-auto">
        <motion.div
          className="flex gap-4 justify-between items-center"
          custom={0}
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="flex flex-col lg:text-left">
            <div className="lg:text-6xl md:text-6xl text-xl font-bold">Hi, I&apos;m Anil 👋</div>
            <div className="text-gray-600 lg:text-md text-sm md:text-md  mt-1">
              I&apos;m a self-taught full stack developer, proficient in
              building fullstack web apps.
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
          className="mt-16"
          custom={1}
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <About onProjectsClick={scrollToProjects} />
        </motion.div>

        <motion.div
          className="mt-6"
          custom={2}
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <TechStack />
        </motion.div>

        <motion.div
          className="mt-6"
          custom={3}
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          ref={projectsRef}
        >
          <Projects />
        </motion.div>

        <motion.div
          className="mt-6"
          custom={4}
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <Contact />
        </motion.div>
      </div>
    </div>
  );
}
