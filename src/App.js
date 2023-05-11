import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
<<<<<<< HEAD
import Shoes from './pages/Shoes/Shoes';
import Accueil from './pages/Accueil/Accueil';
import Details from './pages/Details/ShoesDetail'
=======
import Shoes from './pages/Shoes';
import Accueil from './pages/Accueil';
import About from './pages/About';
>>>>>>> d20d458731bb3fbdfacc3795c37e6583f420bfd6
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Accueil />} />
        <Route path="/shoes" element={<Shoes />} />
<<<<<<< HEAD
        <Route path="/shoesdetail" element={<Details/>}></Route>
=======
        <Route path="/About" element={<About/>} />
>>>>>>> d20d458731bb3fbdfacc3795c37e6583f420bfd6
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
