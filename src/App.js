import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Details from './pages/Details/ShoesDetail'
import Shoes from './pages/Shoes/Shoes';
import Accueil from './pages/Accueil/Accueil';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import './App.css';
import ShoppingCart from './pages/ShoppingCart/Shoppingcart';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Accueil />} />
        <Route path="/shoes" element={<Shoes />} />
        <Route path="/shoesdetail" element={<Details/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/ShoppingCart" element={<ShoppingCart/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
