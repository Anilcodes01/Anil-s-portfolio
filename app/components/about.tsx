type AboutProps = {
  onProjectsClick: () => void;
  isDarkMode: boolean; 
};

export default function About({ onProjectsClick, isDarkMode }: AboutProps) {
  return (
    <div className={`p-4 ${isDarkMode ? ' text-white' : 'bg-white text-black'}`}>
      <div className="text-lg font-semibold">About</div>
      <p className={`"text-gray-600" ${isDarkMode ? 'text-gray-400': 'text-gray-600'}`}>
        I am a self-taught full-stack developer skilled in building dynamic, real-time web applications. With a focus on Next.js, React.js, TypeScript, and Postgres, I create responsive and efficient websites. My work combines clean code and user-centered design, delivering seamless experiences across projects.{" "}
        <span className="text-blue-500 cursor-pointer" onClick={onProjectsClick}>
          Explore my projects
        </span>.
      </p>
    </div>
  );
}
