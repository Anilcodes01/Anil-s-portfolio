export default function TechStack({ isDarkMode }: { isDarkMode: boolean }) {
  const techStack = [
    'HTML', 'CSS', 'JavaScript', 'Typescript', 'React JS', 'Next Js', 'Tailwind CSS', 'NodeJs', 'Express Js', 'Mongo DB', 'PostgreSQL', 'Git/GitHub', 'Vite', 'VS code'
  ];

  return (
    <div className={`p-4 ${isDarkMode ? ' text-white' : 'bg-[#fff8f7] text-black'}`}>
      <div className="text-lg font-semibold">TechStack</div>
      <div className="flex flex-wrap gap-2">
        {techStack.map((tech) => (
          <span 
            key={tech}
            className={`py-1 px-2 text-sm ${isDarkMode ? 'bg-white text-gray-400' : 'bg-white text-gray-600'} rounded-full`}
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
