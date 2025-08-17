import React from 'react';
import { motion } from 'framer-motion';
import {
  FaReact, FaNodeJs, FaDatabase, FaShieldAlt,
  FaCode, FaServer, FaBrain, FaHtml5, FaCss3Alt, FaGitAlt, FaCloudUploadAlt
} from 'react-icons/fa';
import { SiMongodb, SiExpress, SiJavascript, SiPython, SiC, SiTailwindcss } from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import './Skills.css';
import cert1 from "../assets/JavaScript Algorithms and Data Structures Certification.png";
import cert2 from "../assets/Responsive_web_design_certificate.png";

const Skills = () => {
  const skillCategories = [
    {
      title: "Web Operations Hub",
      icon: <FaReact />,
      skills: [
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "Express.js", icon: <SiExpress /> },
        { name: "React.js", icon: <FaReact /> },
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "HTML5", icon: <FaHtml5 /> },
        { name: "CSS3", icon: <FaCss3Alt /> },
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "Vercel", icon: <FaCloudUploadAlt /> },
        { name: "Git", icon: <FaGitAlt /> },
        { name: "Render", icon: <FaCloudUploadAlt /> }
      ]
    },
    {
      title: "Security Shields",
      icon: <FaShieldAlt />,
      skills: [
        { name: "JWT Authentication", icon: <FaShieldAlt /> },
        { name: "CSRF Protection", icon: <FaShieldAlt /> },
        { name: "XSS Prevention", icon: <FaShieldAlt /> },
        { name: "Secure Cookies", icon: <FaShieldAlt /> },
        { name: "OAuth 2.0", icon: <FaShieldAlt /> }
      ]
    },
    {
      title: "Programming Armory",
      icon: <FaCode />,
      skills: [
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "Python", icon: <SiPython /> },
        { name: "Java", icon: <FaJava /> },
        { name: "C", icon: <SiC /> },
        { name: "SQL", icon: <FaDatabase /> },
      ]
    },
    {
      title: "Tactical Core",
      icon: <FaBrain />,
      skills: [
        { name: "Data Structures & Algorithms", icon: <FaCode /> },
        { name: "Operating Systems", icon: <FaServer /> },
        { name: "Computer Networks", icon: <FaServer /> },
        { name: "Database Management", icon: <FaDatabase /> },
        { name: "AI/ML", icon: <FaBrain /> },
      ]
    }
  ];

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Tech Arsenal</h2>
          <p className="section-subtitle">
            A vigilant catalog of my technical arsenal, spanning the many domains of software development and computer science. 
  Each skill listed represents the foundation of my prowess—ready to be honed and wielded in the battles ahead.
          </p>
        </motion.div>

        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="skill-category"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="category-header">
                <div className="category-icon">
                  {category.icon}
                </div>
                <h3>{category.title}</h3>
              </div>

              <div className="skills-container">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="skill-chip"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="skill-icon">{skill.icon}</span>
                    <span className="skill-name">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="certificates-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h3>Battle Credentials</h3>
          <div className="certificates-grid">
            <motion.div
              className="certificate-card"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <img src={cert1} alt="Responsive Web Design Certificate" className="certificate-img" />
              
            </motion.div>

            <motion.div
              className="certificate-card"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <img src={cert2} alt="JavaScript Algorithms and Data Structures Certificate" className="certificate-img" />
              
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
