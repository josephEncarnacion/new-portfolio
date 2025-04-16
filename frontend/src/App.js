import React from 'react';
import './styles/global.css';
import { ThemeProvider } from './context/ThemeContext';
import Home from './pages/Home';
import About from './pages/About';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <main>
        <Home />
        <About />
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
