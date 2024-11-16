import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import HeroSection from './components/HeroSection';
import City from './components/City';
import Feature from './components/Feature';
import TourSection from './components/TourSection';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';
import Rooms from './components/Rooms';
import LocationSection from './components/Location';
import PrivacyPolicy from './components/PrivacyPolicy'; // Import the PrivacyPolicy component
import RefundCancellationPolicy from './components/RefundPolicy';

function App() {
  return (
    <Router>
      <Navbar />
      
      <Routes>
        {/* Main Home Page */}
        <Route 
          path="/" 
          element={
            <>
              <HeroSection />
              <City />
              <Feature />
              <TourSection />
              <Testimonial />
              <LocationSection />
              <Contact />
            </>
          } 
        />

        {/* Rooms Page */}
        <Route path="/rooms" element={<Rooms />} />

        {/* Privacy Policy Page */}
        <Route path="/privacy" element={<PrivacyPolicy />} />
      <Route path="/refund" element={<RefundCancellationPolicy/>}/>
      </Routes>
      
      
      <Footer />
    </Router>
  );
}

export default App;
