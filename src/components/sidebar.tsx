import Image from "next/image";
import { Button } from "./ui/button";
import Typewriter from 'typewriter-effect';
import { FaCloudDownloadAlt, FaLinkedin, FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
import { SiFiverr } from "react-icons/si";
import Link from "next/link";

export function Sidebar() {
  return (
    <div className="h-screen flex flex-col items-center bg-gradient-to-br from-indigo-50 to-purple-100 p-8 space-y-6 shadow-xl rounded-lg border border-indigo-200">
      
      {/* Profile Image */}
      <Image 
        src="/assets/profile-pic.jpeg" 
        alt="profile-pic" 
        width={200} 
        height={200} 
        className="rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300"
      />

      {/* Name and Title */}
      <div className="text-center space-y-1">
        <h1 className="text-2xl font-bold text-indigo-900 tracking-tight uppercase">
          Fatima Sheikh
        </h1>
        <h2 className="text-md font-semibold text-gray-600 tracking-tight">
          <Typewriter
            options={{
              strings: ['Web Developer', "Front End Developer"],
              autoStart: true,
              loop: true,
            }}
          />
        </h2>
      </div>

      {/* Social Media Icons */}
      <div className="grid grid-cols-3 gap-4 mt-4">
        <Link href="https://www.linkedin.com/in/fatima-gul-4748402b9/" target="_blank" className="transform hover:scale-110 transition duration-200 text-gray-600 hover:text-[#0762C8]">
          <FaLinkedin className="text-4xl" />
        </Link>
        <Link href="https://github.com/fatimagulsheikh" target="_blank" className="transform hover:scale-110 transition duration-200 text-gray-600 hover:text-[#6e5494]">
          <FaGithub className="text-4xl" />
        </Link>
        <Link href="https://vercel.com/fatima-sheikhs-projects-c67349cc" target="_blank" className="transform hover:scale-110 transition duration-200 text-gray-600 hover:text-black">
          <IoLogoVercel className="text-4xl" />
        </Link>
        <Link href="https://www.fiverr.com/fatimasheikh769/buying?source=avatar_menu_profile" target="_blank" className="transform hover:scale-110 transition duration-200 text-gray-600 hover:text-[#00b22d]">
          <SiFiverr className="text-4xl" />
        </Link>
        <Link href="https://www.facebook.com/fatimagull.sheikh" target="_blank" className="transform hover:scale-110 transition duration-200 text-gray-600 hover:text-[#4267B2]">
          <FaFacebook className="text-4xl" />
        </Link>
        <Link href="https://www.instagram.com/fatimagul_sheikh/" target="_blank" className="transform hover:scale-110 transition duration-200 text-gray-600 hover:text-[#F56040]">
          <FaInstagram className="text-4xl" />
        </Link>
      </div>

      {/* Download CV Button */}
      <Link href={'/assets/cv.pdf'} target="_blank" className="mt-4 w-full text-center">
        <Button className="flex items-center justify-center space-x-2 px-6 py-3 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 hover:shadow-xl transition-transform duration-300 transform hover:scale-105">
          <FaCloudDownloadAlt />
          <span>Download CV</span>
        </Button>
      </Link>
    </div>
  );
}                                                
