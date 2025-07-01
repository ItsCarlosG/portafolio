import React from "react";
import "./Hero.css";

const Hero = () => (
  <section className="hero">
    <h1 className="fade-in-up delay-1">Hola, mi nombre es</h1>
    <h2 className="fade-in-up delay-2">Carlos Alberto Gutierrez.</h2>
    <h3 className="fade-in-up delay-3">Construyo soluciones para la web</h3>
    <p className="fade-in-up delay-4">
      Soy un apasionado desarrollador de software y estudiante de Ingeniería de
      Sistemas, enfocado en el desarrollo backend. Siempre estoy en búsqueda de
      nuevos conocimientos y oportunidades para mejorar.
    </p>
    <a href="#projects" className="cta-button fade-in-up delay-5">
      ¡Mira mis proyectos!
    </a>
  </section>
);

export default Hero;
