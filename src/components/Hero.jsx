import React from "react";
import profile_pic from "../assets/images/profile_pic.png";
const Hero = () => {
  const social_media = [
    {logo:"logo-linkedin",link:"https://www.linkedin.com/in/sudarshan-pujari/"},
    {logo:"logo-github",link:"https://github.com/sudarshan441"}
    ];
  return (
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center"
    >
      <div className="flex-1 flex items-center justify-center h-full">
        <img src={profile_pic} alt="" className="md:w-1/1 h-full object-cover rounded-full" />
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-cyan-600 md:text-6xl text-5xl">
              Hello!
              <br />
            </span>
            My Name is <span>Sudarshan Pujari</span>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
            Full Stack Web Developer
          </h4>
          
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
            {social_media?.map((icon,i) => (
              <div
                key={i}
                className="text-gray-600 hover:text-white cursor-pointer "
              >
               <a href={icon.link} target={"_blank"}><ion-icon name={icon.logo}></ion-icon></a> 
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
