// src/components/Footer.jsx
import React from "react";
import "./Footer.css";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi"; 

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/ItsCarlosG", 
    icon: <FiGithub />,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/carlos-gutierrez12/", 
    icon: <FiLinkedin />,
  },
  {
    name: "Email",
    url: "mailto:carlos14FRV@email.com", 
    icon: <FiMail />,
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-links">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.name}
          >
            {link.icon}
          </a>
        ))}
      </div>
      <div className="footer-credit">
        <p>Diseñado y construido por Carlos Alberto Gutierrez.</p>
        <p>© {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;
