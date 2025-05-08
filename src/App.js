import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Contact from "./components/Contact";

import Navbar from "./components/Navbar";
import Resume from "./components/Resume"


import './App.css';
import GithubCalender from "./components/Github";
import Stats from "./components/Stats";

function App() {
  return (
    <div className="App">
       <Navbar />
      {/* <Bot /> */}
      <Hero />
      <About />
      <Skills />
      {/* <Hireme /> */}
      <Project />
      <GithubCalender></GithubCalender>
      <Stats></Stats>
      <Contact />
      <Resume></Resume>
   
    </div>
  );
}

export default App;
