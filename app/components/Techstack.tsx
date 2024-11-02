

export default function TechStack() {

    const techStack = [
       'HTML', 'CSS', 'Javascript',  'Typescript', 'React JS', 'Next Js', 'Tailwind CSS',   'NodeJs', 'Express Js', 'Mongo DB', 'PostgreSQL', 'Git/GitHub', 'Vite', 'VS code'
    ]

    return <div>
        <div className="text-lg font-semibold">
            TechStack
        </div>
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <span 
            key={tech}
            className=" py-1 px-2 text-sm bg-slate-100 rounded-full">
                {tech}
            </span>
          ))}
        </div>
    </div>
}