import React from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import About from "../components/About";
import SkillsList from "../components/SkillsList";
import ProjectsList from "../components/ProjectsList";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <SkillsList />
      <ProjectsList />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
