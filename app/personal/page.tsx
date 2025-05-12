import AboutComp from "../components/AboutComp";
import PersonalInfoCard from "../components/PersonalInfo";

export default function PersonalPage() {
  return (
    <div className="p-8 bg-[#1e1e1f] min-h-screen flex gap-16 ">
     
      <div className=" ">
        <AboutComp />
      </div>
    </div>
  );
}
