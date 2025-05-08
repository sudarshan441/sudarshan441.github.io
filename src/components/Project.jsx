import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import kickstarter from "../assets/images/kickstarter.png";
import Licious from "../assets/images/Licious.png";
import fathom from "../assets/images/fathom.png";
import cultfit from "../assets/images/cultfit.png";
import gym from "../assets/images/gym.png";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

const Project = () => {
  const projects = [
    {
      img: Licious,
      name: "Licious",
      description:"Licious is an e-commerce website through which users can purchase different kinds of cold cuts such as meat and fish",
      tech_stack:"HTML, CSS, JS",
      github_link: "https://github.com/sudarshan441/placid-plane-2533",
      live_link: "https://taupe-madeleine-4247ba.netlify.app/",
    },
    {
      img: kickstarter,
      name: "KickStarter",
      description:"Kickstarter is a global crowdfunding platform",
      tech_stack:"HTML, CSS, JS",
      github_link: "https://github.com/sudarshan441/mammoth-zoo-7517",
      live_link: "https://symphonious-genie-ba7aaf.netlify.app/",
    },
    {
      img: fathom,
      name: "Fathom Health",
      description:"the leader in AI medical coding automation, one of the largest physician-led provider groups in the United States.",
      tech_stack:"ReactJS, Chakra-UI",
      github_link: "https://github.com/sudarshan441/-cuddly-smoke-9747",
      live_link: "https://amazing-druid-ee3210.netlify.app/",
    },
    {
      img: cultfit,
      name: "Fiti",
      description:"FITIFY.com is a fitness website of daily food healthy & tasty, mental fitness easy with yoga & meditation, and medical & lifestyle care hassle-free.",
      tech_stack:"ReactJS, Chakra-UI, BootStrap, MOngoDB, ExpressJS",
      github_link: "https://github.com/Pragati946/bouncy-donkey-4696",
      live_link: "https://fitify-lac.vercel.app/",
    },
    {
      img: gym,
      name: "gym",
      description:"It’s Group project where we've used MERN stack to make the gym.com with our creativity along with frontend and backend integration",
      tech_stack:"ReactJS, Chakra-UI, BootStrap, MOngoDB, ExpressJS",
      github_link: "https://github.com/suFi7867/gym.com",
      live_link: "https://gymbro.vercel.app/",
    },
    
  ];
  return (
    <section id="projects" className="py-10 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My awesome works</p>
      </div>
      <br />
      <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center relative">
        <div className="lg:w-5/3 w-full">
          <Swiper
            slidesPerview={2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView:2 ,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div style={{height:"550px"}} className="w-full p-4 bg-slate-700 rounded-xl">
                  <img src={project_info.img} alt="" className="rounded-lg" style={{height:"250px"}} />
                  <h3 className="text-xl my-4">{project_info.name}</h3>
                  <p style={{height:"80px"}}>{project_info.description}</p>
                  <h2 style={{height:"50px"}} className="text-xl my-4">Tech-Stacks: {project_info.tech_stack}</h2>
                  <div style={{display:"flex",justifyContent:"space-between"}}>
                    <a
                      href={project_info.github_link}
                      target="_blank"
                   
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block">
                      
                      Github
                    </a>
                    <a
                      href={project_info.live_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                      
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
       
      </div>
    </section>
  );
};

export default Project;
