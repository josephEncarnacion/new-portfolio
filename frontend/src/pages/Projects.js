// src/components/Projects.js

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import hotelReservation from '../img/hotelreservation.png';
import portfolio from '../img/image1.png';
import newDispatching from '../img/image.png';

const projects = [
  {
    title: "Portfolio Website",
    description: "Personal site built with React and dark mode toggle.",
    image: portfolio,
    github: "#",
    demo: "#",
  },
  {
    title: "Marikina Hotel Convention Reservation System",
    description: "Full Stack Web app for hotel and convention reservations.",
    image: hotelReservation,
    github: "#",
    demo: "#",
  },
  {
    title: "Brgy. Nangka Emergency Response System",
    description: " Full Stack Web app for emergency response management.",
    image: newDispatching,
    github: "https://github.com/josephEncarnacion/newDispatching.git",
    demo: "#",
  },
  {
    title: "Kronos",
    description: "Web app for time keeping for employee.",
    image: "https://placehold.in/400x300",
    github: "#",
    demo: "#",
  },
];

export default function Projects() {
  useEffect(() => {
    AOS.init({ once: true, duration: 1000 });
  }, []);

  return (
    <section id="projects" style={styles.wrapper}>
      <h2 data-aos="fade-up">Projects</h2>
      <p data-aos="fade-up" data-aos-delay="100">
        A few things I've built recently.
      </p>
      <div style={styles.grid}>
        {projects.map((proj, idx) => (
          <div
            key={idx}
            style={styles.card}
            data-aos="fade-up"
            data-aos-delay={idx * 150}
            data-aos-duration="800"
            data-aos-once="true"
          >
            <div style={styles.imageContainer}>
              <img
                src={proj.image}
                alt={proj.title}
                style={styles.img}
                data-aos="zoom-in"
                data-aos-delay={idx * 150 + 100}
              />
            </div>
            <h3 data-aos="fade-up" data-aos-delay={idx * 150 + 200}>{proj.title}</h3>
            <p data-aos="fade-up" data-aos-delay={idx * 150 + 250}>{proj.description}</p>
            <div style={styles.links} data-aos="fade-up" data-aos-delay={idx * 150 + 300}>
              <a href={proj.github} target="_blank" rel="noreferrer">GitHub</a>
              <a href={proj.demo} target="_blank" rel="noreferrer">Demo</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  wrapper: {
    padding: '4rem 2rem',
    textAlign: 'center',
  },
  grid: {
    display: 'grid',
    gap: '2rem',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    marginTop: '2rem',
  },
  card: {
    padding: '1.5rem',
    border: '1px solid var(--primary)',
    borderRadius: '12px',
    backgroundColor: 'rgba(255,255,255,0.05)',
    transition: 'transform 0.3s ease',
  },
  imageContainer: {
    width: '100%',
    height: '200px',
    overflow: 'hidden',
    borderRadius: '8px',
    marginBottom: '1rem',
  },
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '8px',
    transition: 'transform 0.3s ease',
  },
  links: {
    marginTop: '1rem',
    display: 'flex',
    justifyContent: 'space-around',
  },
};
