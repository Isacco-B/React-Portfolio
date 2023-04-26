import React from "react";

function NavBar() {
  return (
    <header className="navbar">
      <div className="navbar-content">
        <div className="navbar-logo">
          <a href="#">Isacco Bertoli</a>
        </div>
        <ul className="navbar-menu" role="list">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className="hamburger-ico">
          <img
            className="icon-hamburger"
            src="asset/img/icon-hamburger.svg"
            alt="mobile menu open"
          />
          <img
            className="icon-close"
            src="asset/img/icon-close.svg"
            alt="mobile menu close"
          />
        </div>
      </div>
    </header>
  );
}

export default NavBar
