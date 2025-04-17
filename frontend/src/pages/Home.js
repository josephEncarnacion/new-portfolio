export default function Home() {
    return (
      <section id="home" className="animate-text" style={styles.section}>
        <h1>Welcome to My Portfolio</h1>
        <p>I’m a Web Developer crafting digital experiences lorem Labore esse esse elit occaecat cupidatat duis adipisicing id culpa tempor anim.</p>
      </section>
    );
  }
  
  const styles = {
    section: {
      minHeight: '60vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      textAlign: 'center',
    }
  };
  