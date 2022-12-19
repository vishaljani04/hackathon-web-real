import React from "react";
import './Main.css';

function Navbar(){
    return(
        <div>
            <header>
        <div id="menu-bar" className="fas fa-bars" />
        <a href="#" className="logo">
          <span>G</span>ujarat    directory</a>
        <nav className="navbar">
          <a href="#home">Home</a>
          <a href="#packages">Packages</a>
          <a href="#services">Services</a>
          <a href="#gallery">Gallery</a>
          {/* <a href="#review">review</a> */}
          <a href="#book">Book</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="icons">
          <i className="fas fa-search" id="search-btn" />
          <i className="fas fa-user" id="login-btn" />
        </div>
        <form action className="search-bar-container">
          <input type="search" id="search-bar" placeholder="search here..." />
          <label htmlFor="search-bar" className="fas fa-search" />
        </form>
      </header>
        </div>
    );
}
export default Navbar;