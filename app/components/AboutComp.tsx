
import Timeline from "./Timeline";

export default function AboutComp() {
  return (
    <div className="flex font-nunito text-white gap-12 font-bold flex-col">
     <div className="flex gap-4  flex-col">
     <h1 className="text-3xl">About</h1>
      <p className="text-gray-400">
        I am a self-taught full-stack developer skilled in building dynamic,
        real-time web applications. With a focus on Next.js, React.js,
        TypeScript, and Postgres, I create responsive and efficient websites. My
        work combines clean code and user-centered design, delivering seamless
        experiences across projects.
      </p>
     </div>
     <div>
        <Timeline />
     </div>
    
    </div>
  );
}
