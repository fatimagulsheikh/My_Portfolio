"use client";

import { useEffect } from "react";
// for animate on scroll library
import AOS from "aos";
import "aos/dist/aos.css";

// my components
import { Detail } from "./detail";
import { Sidebar } from "./sidebar";
import MobileCard from "./mobileComponents/card";
import MobileExperience from "./mobileComponents/experience";
import MobileEducation from "./mobileComponents/education";
import MobileSkills from "./mobileComponents/skills";
import MobileProjects from "./mobileComponents/projects";
import MobileContact from "./mobileComponents/contact";


const MainPage = () => {
  // useEffect for AOS
  useEffect(() => {
    AOS.init({
      once: false,
    });
  }, []);

  return (
    <div>
      {/* mobile view */}
      <div className="overflow-x-hidden bg-white h-screen md:hidden">
        {/* card */}
        <MobileCard />
        {/* education */}
        <MobileEducation />
        {/* eperience */}
        <MobileExperience />
        {/* skills */}
        <MobileSkills />
        {/* projects */}
        <MobileProjects />
        {/* contact */}
        <MobileContact />
      </div>
    {/* <div className="md:flex md:h-screen md:overflow-hidden md:bg-gray-100"> */}
    <div className="hidden md:flex md:overflow-hidden md:h-screen">
      {/* Sidebar */}
      <div className="w-1/5 bg-white shadow-lg p-6 border-r border-gray-200">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-y-auto">
        <Detail />
      </div>
    </div>
    </div>
  );
};

export default MainPage;
