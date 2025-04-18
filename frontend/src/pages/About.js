export default function About() {
    return (
      <section id="about" style={styles.about}>
        <h2 style={styles.title}>About Me</h2>
        <p>
          I’m Joseph Encarnacion, a developer . lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </section>
    );
  }
  
  const styles = {
    about: {
      padding: '2rem',
      textAlign: 'center',
    },
    title: {
      fontSize: "2.2rem",
      marginBottom: "0.5rem",
    },
  };
  