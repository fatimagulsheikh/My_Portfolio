import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Education = () => {
  return (
    <Card
      data-aos="zoom-in"
      className="h-[85vh] overflow-y-scroll bg-gradient-to-br from-purple-100 via-indigo-100 to-blue-100 shadow-2xl rounded-3xl p-8 space-y-8 border border-indigo-200"
    >
      <CardHeader className="border-b border-indigo-200 pb-6 mb-6">
        <CardTitle className="text-4xl font-extrabold text-indigo-800 uppercase tracking-widest">
          Education
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-8">
        {/* Bachelors Section */}
        <div className="flex flex-col space-y-6 p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl border border-gray-200 transition-shadow duration-300">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <span className="text-2xl font-semibold text-indigo-800">Bachelors (University)</span>
              <span className="text-sm text-gray-500 ml-2">(Ongoing)</span>
            </div>
            <h2 className="text-xl font-medium text-indigo-900 mt-3 md:mt-0">
              Allama Iqbal Open University Karachi
            </h2>
          </div>
          <p className="text-gray-600 leading-relaxed mt-2">
            At Allama Iqbal Open University, I am embracing an in-depth journey into advanced topics
            that challenge and inspire me daily. This experience has broadened my academic knowledge
            and developed my critical thinking, preparing me for real-world challenges with hands-on
            projects and innovative learning approaches.
          </p>
        </div>

        {/* Intermediate Section */}
        <div className="flex flex-col space-y-6 p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl border border-gray-200 transition-shadow duration-300">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <span className="text-2xl font-semibold text-indigo-800">Intermediate (College)</span>
              <span className="text-sm text-gray-500 ml-2">(2020)</span>
            </div>
            <h2 className="text-xl font-medium text-indigo-900 mt-3 md:mt-0">
              Premier College in Karachi
            </h2>
          </div>
          <p className="text-gray-600 leading-relaxed mt-2">
            My time at Premier College laid a solid foundation for my future studies, instilling
            discipline, analytical skills, and an appreciation for lifelong learning. The supportive
            faculty and interactive courses prepared me well for the demands of university life.
          </p>
        </div>

        {/* Matriculation Section */}
        <div className="flex flex-col space-y-6 p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl border border-gray-200 transition-shadow duration-300">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <span className="text-2xl font-semibold text-indigo-800">Matriculation (School)</span>
              <span className="text-sm text-gray-500 ml-2">(2018)</span>
            </div>
            <h2 className="text-xl font-medium text-indigo-900 mt-3 md:mt-0">
              Comprehensive Higher Sec School in Karachi
            </h2>
          </div>
          <p className="text-gray-600 leading-relaxed mt-2">
            Comprehensive Higher Secondary School provided a strong academic grounding and nurtured
            my love for learning. The dedication of my teachers and the enriching school environment
            fostered a sense of discipline, curiosity, and resilience that I carry with me.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default Education;
