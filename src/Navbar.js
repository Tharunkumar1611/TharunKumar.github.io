import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">Portfolio</div>
      <div className="dropdown-container">
        <button className="dropdown-toggle" onClick={toggleDropdown}>
          ☰
        </button>
        {isOpen && (
          <ul className="dropdown-menu">
            <li><a href="#home">Home</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#problemsolving">ProblemSolving</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#certificate">CertificationSection</a></li>
            <li><a href="#publications">Publications</a></li>
            <li><a href="#co-curricular">Co-Curricular</a></li>
            <li><a href="#photo">PhotoSectionSection</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
