import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaMapMarkerAlt,
  FaLinkedin,
} from "react-icons/fa";
import "./Contact.css";
import { toast } from "react-toastify";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  const formId = process.env.REACT_APP_FORMSPREE_FORM_ID;

  // Replace with your Formspree endpoint (get this after creating a form in Formspree dashboard)
  const FORMSPREE_ENDPOINT = `https://formspree.io/f/${formId}`;

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "pravin2210019@ssn.edu.in",
      link: "mailto:pravin2210019@ssn.edu.in",
    },
    {
      icon: <FaGithub />,
      title: "GitHub",
      value: "github.com/Pravin-byte",
      link: "https://github.com/Pravin-byte",
    },
    {
      icon: <FaLinkedin />,
      title: "LinkedIn",
      value: "linkedin.com/in/pravinbyte",
      link: "https://www.linkedin.com/in/pravinbyte",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      value: "Chennai, Tamil Nadu, India",
      link: null,
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("SUCCESS");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("ERROR");
      }

      if (status === "SUCCESS") {
        toast.success("Message sent successfully!");
      }
      if (status === "ERROR") {
        toast.error("Oops! Something went wrong.");
      }
    } catch (error) {
      setStatus("ERROR");
    }

    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Signal the Commander</h2>
          <p className="section-subtitle">
            I remain vigilant for worthy opportunities and projects of
            distinction. Approach with intent, and we may forge a collaboration
            worthy of legend. Only serious proposals shall summon my response.
          </p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3>Report for Duty</h3>
            <p>
              The time has come to seek new missions and projects of valor.
              Approach with questions or greetings, but only those of merit will
              awaken my response. Proceed with honor.
            </p>

            <div className="contact-details">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="contact-item"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="contact-icon">{info.icon}</div>
                  <div className="contact-text">
                    <h4>{info.title}</h4>
                    {info.link ? (
                      <a
                        href={info.link}
                        target={
                          info.link.startsWith("http") ? "_blank" : "_self"
                        }
                        rel="noopener noreferrer"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <span>{info.value}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="contact-form-container"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <form className="contact-form card" onSubmit={handleSubmit}>
              <h3>Send Intel</h3>

              <div className="form-group">
                <label htmlFor="name">Identity</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Your name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Intel channel</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Intel Header</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  placeholder="What's this about?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Mission Report</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="5"
                  placeholder="Your message..."
                />
              </div>

              <motion.button
                type="submit"
                className="btn btn-primary submit-btn"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isSubmitting ? "Transmiting..." : "Transmit Intel"}
              </motion.button>
            </form>
          </motion.div>
        </div>

        <motion.div
          className="contact-footer"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p>
            Traveler… you have reached the end of this domain. Proceed with
            caution. Send your message only if your intentions are honorable,
            for I shall not respond to folly. The fate of our communication
            rests in your hands.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
