import React from "react";
import { socialLinks } from "../data";


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
            {socialLinks.map((link=>{
              const {id, href, label, icon} = link;
              return (
                <a key={id} href={href} target="blank" aria-label={label}>
                  <i className={icon}></i>
                </a>
              );
            }))}
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
