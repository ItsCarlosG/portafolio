import React, { useState } from "react";
import projectImage1 from "../assets/quilisalud-menu.png";
import projectImage2 from "../assets/quilisalud-menu2.png";
import projectImage3 from "../assets/quilisalud-menu3.png";
import projectImage4 from "../assets/tutorias-menu.png";
import projectImage5 from "../assets/tutorias-menu2.png";
import projectImage6 from "../assets/tutorias-menu3.png";
import "./Projects.css";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const projectsData = [
  {
    title: "Plataforma de Ventanilla Única (Quilisalud)",
    status: "En desarrollo",
    description:
      "Solución gubernamental en producción real para Quilisalud, que gestiona solicitudes ciudadanas de forma estructurada. La plataforma monitorea tiempos de respuesta, asigna casos por competencia y finaliza procesos con firma digital, mejorando la eficiencia de la atención estatal.",
    extended: `\n🔹 Rol: Backend Developer (Spring Boot + MySQL)\n🔹 Funcionalidades clave:\n  - Registro de solicitudes anónimas y no anónimas\n  - Validación y reasignación automática por tipo de solicitud\n  - Asignación a áreas responsables\n  - Sistema de semáforo para seguimiento de tiempos de respuesta\n  - Gestión por roles administrativos\n  - Firma digital de respuesta final\n  - Historial y trazabilidad de casos\n🔹 Arquitectura:\n  - Spring Boot con patrón MVC\n  - REST API\n  - Base de datos MySQL optimizada\n  - Seguridad con validación por sesión y middleware\n🔹 Contexto Real:\n  - Proyecto implementado en entidad pública estatal\n  - Código no visible por acuerdos de confidencialidad\n🔹 Aprendizajes:\n  - Aplicación de normativas del sector salud\n  - Optimización de flujos institucionales\n  - Manejo de tiempos legales y automatización de procesos\n  - Desarrollo profesional con impacto social real\n`,
    technologies: [
      "Spring Boot",
      "Java",
      "MySQL",
      "RESTful API",
      "MVC",
      "Firma Digital",
    ],
    images: [projectImage1, projectImage2, projectImage3],
    github: "",
    live: "#",
  },
  {
    title: "Sistema de Gestión de Tutorías Universitarias",
    status: "En desarrollo",
    description:
      "Proyecto institucional para Unicomfacauca que integra un ecosistema completo para tutorías académicas. Incluye roles (Admin, Docente, Estudiante), calendario de reservas, videollamadas con Jitsi y generación automática de resúmenes de sesiones grabadas usando la IA de Gemini.",
    extended: `\n🔹 Rol: Fullstack Developer (Laravel + Docker + MySQL)\n🔹 Funcionalidades clave:\n  - Gestión de usuarios por rol (admin, docente, estudiante)\n  - Asignación de materias y horarios\n  - Reserva y solicitud de tutorías\n  - Integración con Jitsi Meet para tutorías virtuales\n  - Grabación de sesiones\n  - Generación de resúmenes automáticos con Gemini API\n  - Evaluaciones anónimas post-tutoría\n🔹 Arquitectura:\n  - Laravel backend con MVC\n  - Base de datos MySQL relacional\n  - Dockerizado para despliegue y entorno local\n  - Frontend con Blade + Bootstrap\n🔹 Contexto Real:\n  - Proyecto de grado con integración real a plataforma universitaria\n  - Datos y código confidenciales por acuerdo institucional\n🔹 Aprendizajes:\n  - Diseño y manejo de sistemas complejos multi-rol\n  - Integración de IA y servicios de terceros\n  - Buenas prácticas con Laravel y Docker\n`,
    technologies: [
      "Laravel",
      "PHP",
      "Docker",
      "Jitsi Meet",
      "API Gemini",
      "FullCalendar",
      "MySQL",
    ],
    images: [projectImage4, projectImage5, projectImage6],
    github: "",
    live: "#",
  },
];

const Projects = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="projects">
      <h2 className="section-heading">Mis Proyectos</h2>
      <div className="projects-container">
        {projectsData.map((project, i) => (
          <div className={`project-card ${i % 2 !== 0 ? "even" : ""}`} key={i}>
            <div className="project-image-gallery">
              <div className="image-vertical-stack">
                {project.images.map((image, imgIndex) => (
                  <div key={imgIndex} className="image-item">
                    <img
                      src={image}
                      alt={`Imagen ${imgIndex + 1}`}
                      className="gallery-img"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="project-content">
              <p className="project-overline">Proyecto Destacado</p>
              {project.status && (
                <span className="project-status">{project.status}</span>
              )}

              <h3 className="project-title">{project.title}</h3>
              <div className="project-description">
                <p>{project.description}</p>
                <button
                  onClick={() => toggleExpand(i)}
                  className="see-more-btn"
                >
                  {expandedIndex === i ? "Ver menos" : "Ver más"}
                </button>
                {expandedIndex === i && (
                  <pre className="extended-description">{project.extended}</pre>
                )}
              </div>
              <ul className="project-tech-list">
                {project.technologies.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
              <div className="project-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Link"
                >
                  <FiGithub />
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Live Demo"
                >
                  <FiExternalLink />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
