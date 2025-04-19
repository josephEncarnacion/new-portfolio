import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaDatabase, FaMicrosoft } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiFirebase, SiJavascript, SiTailwindcss } from 'react-icons/si';
import './About.css';

const About = () => {
  const techStack = [
    { name: 'React', icon: <FaReact />, color: '#61DAFB' },
    { name: 'Node.js', icon: <FaNodeJs />, color: '#339933' },
    { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
    { name: 'MS SQL', icon: <FaMicrosoft />, color: '#CC2927' },
    { name: 'Express', icon: <SiExpress />, color: '#000000' },
    { name: 'Firebase', icon: <SiFirebase />, color: '#FFCA28' },
    { name: 'Azure', icon: <FaMicrosoft />, color: '#0089D6' },
    { name: 'JavaScript', icon: <SiJavascript />, color: '#F7DF1E' },
    { name: 'Tailwind', icon: <SiTailwindcss />, color: '#38B2AC' },
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="about-header"
        >
          <h2>About Me</h2>
          <div className="intro-text">
            <p className="highlight">Hey there! I'm Joseph Encarnacion</p>
            <p>A passionate full-stack developer who loves turning complex problems into simple, beautiful, and intuitive solutions.</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="tech-stack"
        >
          <h3>Tech Stack</h3>
          <div className="tech-grid">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                className="tech-item"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="tech-icon" style={{ color: tech.color }}>
                  {tech.icon}
                </div>
                <span>{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="about-content"
        >
          <div className="skills-section">
            <h3>What I Do</h3>
            <div className="skills-grid">
              <motion.div
                className="skill-card"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaDatabase className="skill-icon" />
                <h4>Backend Development</h4>
                <p>Building robust and scalable server-side applications with Node.js, Express, and various databases.</p>
              </motion.div>
              <motion.div
                className="skill-card"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaReact className="skill-icon" />
                <h4>Frontend Development</h4>
                <p>Creating beautiful and responsive user interfaces with React, Tailwind CSS, and modern JavaScript.</p>
              </motion.div>
              <motion.div
                className="skill-card"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaMicrosoft className="skill-icon" />
                <h4>Cloud & DevOps</h4>
                <p>Deploying and managing applications on cloud platforms like Azure and Firebase.</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
  