import { Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import { FaXTwitter } from "react-icons/fa6";
import { FaMediumM } from "react-icons/fa";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "ReactJS",
  "NextJS",
  "PostgreSQL",
  "Prisma",
  "Supabase",
  "MongoDB",
  "NodeJS",
  "ExpressJS",
  "TailwindCSS",
  "Git/Github",
  "Vite",
  "VScode",
];

export default function PersonalInfoCard() {
  return (
    <div className="bg-[#333a40] font-nunito h-[92vh] text-white p-5 rounded-3xl">
      <div className="flex flex-col">
        <div className="flex  justify-between">
          <div className="flex flex-col gap-2">
            <Image
              src="/me.jpeg"
              alt="me"
              width={200}
              height={200}
              className="rounded-3xl h-36 w-36"
            />
            <h1 className="text-3xl  mt-2 font-bold">Anil Pal</h1>
          </div>
          <div className="flex flex-col font-bold mt-2 gap-2">
            <div className="flex items-center hover:text-gray-400 gap-2">
              <Mail size={16} className="hover:text-gray-400" />
              <p className="hover:text-gray-400 cursor-pointer">
                anilcodes01@gmail.com
              </p>
            </div>
            <div className="flex items-center hover:text-gray-400 gap-2">
              <FaXTwitter size={16} className="hover:text-gray-400" />
              <p className="hover:text-gray-400 cursor-pointer">
                Anilcodes01@X
              </p>
            </div>
            <div className="flex items-center hover:text-gray-400 gap-2">
              <Linkedin size={16} className="hover:text-gray-400" />
              <p className="hover:text-gray-400 cursor-pointer">
                anil@linkedIn
              </p>
            </div>
            <div className="flex items-center hover:text-gray-400 gap-2">
              <FaMediumM size={16} className="hover:text-gray-400" />
              <p className="hover:text-gray-400 cursor-pointer">
                Mediumanil@codes
              </p>
            </div>
            <div className="flex items-center hover:text-gray-400 gap-2">
              <Github size={16} className="hover:text-gray-400" />
              <p className="hover:text-gray-400 cursor-pointer">
                Anilcodes01@github
              </p>
            </div>
          </div>
        </div>
        <div>
          <p className="mt-4 font-bold text-base">
            Prominient American Businessman and the co-founder of Apple.Inc.,
            also known as the founder of NeXT and chairman of Pixar
          </p>
        </div>
        <div className="mt-8">
        
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className=" text-sm font-bold px-3 py-1 rounded-lg border border-white"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
