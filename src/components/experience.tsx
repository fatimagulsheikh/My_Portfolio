import React from 'react'
import {
  Card,
  CardContent,
  // CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {  } from "@/components/ui/button"

const Experience = () => {
  return (
    <Card 
      data-aos="zoom-in" className="h-[85vh] overflow-y-scroll bg-gradient-to-br from-purple-100 via-indigo-100 to-blue-100 shadow-2xl rounded-3xl p-8 space-y-8 border border-indigo-200"
    >
    
      
      <CardHeader className="border-b border-indigo-200 pb-6 mb-6">
        <CardTitle className="text-4xl font-extrabold text-indigo-800 uppercase tracking-widest">
          Experience
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-10">
      <p>As a beginner web developer, I’ve build various personal projects, including a personal portfolio, a traveling website, and a shopping website. 
<br />
<br />
My projects focus on creating interactive, responsive designs with smooth animations to enhance user experience. I am committed to continuous learning, and am eager to apply my skills to impactful digital solutions. </p>
        {/* Internship Section */}
        <div className="flex flex-col space-y-6 p-6 rounded-xl bg-white shadow-md hover:shadow-lg border border-gray-300 transition-shadow duration-300">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <span className="text-xl font-semibold text-indigo-700">
                Front End Developer
              </span>
              <span className="text-sm text-gray-500 ml-2 block md:inline">
                01/April/2024 - 30/April/2024
              </span>
            </div>
            <h2 className="text-2xl font-bold text-indigo-900 mt-3 md:mt-0">
              CodSoft
            </h2>
          </div>

          <ul className="ml-5 list-disc space-y-2 text-gray-700">
            <li>Developed the official website for CodSoft</li>
            <li>Contributed to team tasks and collaborated effectively</li>
            <li>Enhanced website responsiveness and interactivity</li>
            <li>Worked on optimizing website performance</li>
            <li>Participated in regular code reviews and feedback sessions</li>
          </ul>

          <p className="text-gray-600 leading-relaxed mt-4">
            I completed a rewarding 4-week virtual internship in Web Development with CodSoft! 
            Grateful for the opportunity to learn and grow in a supportive environment, and excited to apply my new skills and knowledge in future endeavors.
          </p>
        </div>
      </CardContent>

      <CardFooter className="flex justify-end">
      </CardFooter>
    </Card>
  )
}

export default Experience