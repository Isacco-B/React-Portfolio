import React from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import ProjectsList from "../components/ProjectsList";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Skills />
      <ProjectsList />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
