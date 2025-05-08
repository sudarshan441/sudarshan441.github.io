import React from "react";
import myResume from '../assets/Sudarshan-Resume-fw20_0365.pdf'
const About = () => {
  const info = [
    { text: "Years experience", count: "04" },
    { text: "Completed Projects", count: "24" },
    { text: "Companies Work", count: "06" },
  ];
  return (
    <section id="about" className="py-10 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          About <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 my-3 text-lg">My introduction</p>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-300 my-3">
              <p className="text-justify leading-7 w-11/12 mx-auto">
              I am a B.Tech graduate in EEE, I love exploring new technologies in the field of Web Development and always try to adapt to it.I believe in the concept of continuous learning by regularly upgrading my skills and enhancing my knowledge.I have learned MERN stack, data structures, algorithms, and soft skills at Masai School.And besides coding, I love listening to music, rapping and As a developer, my hunger for learning has drastically increased. And I want to centralize my skills and learning for enhancement of an organization and more of it, to enhance my career.
              </p>
             
              <br />
              <br />
              <a href={myResume} download={"Sudarshan-Resume-fw20_0365.pdf"} target={"_blank"}>
               <button style={{backgroundColor:"rgb(8 145 178 / var(--tw-bg-opacity))",padding:"12px",borderRadius:"20px",color:"white"}}>Download CV</button>
             </a>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;
