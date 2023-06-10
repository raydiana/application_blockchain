import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Details from './pages/Details/ShoesDetail'
import Shoes from './pages/Shoes/Shoes';
import Accueil from './pages/Accueil/Accueil';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Pants from './pages/Pants/Pants';
import Shirts from './pages/Shirts/Shirts';
import Shorts from './pages/Shorts/Shorts';
import Razors from "./pages/Razors/Razors";
import Hairs from "./pages/Hairs/Hairs";
import PantsDetails from "./pages/Details/PantsDetails/PantsDetails";
import ShirtsDetails from "./pages/Details/ShirtsDetails";
import './App.css';
import ShoppingCart from './pages/ShoppingCart/Shoppingcart';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Accueil />} />
        <Route path="/pants" element={<Pants />} />
        <Route path="/shirts" element={<Shirts />} />
        <Route path="/shorts" element={<Shorts />} />
        <Route path="/razors" element={<Razors />} />
        <Route path="/shoes" element={<Shoes />} />
        <Route path="/hairs" element={<Hairs />} />
        <Route path="/shoesdetail/:id" element={<Details />} />
        <Route path="/pantsdetails/:id" element={<PantsDetails />} />
        <Route path="/shirtsdetails/:id" element={<ShirtsDetails />} />
        <Route path="/About" element={<About/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/ShoppingCart" element={<ShoppingCart/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
