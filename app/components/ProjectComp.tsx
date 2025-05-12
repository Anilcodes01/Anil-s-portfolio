
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";

export default function ProjectComp() {
  const projects = [
    {
      name: "Pronext - social web app for devs",
      description:
        "ProNext is a social app for developers, where developers can showcase their projects and collaborate with other developers.",
      skillsUsed: [
        "NextJS", "ReactJS", "TypeScript", "TailwindCSS", "Cloudinary",
        "PostgreSQL", "Prisma", "ContextAPI", "Socket.io", "NodeJS",
      ],
      image: "/pronext1.png",
      liveLink: 'https://pro-next-one.vercel.app/',
      githubLink: 'https://github.com/Anilcodes01/ProNext'
    },
    {
      name: "Vein - Personal AI health assistant",
      description:
        "Vein is a personal AI Health assistant speacially focused for tracking and analysing your health reports and highly personal.",
      skillsUsed: [
        "NextJS", "ReactJS", "TailwindCSS", "Cloudinary", "PostgreSQL",
        "Prisma", "ContextAPI", "GoogleGenAI",
      ],
      image: "/vein.png",
      liveLink: 'https://pro-next-one.vercel.app/',
      githubLink: 'https://github.com/Anilcodes01/ProNext'
    },
    {
      name: "Moments - social web app for everyone",
      description:
        "ProNext is a social app for developers, where developers can showcase their projects and collaborate with other developers.",
      skillsUsed: [
        "NextJS", "ReactJS", "TailwindCSS", "Cloudinary", "PostgreSQL",
        "Prisma", "ContextAPI", "GoogleGenAI",
      ],
      image: "/pronext1.png",
      liveLink: 'https://pro-next-one.vercel.app/',
      githubLink: 'https://github.com/Anilcodes01/ProNext'
    },
    {
      name: "Pronext - social web app for devs (Copy 1)",
      description:
        "ProNext is a social app for developers, where developers can showcase their projects and collaborate with other developers.",
      skillsUsed: [
        "NextJS", "ReactJS", "TypeScript", "TailwindCSS", "Cloudinary",
        "PostgreSQL", "Prisma", "ContextAPI", "Socket.io", "NodeJS",
      ],
      image: "/pronext1.png",
      liveLink: 'https://pro-next-one.vercel.app/',
      githubLink: 'https://github.com/Anilcodes01/ProNext'
    },
    {
      name: "Vein - Personal AI health assistant (Copy 1)",
      description:
        "Vein is a personal AI Health assistant speacially focused for tracking and analysing your health reports and highly personal.",
      skillsUsed: [
        "NextJS", "ReactJS", "TailwindCSS", "Cloudinary", "PostgreSQL",
        "Prisma", "ContextAPI", "GoogleGenAI",
      ],
      image: "/vein.png",
      liveLink: 'https://pro-next-one.vercel.app/',
      githubLink: 'https://github.com/Anilcodes01/ProNext'
    },
    {
      name: "Moments - social web app for everyone (Copy 1)",
      description:
        "ProNext is a social app for developers, where developers can showcase their projects and collaborate with other developers.",
      skillsUsed: [
        "NextJS", "ReactJS", "TailwindCSS", "Cloudinary", "PostgreSQL",
        "Prisma", "ContextAPI", "GoogleGenAI",
      ],
      image: "/pronext1.png",
      liveLink: 'https://pro-next-one.vercel.app/',
      githubLink: 'https://github.com/Anilcodes01/ProNext'
    },
  ];

  return (
    <div className="text-white font-nunito font-bold pb-20 h-screen flex flex-col">
      <div className="p-4">
        <h1 className="text-3xl font-bold text-white">Projects</h1>
      </div>

      <div className="flex-1 overflow-y-auto px-4 hide-scrollbar">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-4">
          {projects.map((project, index) => (
            <div key={project.name + index} className="flex gap-4 flex-col p-4 rounded-lg">
              <div className="relative w-full h-48 md:h-56">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover rounded-lg"
                />
              </div>
              <div>
                <span className="text-2xl">{project.name}</span>
                <p className="mt-2 text-gray-300 font-normal">{project.description}</p>
                <div className="mt-4 flex flex-col gap-4">
                  <div className="flex flex-wrap gap-2">
                    {project.skillsUsed.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="bg-green-500 text-black px-3 py-1 rounded text-xs font-normal"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2  hover:text-gray-400 text-gray-100  rounded-lg font-normal transition-colors"
                    >
                      <ExternalLink size={16} />
                      Live Link
                    </a>
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2  text-gray-100 px-4 py-2 rounded-lg font-normal hover:text-gray-400 transition-colors"
                    >
                      <Github size={16} />
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}