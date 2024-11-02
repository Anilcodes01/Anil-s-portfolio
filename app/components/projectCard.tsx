import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  liveUrl: string;
  repoUrl: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  techStack,
  liveUrl,
  repoUrl
}: ProjectCardProps) {
  return (
    <div className="max-w-md p-5 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
     
      <div className="relative h-40 w-full mb-4">
        <Image
          src={image}
          alt={`${title} image`}
         layout='fill'
          objectFit="cover"
          className="rounded-lg"
        />
      </div>

    
      <h3 className="text-xl font-semibold text-gray-800 mb-2">
        {title}
      </h3>

      
      <p className="text-gray-600 text-sm mb-4">
        {description}
      </p>

      
      <div className="flex flex-wrap gap-2 mb-4">
        {techStack.map((tech) => (
          <span 
            key={tech} 
            className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
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
