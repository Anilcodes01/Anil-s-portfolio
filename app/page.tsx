'use client'
import Image from "next/image";
import About from "./components/about";
import TechStack from "./components/Techstack";
import Projects from "./components/fullProject";
import Contact from "./components/contact";
import { useRef } from "react";

export default function Home() {

  const projectsRef = useRef<HTMLDivElement | null>(null);

  const scrollToProjects = () => {
    if(projectsRef.current) {
      projectsRef.current.scrollIntoView({behavior: "smooth"})
    }
  }


  return (
    <div className="bg-gray-50 min-h-screen pt-20 flex justify-center items-center p-10 text-black">
      <div className="flex flex-col  max-w-screen-md mx-auto">
        <div className="flex gap-4 justify-between items-center">
          <div className="flex flex-col  lg:text-left">
            <div className="text-6xl font-bold">Hi, I&apos;m Anil 👋</div>
            <div className="text-gray-600 mt-1">
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
        </div>

        <div className="mt-16">
          <About onProjectsClick={scrollToProjects} />
        </div>

        <div className="mt-6">
          <TechStack />
        </div>

        <div ref={projectsRef} className="mt-6">
          <Projects />
        </div>

        <div className="mt-6">
          <Contact />
        </div>
      </div>
    </div>
  );
}
