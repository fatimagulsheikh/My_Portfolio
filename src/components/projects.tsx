import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from 'next/image';
import Link from 'next/link';

const Projects = () => {
  const projects = [
    {
      name: "Travel Website",
      detail: "My complete responsive travel and tour website using HTML, CSS, and Bootstrap 5. Responsive web design.",
      link: "https://travel-website-kg81tnpwo-fatima-sheikhs-projects-c67349cc.vercel.app",
      image: "travel.jpg",
    },
    {
      name: "Todo_App",
      detail: "My complete responsive Todo_App using Next.js and Tailwind CSS. Responsive web design.",
      link: "https://todo-qomusa2rr-fatima-sheikhs-projects-c67349cc.vercel.app",
      image: "todo.jpg",
    },
    {
      name: "Portfolio",
      detail: "My complete responsive First Portfolio website using HTML and CSS. Responsive web design.",
      link: "https://portfolio-d27fda1dr-fatima-sheikhs-projects-c67349cc.vercel.app",
      image: "portfolio.jpg",
    },
    {
      name: "Digital_Clock",
      detail: "My complete responsive Digital Clock website using HTML, CSS, JavaScript, and TypeScript. Responsive web design.",
      link: "https://digital-clock-a93lnr6fv-fatima-sheikhs-projects-c67349cc.vercel.app",
      image: "clock.jpg",
    },
    {
      name: "Facebook_login",
      detail: "My complete responsive Facebook login using Next.js. Responsive web design.",
      link: "https://facebook-login-5l4p9xbsq-fatima-sheikhs-projects-c67349cc.vercel.app",
      image: "facebook.jpg",
    },
    {
      name: "Rock_Paper_scissors_Game",
      detail: "My complete responsive Rock Paper Scissors game using HTML, CSS, and JavaScript. Responsive web design.",
      link: "https://rock-paper-scissors-game-f85sellnm.vercel.app",
      image: "rock.jpg",
    },
    {
      name: "Tic_Tac_Toe_Game",
      detail: "My complete responsive Tic Tac Toe game using HTML, CSS, and JavaScript. Responsive web design.",
      link: "https://tic-tac-toe-game-in-java-script-jrcl5z2hb.vercel.app",
      image: "tic_tac.jpg",
    },
    {
      name: "Login",
      detail: "My complete responsive Login using Next.js. Responsive web design.",
      link: "https://class-13-gx1k8njij-fatima-sheikhs-projects-c67349cc.vercel.app",
      image: "login.jpg",
    },
    {
      name: "Resume-1",
      detail: "My complete responsive 'Static Interactive Resume' using HTML, CSS, Javascript, Typescript Responsive web design.",
      link: "https://milestone1-2-bxvdkmtq0-fatima-sheikhs-projects-c67349cc.vercel.app",
      image: "resume-1.jpg",
    },
    {
      name: "Resume-2",
      detail: "My complete responsive 'Dynamic Resume Builder' using HTML, CSS, Javascript, Typescript Responsive web design.",
      link: "https://milestone-3-lg2q4cxvr-fatima-sheikhs-projects-c67349cc.vercel.app",
      image: "resume-2.jpg",
    },
    {
      name: "Resume-3",
      detail: "My complete responsive 'Editable Resume Builder' using HTML, CSS, Javascript, Typescript Responsive web design.",
      link: "https://milestone-4-acfbgr499-fatima-sheikhs-projects-c67349cc.vercel.app",
      image: "resume-3.jpg",
    },
    {
      name: "Resume-4",
      detail: "My complete responsive 'Shareable Resume Builder' using HTML, CSS, Javascript, Typescript Responsive web design.",
      link: "https://milestone-5-pgl9rwho0-fatima-sheikhs-projects-c67349cc.vercel.app",
      image: "resume-4.jpg",
    },
    {
      name: "Blog Application",
      detail: "My complete responsive 'Modern Blog Application' Build a Modern Blog Application with Next.js & Sanity.",
      link: "https://text-sanity-mn3vsa6es-fatima-sheikhs-projects-c67349cc.vercel.app",
      image: "blog.jpg",
    },
  ];

  return (
    <Card
      data-aos="fade-up"
      className='h-[85vh] overflow-y-scroll bg-gradient-to-br from-purple-100 via-indigo-100 to-blue-100 shadow-2xl rounded-3xl p-8 space-y-8 border border-indigo-200'
    >
      <CardHeader className='border-b border-indigo-200 pb-6 mb-6'>
      <CardTitle className="text-4xl font-extrabold text-indigo-800 uppercase tracking-widest">
          Projects
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <div className="flex flex-wrap -m-4">
          {projects.map((item, i) => (
            <div key={i} className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="relative h-64 group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <Image
                  alt="gallery"
                  width={1000}
                  height={1000}
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105 rounded-lg"
                  src={`/assets/Projects/${item.image}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-800 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-end p-6 rounded-lg cursor-pointer">
                  <div className="text-center text-white w-full">
                    <h2 className="text-2xl font-semibold mb-2">{item.name}</h2>
                    <p className="text-sm mb-4 line-clamp-3">{item.detail}</p>
                    <Link
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-blue-500 px-4 py-2 rounded-full font-medium text-white transition-transform duration-300 hover:bg-blue-400 hover:scale-105"
                    >
                      View Project
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Projects;
