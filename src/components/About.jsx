import React from "react";
import myResume from "../assets/SudarshanPujari-Resume.pdf";
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
                Hey! I’m Sudarshan Pujari, a Full Stack Web Developer who loves
                turning ideas into fast, functional, and visually stunning web
                applications. I started as a B.Tech graduate in Electrical &
                Electronics Engineering, but my real spark ignited when I
                discovered web development, and I haven’t looked back since. I
                specialize in the MERN stack and work confidently with tools
                like Next.js, Tailwind CSS, HTMX, Alpine.js, and Golang. From
                building secure backends with JWT & Payload CMS, to deploying
                slick frontends on Vercel and AWS, I enjoy bringing full-stack
                solutions to life. I’ve worked with startups like Evfy and
                Auditcue, where I built scalable systems, automated workflows
                using Gemini AI, and focused on clean, reusable code. I believe
                in continuous learning, clean coding practices, and staying on
                top of emerging tech not just because it’s essential, but
                because I genuinely enjoy it. Let’s build something impactful
                together.
              </p>
              <br />
              <br />
              <a
                href={myResume}
                download={"SudarshanPujari-Resume.pdf"}
                target={"_blank"}
              >
                <button
                  style={{
                    backgroundColor: "rgb(8 145 178 / var(--tw-bg-opacity))",
                    padding: "12px",
                    borderRadius: "20px",
                    color: "white",
                  }}
                >
                  Download CV
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
