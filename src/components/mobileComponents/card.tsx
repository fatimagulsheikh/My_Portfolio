import React from 'react';
import Image from 'next/image';
import Typewriter from 'typewriter-effect';
import {
  FaCloudDownloadAlt,
  FaLinkedin,
  FaGithub,
  FaFacebook,
  FaInstagram,
} from 'react-icons/fa';
import { IoLogoVercel } from 'react-icons/io5';
import { SiFiverr } from 'react-icons/si';
import Link from 'next/link';
import { Button } from '../ui/button';

const MobileCard = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-purple-100 to-blue-200">
      <div
        data-aos="zoom-in"
        className="card bg-white w-[95%] max-w-md p-5 flex flex-col justify-center items-center rounded-xl shadow-md"
      >
        {/* Profile Picture */}
        <Image
          src="/assets/profile-pic.jpeg"
          alt="profile-pic"
          width={150}
          height={150}
          className="rounded-full border border-indigo-100 shadow-sm hover:shadow-md transition-shadow duration-300"
          priority
        />

        {/* Card Content */}
        <div className="card-body text-center mt-4">
          {/* Name */}
          <h1 className="card-title text-lg sm:text-xl font-bold text-indigo-800 uppercase tracking-wide">
            Fatima Sheikh
          </h1>

          {/* Role with Typewriter Effect */}
          <h2 className="text-sm sm:text-md font-medium text-gray-600 mt-2">
            <Typewriter
              options={{
                strings: ['Web Developer', 'Front End Developer'],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>

          {/* Social Media Icons */}
          <div className="grid grid-cols-3 gap-4 mt-6">
            <Link
              href="https://www.linkedin.com/in/fatima-gul-4748402b9/"
              target="_blank"
              className="hover:scale-105 transition duration-200 text-gray-600 hover:text-[#0762C8]"
            >
              <FaLinkedin className="text-xl sm:text-2xl" />
            </Link>
            <Link
              href="https://github.com/fatimagulsheikh"
              target="_blank"
              className="hover:scale-105 transition duration-200 text-gray-600 hover:text-[#6e5494]"
            >
              <FaGithub className="text-xl sm:text-2xl" />
            </Link>
            <Link
              href="https://vercel.com/fatima-sheikhs-projects-c67349cc"
              target="_blank"
              className="hover:scale-105 transition duration-200 text-gray-600 hover:text-black"
            >
              <IoLogoVercel className="text-xl sm:text-2xl" />
            </Link>
            <Link
              href="https://www.fiverr.com/fatimasheikh769/buying?source=avatar_menu_profile"
              target="_blank"
              className="hover:scale-105 transition duration-200 text-gray-600 hover:text-[#00b22d]"
            >
              <SiFiverr className="text-xl sm:text-2xl" />
            </Link>
            <Link
              href="https://www.facebook.com/fatimagull.sheikh"
              target="_blank"
              className="hover:scale-105 transition duration-200 text-gray-600 hover:text-[#4267B2]"
            >
              <FaFacebook className="text-xl sm:text-2xl" />
            </Link>
            <Link
              href="https://www.instagram.com/fatimagul_sheikh/"
              target="_blank"
              className="hover:scale-105 transition duration-200 text-gray-600 hover:text-[#F56040]"
            >
              <FaInstagram className="text-xl sm:text-2xl" />
            </Link>
          </div>

          {/* Download CV Button */}
          <Link
            href="/assets/cv.pdf"
            target="_blank"
            className="mt-6 w-full flex justify-center"
          >
            <Button className="flex items-center justify-center space-x-2 px-4 py-2 bg-indigo-600 text-white rounded-full shadow hover:bg-indigo-700 hover:shadow-lg transition-transform duration-300 transform hover:scale-105">
              <FaCloudDownloadAlt />
              <span>Download CV</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileCard;
