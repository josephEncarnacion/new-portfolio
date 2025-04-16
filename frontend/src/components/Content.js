import React from 'react';

export default function Content() {
  return (
    <section style={styles.section} id="home">
      <h1>Hello, I'm a Web Developer</h1>
      <p>I build modern web apps with React.js</p>
    </section>
  );
}

const styles = {
  section: {
    padding: '2rem',
    textAlign: 'center',
    backgroundColor: '#f0f0f0',
    minHeight: '80vh',
  },
};
