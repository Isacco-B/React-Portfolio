import React from "react";
import { pageLinks } from "../data";

function NavBar() {
  return (
    <header className="navbar">
      <div className="navbar-content">
        <div className="navbar-logo">
          <a href="#">Isacco Bertoli</a>
        </div>
        <ul className="navbar-menu" role="list">
          {pageLinks.map((link)=>{
            return (
              <li key={link.id}>
                <a href={link.href}>{link.text}</a>
              </li>
            )
          })}
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
