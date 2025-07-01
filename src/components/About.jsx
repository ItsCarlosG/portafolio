import React from "react";
import "./About.css";

const About = () => (
  <section id="about" className="about-section">
    <h2 className="section-heading"> Sobre Mí</h2>
    <div className="about-text cool-font">
      <p>
        Soy estudiante de décimo semestre de Ingeniería de Sistemas, apasionado
        por el desarrollo de software y en constante búsqueda de aprender y
        mejorar. He trabajado en proyectos académicos y personales enfocados
        principalmente en desarrollo backend, utilizando tecnologías como{" "}
        <strong>Spring Boot</strong> y <strong>Laravel</strong>. Me interesa
        construir soluciones funcionales, bien estructuradas y con potencial de
        escalar, mientras sigo fortaleciendo mis habilidades y conocimientos en
        entornos reales de desarrollo.
      </p>
      <p>
        Disfruto trabajando con bases de datos tanto{" "}
        <strong>SQL (MySQL, PostgreSQL)</strong> como{" "}
        <strong>NoSQL (MongoDB, Redis)</strong> y diseñando{" "}
        <strong>APIs RESTful</strong> eficientes. Además, exploro el mundo de
        Python para análisis de datos y el desarrollo móvil con Android.
      </p>
      <p>
        Actualmente estoy profundizando mis conocimientos en{" "}
        <strong>Spring Boot</strong> para construir microservicios y sistemas
        distribuidos.
      </p>
    </div>
  </section>
);

export default About;
