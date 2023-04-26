import React from "react";

function Hero() {
  return (
    <section id="home">
      <div id="particles-js">
        <div className="hero-container">
          <h1>
            Hello!
            <br />
            <span>I'm Isacco Bertoli</span>
            <span className="wave">👋</span>
          </h1>
          <p className="description">
            I'm an creative developer form Bergamo, Italy.
            <br />
            Front-End • Back-End • BlockChain Developer
          </p>
          <div className="hero-icons">
            <a
              href="https://www.linkedin.com/in/isacco-bertoli-10aa16252/"
              target="_blank"
              aria-label="Linkedin Profile"
            >
              <i className="bi bi-linkedin ico"></i>
            </a>
            <a
              href="https://github.com/Isacco-B"
              target="_blank"
              aria-label="GitHub Profile"
            >
              <i className="bi bi-github ico"></i>
            </a>
            <a
              href="mailto:info@isaccobertoli.com"
              target="_blank"
              aria-label="Email"
            >
              <i className="bi bi-envelope ico"></i>
            </a>
          </div>
          <div>
            <a href="#contact">
              <button className="btn-primary">Get In Touch</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
