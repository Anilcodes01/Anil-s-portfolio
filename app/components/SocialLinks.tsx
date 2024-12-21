import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import { FolderKanban } from "lucide-react";
import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/app/components/ui/tooltip";

type SocialProps = {
  onProjectsClick: () => void;
  isDarkMode: boolean;
};

const SocialLinks = ({ isDarkMode, onProjectsClick }: SocialProps) => {
  // Handle email click
  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open("mailto:anilcodes01@gmail.com", "_blank");
  };

  return (
    <motion.div
      className="mt-6 flex flex-wrap items-center gap-4  pl-3"
      custom={1}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0, y: -20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: "easeOut" },
        },
      }}
    >
      <div className="flex gap-4">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <a
                href="https://github.com/Anilcodes01"
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-transform hover:scale-110 ${
                  isDarkMode
                    ? "text-gray-300 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                <FaGithub className="w-6 h-6" />
              </a>
            </TooltipTrigger>
            <TooltipContent>
              <p>GitHub</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <a
                href="https://www.linkedin.com/in/anil-pal-532b692a6/"
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-transform hover:scale-110 ${
                  isDarkMode
                    ? "text-gray-300 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
            </TooltipTrigger>
            <TooltipContent>
              <p>LinkedIn</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <a
                href="https://x.com/Anilcodes01"
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-transform hover:scale-110 ${
                  isDarkMode
                    ? "text-gray-300 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                <FaTwitter className="w-6 h-6" />
              </a>
            </TooltipTrigger>
            <TooltipContent>
              <p>Twitter</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <button
                onClick={handleEmailClick}
                className={`transition-transform hover:scale-110 ${
                  isDarkMode
                    ? "text-gray-300 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
                aria-label="Send email"
              >
                <FaEnvelope className="w-6 h-6" />
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Email</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <a
                href="/Anil Pal resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center transition-transform hover:scale-110 ${
                  isDarkMode
                    ? "text-gray-300 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                <FileText className="w-6 h-6" />
              </a>
            </TooltipTrigger>
            <TooltipContent>
              <p>Resume</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <button
                onClick={onProjectsClick}
                className={`flex items-center gap-2   rounded-lg transition-all hover:scale-105 ${
                  isDarkMode
                    ? "text-gray-300 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                <FolderKanban className="w-6 h-6" />
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Projects</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </motion.div>
  );
};

export default SocialLinks;
