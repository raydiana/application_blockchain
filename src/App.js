import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Shoes from './pages/Shoes';
import Accueil from './pages/Accueil';
import About from './pages/About';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Accueil />} />
        <Route path="/shoes" element={<Shoes />} />
        <Route path="/About" element={<About/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
