import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";
import "./About.css";

const About = () => {
  const education = {
    degree: "B.E. Computer Science and Engineering",
    institution: "SSN College of Engineering",
    duration: "2021 - Present",
    cgpa: "7.11 / 10.00",
    details: "No History of Arrears — a record unbroken",
  };

  return (
    <section id="about" className="about section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Cybertronian Profile</h2>
          <p className="section-subtitle">
            I wield programming skills
            and battle-tested experience in the MERN stack. I forge applications
            that are scalable and resilient, built upon a solid foundation of
            computer science principles. Every line of code is a mission, every
            project a battle in the digital realm.
          </p>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3>Who I Am</h3>
            <p>
              As a digital warrior, I patrol the vast realm of Computer Science,
              forging solutions in the ever-evolving battlefield of technology.
            </p>
            <p>
              My current arsenal includes the MERN stack—MongoDB, Express.js,
              React.js, and Node.js. I craft applications that are resilient and
              functional, continuously refining my skills across both frontend
              and backend while ensuring the user experience is worthy of the
              digital frontier.
            </p>
          </motion.div>

          <motion.div
            className="about-education"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="education-card card">
              <div className="education-header">
                <FaGraduationCap className="education-icon" />
                <h3>Education</h3>
              </div>
              <div className="education-details">
                <h4>{education.degree}</h4>
                <p className="institution">{education.institution}</p>
                <p className="duration">{education.duration}</p>
                <div className="cgpa">
                  <span className="label">CGPA:</span>
                  <span className="value">{education.cgpa}</span>
                </div>
                <p className="details">{education.details}</p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="highlights-grid"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        ></motion.div>
      </div>
    </section>
  );
};

export default About;
