import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaReact,
  FaShieldAlt,
  FaBrain,
} from "react-icons/fa";
import { SiBlockchaindotcom } from "react-icons/si";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "AUTHX – Secure Authentication System",
      description:
        "A mighty MERN stack fortress of authentication, fortified with advanced security protocols: JWT login, OTP email verification, CSRF shields, and httpOnly cookies. Only the worthy may pass.",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
        "Security",
      ],
      features: [
        "JWT-based authentication, guarding tokens like an Autobot sentinel",
        "Email OTP verification for unbreakable security",
        "CSRF protection and XSS prevention — deflecting digital threats",
        "HttpOnly cookies ensuring secure session dominion",
        "Comprehensive testing across all login flows, battle-ready",
      ],
      github: "https://github.com/Pravin-byte/AuthX",
      live: "https://authx-frontend-uqbq.onrender.com/",
      icon: <FaShieldAlt />,
      year: "2025 April",
    },
    {
      title: "AI Powered Resume Reviewer",
      description:
        "An intelligent sentinel wielding GPT-4, scanning resumes to deliver precise feedback, reveal strengths, and advise on improvements—no human folly allowed.",
      technologies: [
        "React.js",
        "Node.js",
        "OpenAI API",
        "Tailwind CSS",
        "PDF Processing",
      ],
      features: [
        "Extract and analyze PDF text with surgical precision",
        "GPT-4 powered evaluation of content quality",
        "Identify strengths and weaknesses with clarity",
        "Keyword gap analysis — leaving no stone unturned",
        "Suggest resume improvements to achieve peak readiness",
      ],
      github: "https://github.com/Pravin-byte/AiResumeReviewer",
      live: null,
      icon: <FaBrain />,
      year: "2025 June",
    },
    {
      title: "InternTrack – Internship Tracker System",
      description:
        "A web-based command center for managing internship records, integrating with Google APIs to maintain real-time synchronization and flawless document governance.",
      technologies: ["HTML", "CSS", "JavaScript", "Node.js", "Google APIs"],
      features: [
        "Staff dashboard monitoring internship statuses like a battlefield map",
        "Google Sheets API integration for instant data insight",
        "Google Drive API ensuring organized document command",
        "Real-time synchronization across all fronts",
        "Custom dashboard interface, sleek and functional",
      ],
      github: "https://github.com/Pravin-byte/InternTrack",
      live: null,
      icon: <FaReact />,
      year: "2025 January",
    },
    {
      title: "Blockchain Demo",
      description:
        "A full-stack blockchain proving ground, illustrating block creation, transactions, and proof of work—built to master the essence of decentralized technology.",
      technologies: ["Node.js", "Express.js", "React.js", "MongoDB"],
      features: [
        "Forge and manage blocks with precision",
        "Add and validate transactions like a digital arbiter",
        "Implement Proof of Work to defend network integrity",
        "Visualize blockchain mechanics for clarity",
        "Deployed and battle-ready via Render",
      ],
      github: "https://github.com/Pravin-byte/BlockChain",
      live: "https://blockchain-9z1l.onrender.com",
      icon: <SiBlockchaindotcom />,
      year: "2025 August",
    },
  ];

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Missions</h2>
          <p className="section-subtitle">
            Behold my recent projects: epic battles against messy code, heroic
            full-stack feats, security traps that catch more than just cookies,
            and heroic attempts to master modern web tech.
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="project-header">
                <div className="project-icon">{project.icon}</div>
                <div className="project-meta">
                  <h3>{project.title}</h3>
                  <span className="project-year">{project.year}</span>
                </div>
              </div>

              <p className="project-description">{project.description}</p>

              <div className="project-technologies">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-features">
                <h4>Key Features:</h4>
                <ul>
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="project-links">
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link github"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGithub />
                  <span>Code</span>
                </motion.a>

                {project.live && (
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link live"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaExternalLinkAlt />
                    <span>Live Demo</span>
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
