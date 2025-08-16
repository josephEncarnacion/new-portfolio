import React from 'react';
import { motion } from 'framer-motion';
import profileImage from '../img/joseph.png';
import './Home.css';

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-container">
        <motion.div
          className="home-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="home-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hi, I'm <span className="highlight">Joseph</span>
          </motion.h1>
          
          <motion.h2
            className="home-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Full Stack Developer
          </motion.h2>

          <motion.p
            className="home-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            I craft digital experiences that are both beautiful and functional.
            Specializing in modern web technologies and cloud solutions.
          </motion.p>

          <motion.div
            className="home-cta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.a
              href="#projects"
              className="cta-button primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              className="cta-button secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="home-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="image-container">
            <img src={profileImage} alt="Joseph - Full Stack Developer" className="profile-image" />
            <div className="image-overlay" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
