import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import Careers from './components/Careers';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Kaps from './components/Kaps';
import Kccsm from './components/Kccsm';

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


function App() {
  
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/services" element={<Services />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/kaps" element={<Kaps />} />
      <Route path="/kccsm" element={<Kccsm />} />
      </Routes>
   
    </Router>
  );
}

export default App;