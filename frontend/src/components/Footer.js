export default function Footer() {
    return (
      <footer style={styles.footer}>
        <p>© {new Date().getFullYear()} Joseph Dev</p>
        <a href="https://github.com/josephEncarnacion" target="_blank" rel="noreferrer">GitHub</a>
      </footer>
    );
  }
  
  const styles = {
    footer: {
      textAlign: 'center',
      padding: '1rem',
      borderTop: '1px solid #f97316',
      marginTop: '2rem',
    }
  };
  