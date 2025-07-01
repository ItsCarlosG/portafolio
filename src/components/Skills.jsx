import React from "react";
import "./Skills.css";
import { FiZap } from "react-icons/fi";

const skills = [
  "Java",
  "Spring Boot",
  "PHP",
  "Laravel",
  "Python",
  "SQL",
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "RESTful APIs",
  "GraphQL",
  "Git",
  "Bash",
  "Linux",
  "Android Studio",
];

const Skills = () => (
  <section id="skills" className="skills-section">
    <h2 className="section-heading">Mis Habilidades</h2>
    <div className="skills-grid">
      {skills.map((skill) => (
        <div className="skill-card" key={skill}>
          <FiZap className="skill-icon" />
          <span className="skill-name">{skill}</span>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
