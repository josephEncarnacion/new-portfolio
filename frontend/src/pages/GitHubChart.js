import { useTheme } from '../context/ThemeContext';

export default function GitHubChart() {
  const { darkMode } = useTheme();

  return (
    <section id="github" style={styles.wrapper}>
      <h2 data-aos="fade-up" data-aos-delay="0" style={styles.title}>
        💻 GitHub Activity
      </h2>

      <p data-aos="fade-up" data-aos-delay="100" style={styles.subtitle}>
        My open-source presence over time.
      </p>

      <div
        data-aos="zoom-in-up"
        data-aos-delay="200"
        data-aos-duration="800"
        data-aos-offset="200"
        style={{
          ...styles.card,
          backgroundColor: darkMode ? '#0d1117' : '#ffffff'
        }}
      >
        <img
          src="https://ghchart.rshah.org/josephEncarnacion"
          alt="Joseph Encarnacion GitHub chart"
          style={{
            width: '100%',
            maxWidth: '1300px', // increase as needed
            height: 'auto',
            transform: 'scale(1.1)', // optional zoom effect
            display: 'block',
            margin: '0 auto',
          }}
        />
      </div>
    </section>
  );
}

const styles = {
  wrapper: {
    padding: '4rem 2rem',
    textAlign: 'center',
  },
  title: {
    fontSize: '2.2rem',
    marginBottom: '0.5rem',
  },
  subtitle: {
    color: 'var(--primary)',
    marginBottom: '2rem',
  },
  card: {
    padding: '3rem 1rem',
    maxWidth: '1400px',
    margin: '0 auto',
    overflowX: 'auto',
  },
  chart: {
    width: '100%',
    maxWidth: '1200px',
    height: 'auto',
    margin: '0 auto',
  }
};
