import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const { toggle, darkMode } = useTheme();

  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>🧠 Joseph Dev</div>
      <ul style={styles.links}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
      </ul>
      <button onClick={toggle} style={styles.button}>
        {darkMode ? '☀️' : '🌙'}
      </button>
    </nav>
  );
}

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: '1.5rem',
  },
  links: {
    listStyle: 'none',
    display: 'flex',
    gap: '1rem',
  },
  button: {
    background: 'transparent',
    fontSize: '1.2rem',
    cursor: 'pointer',
  }
};
