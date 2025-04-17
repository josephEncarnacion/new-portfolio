import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import './styles/global.css';
import { ThemeProvider } from './context/ThemeContext';
import Home from './pages/Home';
import About from './pages/About';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Projects from './pages/Projects';
import GitHubChart from './pages/GitHubChart';


function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: false,            // 🔁 allow animations on scroll up too
      mirror: true,  
    });
  }, []);
  return (
    <ThemeProvider>
      <Navbar />
      <main>
        <Home />
        <About />
        <Projects />
        <GitHubChart />
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
