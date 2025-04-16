import React from 'react';

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>MyPortfolio</div>
      <ul style={styles.navLinks}>
        <li><a href="#home">Home</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1rem 2rem',
    backgroundColor: '#0d1117',
    color: 'white',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: '1.2rem',
  },
  navLinks: {
    listStyle: 'none',
    display: 'flex',
    gap: '1rem',
  }
};
