import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
import './Contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    emailjs.send(   
      'service_aneua8m',     // e.g. "service_abc123"   
      'template_80asvpy',    // e.g. "template_xyz"
      formData,              // must match your EmailJS template fields
      'C4hWq5FSlfgDPxXdD'      // e.g. "Nz9vAx8sdFs..."
    ).then(() => {
      alert('Message sent successfully! 🚀');
      setFormData({ name: '', email: '', message: '' });
    }).catch((error) => {
      console.error(error);
      alert('Failed to send message. Try again.');
    });
  };
  

  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/josephEncarnacion' },
    { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/joseph-encarnacion-31a564331' },
    { icon: <FaFacebook />, url: 'https://www.facebook.com/joseph.encarnacion.956186' },
  ];

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="contact-header"
        >
          <h2>Let's work together</h2>
          <p>I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.</p>
        </motion.div>

        <div className="contact-content">
          <motion.form
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="contact-form"
          >
            <div className="form-group">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="submit-btn"
            >
              Send Message
            </motion.button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="social-links"
          >
            <h3>Connect with me</h3>
            <div className="social-icons">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
  