export default function TechStack({ isDarkMode }: { isDarkMode: boolean }) {
  const techStack = [
    'HTML', 'CSS', 'JavaScript', 'Typescript', 'React JS', 'Next Js', 'Tailwind CSS', 'NodeJs', 'Express Js', 'Mongo DB', 'PostgreSQL', 'Git/GitHub', 'Vite', 'VS code'
  ];

  return (
    <div className={`p-4 ${isDarkMode ? ' text-white' : 'bg-white text-black'}`}>
      <div className="text-lg font-semibold">TechStack</div>
      <div className="flex flex-wrap gap-2">
        {techStack.map((tech) => (
          <span 
            key={tech}
            className={`py-1 px-2 text-sm ${isDarkMode ? 'bg-gray-700 text-gray-400' : 'bg-slate-100 text-gray-600'} rounded-full`}
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
