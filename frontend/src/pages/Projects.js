const projects = [
  {
    title: "Portfolio Website",
    description: "Personal site built with React and dark mode toggle.",
    image: "https://placehold.in/400x300",
    github: "#",
    demo: "#",
  },
  {
    title: "Marikina Hotel Convention Reservation System",
    description: "Web app for hotel and convention reservations.",
    image: "https://placehold.in/400x300",
    github: "#",
    demo: "#",
  },
  {
    title: "Brgy. Nangka Emergency Response System",
    description: "Web app for emergency response management.",
    image: "https://placehold.in/400x300",
    github: "#",
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
              data-aos={idx % 2 === 0 ? 'fade-up' : 'fade-down'}
              data-aos-delay={200 + idx * 100}
              data-aos-duration="700"
              data-aos-offset="200"
              style={styles.card}
            >
              <img src={proj.image} alt={proj.title} style={styles.img} />
              <h3>{proj.title}</h3>
              <p>{proj.description}</p>
              <div style={styles.links}>
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
      gap: '1.5rem',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      marginTop: '2rem',
    },
    card: {
      padding: '1rem',
      border: '1px solid var(--primary)',
      borderRadius: '8px',
      backgroundColor: 'rgba(255,255,255,0.05)',
      transition: 'transform 0.3s ease',
    },
    img: {
      width: '100%',
      borderRadius: '4px',
    },
    links: {
      marginTop: '1rem',
      display: 'flex',
      justifyContent: 'space-around',
    },
  };