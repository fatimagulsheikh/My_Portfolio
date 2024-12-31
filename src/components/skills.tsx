import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FaCheckCircle } from "react-icons/fa";

const Skills = () => {
  return (
      <Card data-aos="zoom-in" className='h-[85vh] overflow-y-scroll bg-gradient-to-br from-purple-100 via-indigo-100 to-blue-100 shadow-2xl rounded-3xl p-8 space-y-8 border border-indigo-200'>
        <CardHeader className='border-b border-indigo-200 pb-6 mb-6'>
       
        <CardTitle className="text-4xl font-extrabold text-indigo-800 uppercase tracking-widest">
          Skills
        </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
       {/* Skill here */}
    <div className="flex flex-wrap -m-4">
      {/* HTML */}
      <div className="p-4 w-full md:w-1/3 ">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-800 text-white flex-shrink-0">
              <FaCheckCircle className='text-white text-lg' />
            </div>
            <h2 className="text-lg font-semibold tracking-tight">
              HTML
            </h2>
          </div>
          <div className='w-full h-1 rounded-lg bg-gray-500'>
                <div className='w-[100%] h-1 bg-indigo-800 rounded-lg'/>
              </div>
              <h3 className='text-indigo-800 text-sm text-right font-semibold tracking-tight'>100%</h3>
        </div>

{/* css */}
<div className="p-4 w-full md:w-1/3 ">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-800 text-white flex-shrink-0">
              <FaCheckCircle className='text-white text-lg' />
            </div>
            <h2 className="text-lg font-semibold tracking-tight">
              CSS
            </h2>
          </div>
          <div className='w-full h-1 rounded-lg bg-gray-500'>
                <div className='w-[90%] h-1 bg-indigo-800 rounded-lg'/>
              </div>
              <h3 className='text-indigo-800 text-sm text-right font-semibold tracking-tight'>90%</h3>
        </div>

        {/* bootstrap */}
      <div className="p-4 w-full md:w-1/3 ">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-800 text-white flex-shrink-0">
              <FaCheckCircle className='text-white text-lg' />
            </div>
            <h2 className="text-lg font-semibold tracking-tight">
              BOOTSTRAP
            </h2>
          </div>
          <div className='w-full h-1 rounded-lg bg-gray-500'>
                <div className='w-[90%] h-1 bg-indigo-800 rounded-lg'/>
              </div>
              <h3 className='text-indigo-800 text-sm text-right font-semibold tracking-tight'>100%</h3>
        </div>

        {/* javascript */}
      <div className="p-4 w-full md:w-1/3 ">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-800 text-white flex-shrink-0">
              <FaCheckCircle className='text-white text-lg' />
            </div>
            <h2 className="text-lg font-semibold tracking-tight">
              JAVASCRIPT
            </h2>
          </div>
          <div className='w-full h-1 rounded-lg bg-gray-500'>
                <div className='w-[90%] h-1 bg-indigo-800 rounded-lg'/>
              </div>
              <h3 className='text-indigo-800 text-sm text-right font-semibold tracking-tight'>90%</h3>
        </div>

        {/* typescript */}
      <div className="p-4 w-full md:w-1/3 ">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-800 text-white flex-shrink-0">
              <FaCheckCircle className='text-white text-lg' />
            </div>
            <h2 className="text-lg font-semibold tracking-tight">
              TYPESCRIPT
            </h2>
          </div>
          <div className='w-full h-1 rounded-lg bg-gray-500'>
                <div className='w-[90%] h-1 bg-indigo-800 rounded-lg'/>
              </div>
              <h3 className='text-indigo-800 text-sm text-right font-semibold tracking-tight'>90%</h3>
        </div>

        {/* girhub */}
      <div className="p-4 w-full md:w-1/3 ">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-800 text-white flex-shrink-0">
              <FaCheckCircle className='text-white text-lg' />
            </div>
            <h2 className="text-lg font-semibold tracking-tight">
              GITHUB
            </h2>
          </div>
          <div className='w-full h-1 rounded-lg bg-gray-500'>
                <div className='w-[80%] h-1 bg-indigo-800 rounded-lg'/>
              </div>
              <h3 className='text-indigo-800 text-sm text-right font-semibold tracking-tight'>80%</h3>
        </div>

        {/* communication skills */}
      <div className="p-4 w-full md:w-1/3 ">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-800 text-white flex-shrink-0">
              <FaCheckCircle className='text-white text-lg' />
            </div>
            <h2 className="text-lg font-semibold tracking-tight">
              COMMUNICATION SKILLS
            </h2>
          </div>
          <div className='w-full h-1 rounded-lg bg-gray-500'>
                <div className='w-[90%] h-1 bg-indigo-800 rounded-lg'/>
              </div>
              <h3 className='text-indigo-800 text-sm text-right font-semibold tracking-tight'>90%</h3>
        </div>

{/* Nextjs */}
<div className="p-4 w-full md:w-1/3 ">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-800 text-white flex-shrink-0">
              <FaCheckCircle className='text-white text-lg' />
            </div>
            <h2 className="text-lg font-semibold tracking-tight">
              NEXT JS
            </h2>
          </div>
          <div className='w-full h-1 rounded-lg bg-gray-500'>
                <div className='w-[90%] h-1 bg-indigo-800 rounded-lg'/>
              </div>
              <h3 className='text-indigo-800 text-sm text-right font-semibold tracking-tight'>90%</h3>
        </div>

      </div>
  
        </CardContent>
      </Card>
  );
}

export default Skills;