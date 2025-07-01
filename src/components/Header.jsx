import React from "react";
import "./Header.css";

const Header = () => (
  <header className="header">
    <nav>
      <ol>
        <li>
          <a href="#about">Sobre Mí</a>
        </li>
        <li>
          <a href="#skills">Habilidades</a>
        </li>
        <li>
          <a href="#projects">Proyectos</a>
        </li>
        <li>
          <a href="#contact">Contacto</a>
        </li>
      </ol>
      {/* <a
        href="/ruta/a/tu/cv.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="resume-button"
      >
        Mi CV
      </a> */}
    </nav>
  </header>
);

export default Header;
