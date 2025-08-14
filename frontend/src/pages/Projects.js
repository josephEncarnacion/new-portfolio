// src/components/Projects.js

import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import hotelReservation from '../img/hotelreservation.png';
import portfolio from '../img/image1.png';
import newDispatching from '../img/image.png';
import reservation1 from '../img/dispatching1.png';
import reservation2 from '../img/dispatching2.png'; // replace with your real images
import reservation3 from '../img/dispatching3.png';
import reservation4 from '../img/dispatching4.png';
import reservation5 from '../img/dispatching5.png';
import reservation6 from '../img/dispatching6.png';
import reservation7 from '../img/dispatching7.png';

const projects = [
  {
    title: "Portfolio Website",
    description: "Personal site built with React and dark mode toggle.",
    image: [portfolio],
    github: "https://github.com/josephEncarnacion/new-portfolio.git"
  },
  {
    title: "Marikina Hotel Convention Reservation System",
    description: "Full Stack Web app for hotel and convention reservations.",
    image: [hotelReservation],
    github: "https://github.com/josephEncarnacion/marikina-conventions.git"
  },
  {
    title: "Brgy. Nangka Emergency Response System",
    description: "Full Stack Web app for emergency response management.",
    image: [newDispatching, reservation1, reservation2, reservation3, reservation4, reservation5, reservation6, reservation7],
    github: "https://github.com/josephEncarnacion/newDispatching.git"
  },
];

export default function Projects() {
  const [currentSlide, setCurrentSlide] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImages, setModalImages] = useState([]);
  const [modalIndex, setModalIndex] = useState(0);

  useEffect(() => {
    AOS.init({ once: true, duration: 1000 });
  }, []);

  // Auto-play slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev =>
        projects.reduce((acc, _, idx) => {
          const total = projects[idx].image.length;
          acc[idx] = ((prev[idx] || 0) + 1) % total;
          return acc;
        }, {})
      );
    }, 3000); // 3 seconds
    return () => clearInterval(interval);
  }, []);

  const nextSlide = (idx) => {
    setCurrentSlide(prev => ({
      ...prev,
      [idx]: (prev[idx] + 1) % projects[idx].image.length
    }));
  };

  const prevSlide = (idx) => {
    setCurrentSlide(prev => ({
      ...prev,
      [idx]: (prev[idx] - 1 + projects[idx].image.length) % projects[idx].image.length
    }));
  };

  const openModal = (images, index) => {
    setModalImages(images);
    setModalIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  const nextModalImage = () =>
    setModalIndex((prev) => (prev + 1) % modalImages.length);

  const prevModalImage = () =>
    setModalIndex((prev) => (prev - 1 + modalImages.length) % modalImages.length);

  return (
    <section id="projects" style={styles.wrapper}>
      <h2 data-aos="fade-up">Projects</h2>
      <p data-aos="fade-up" data-aos-delay="100">
        A few things I've built recently.
      </p>
      <div style={styles.grid}>
        {projects.map((proj, idx) => {
          const images = proj.image;
          const current = currentSlide[idx] || 0;

          return (
            <div key={idx} style={styles.card} data-aos="fade-up" data-aos-delay={idx * 150}>
              <div style={styles.imageContainer}>
                {images.length > 1 && (
                  <>
                    <button style={styles.navBtn} onClick={() => prevSlide(idx)}>⟨</button>
                    <button style={{ ...styles.navBtn, right: '10px' }} onClick={() => nextSlide(idx)}>⟩</button>
                  </>
                )}
                <img
                  src={images[current]}
                  alt={proj.title}
                  style={{ ...styles.img, opacity: 1, transition: 'opacity 0.8s ease' }}
                  onClick={() => openModal(images, current)}
                />
              </div>
              <h3>{proj.title}</h3>
              <p>{proj.description}</p>
              <div style={styles.links}>
                <a href={proj.github} target="_blank" rel="noreferrer">GitHub</a>
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal */}
      {modalOpen && (
        <div style={styles.modalOverlay} onClick={closeModal}>
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button style={styles.modalClose} onClick={closeModal}>×</button>
            <button style={styles.modalNav} onClick={prevModalImage}>⟨</button>
            <img src={modalImages[modalIndex]} alt="Full" style={styles.modalImg} />
            <button style={{ ...styles.modalNav, right: '15px' }} onClick={nextModalImage}>⟩</button>
          </div>
        </div>
      )}
    </section>
  );
}

const styles = {
  wrapper: { padding: '4rem 2rem', textAlign: 'center' },
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
    position: 'relative'
  },
  imageContainer: {
    position: 'relative',
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
    cursor: 'pointer',
  },
  navBtn: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    background: 'rgba(255,255,255,0.8)',
    color: '#333',
    border: 'none',
    borderRadius: '50%',
    width: '35px',
    height: '35px',
    fontSize: '1.2rem',
    cursor: 'pointer',
    zIndex: 2,
    transition: 'background 0.3s ease',
  },
  links: {
    marginTop: '1rem',
    display: 'flex',
    justifyContent: 'center',
  },
  modalOverlay: {
    position: 'fixed',
    top: 0, left: 0,
    width: '100%', height: '100%',
    background: 'rgba(0,0,0,0.8)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    zIndex: 9999,
  },
  modalContent: {
    position: 'relative',
    maxWidth: '90%',
    maxHeight: '90%',
  },
  modalClose: {
    position: 'absolute',
    top: '10px',
    right: '15px',
    background: 'none',
    color: '#fff',
    border: 'none',
    fontSize: '2rem',
    cursor: 'pointer',
  },
  modalNav: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    background: 'rgba(255,255,255,0.7)',
    color: '#333',
    border: 'none',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    fontSize: '1.5rem',
    cursor: 'pointer',
    transition: 'background 0.3s ease',
  },
  modalImg: {
    maxWidth: '100%',
    maxHeight: '80vh',
    borderRadius: '8px',
  },
};
