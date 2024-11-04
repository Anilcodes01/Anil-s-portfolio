import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  liveUrl: string;
  repoUrl: string;
  isDarkMode: boolean; // New prop
}

export default function ProjectCard({
  title,
  description,
  image,
  techStack,
  liveUrl,
  repoUrl,
  isDarkMode
}: ProjectCardProps) {
  return (
    <div className={`max-w-md p-5 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'} rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200`}>
      <div className="relative h-40 w-full mb-4">
        <Image
          src={image}
          alt={`${title} image`}
          layout='fill'
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {techStack.map((tech) => (
          <span 
            key={tech} 
            className={`px-3 py-1 ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-100'} text-black text-xs font-medium rounded-full`}
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex justify-between items-center">
        <a 
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 font-medium text-sm hover:underline"
        >
          Live Demo
        </a>
        <a 
          href={repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 font-medium text-sm hover:underline"
        >
          GitHub Repo
        </a>
      </div>
    </div>
  );
}
