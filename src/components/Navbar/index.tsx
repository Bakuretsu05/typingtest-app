import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="Navbar">
      <div className="Navbar__logo" onClick={() => navigate("/")}>
        <i className="fas fa-keyboard Navbar__logo-icon"></i>
        <p className="Navbar__logo-title">Typing Test</p>
      </div>
      <ul className="Navbar__links">
        <li className="Navbar__link">
          <a href="https://github.com/Bakuretsu05/typingtest-app">
            <i className="fab fa-github-square"></i>
            <span className="Navbar__link-text">GitHub</span>
          </a>
        </li>
        <li className="Navbar__link" onClick={() => navigate("scores")}>
          <i className="fas fa-list"></i>
          <span className="Navbar__link-text">Scores</span>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
