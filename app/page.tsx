import AboutComp from "./components/AboutComp";
import NavigationButtons from "./components/NavigationButtons";

export default function Home() {
  return (
    <div className=" bg-[#1e1e1f]  flex flex-col gap-16 ">
     
      <div className="mt-4 ">
        <AboutComp />
      </div>
    
    </div>
  );
}
