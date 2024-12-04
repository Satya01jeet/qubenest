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
import CallButton from './components/CallButton';
import Rooms from './components/Rooms';
import RoomElite from './components/Roomelite';
import LocationSection from './components/Location';
import PrivacyPolicy from './components/PrivacyPolicy';
import RefundCancellationPolicy from './components/RefundPolicy';
import Termsandcondition from './components/Termsandcondition';
import Whatsapp from './components/Whatsapp';
import RoomImage from './components/RoomImage';
import Location from './components/Location';
import Checkout from './components/Checkout'; // Importing Checkout component

function App() {
  return (
    <Router>
      {/* Navbar */}
      <Navbar />

      {/* Routes */}
      <Routes>
        {/* Home Page */}
        <Route 
          path="/" 
          element={
            <>
              <HeroSection />
              <City />
              <Feature />
              <RoomImage />
              <TourSection />
              <Location />
              <Testimonial />
              <CallButton />
              <Whatsapp />
            </>
          } 
        />

        {/* Rooms Page for Qubenest Splendour */}
        <Route path="/rooms" element={<Rooms />} />

        {/* RoomElite Page for Qubenest Elite */}
        <Route path="/roomelite" element={<RoomElite />} />

        {/* Location Section */}
        <Route path="/location" element={<LocationSection />} />

        {/* Privacy Policy Page */}
        <Route path="/privacy" element={<PrivacyPolicy />} />
        
        {/* Refund and Cancellation Policy Page */}
        <Route path="/refund" element={<RefundCancellationPolicy />} />
        
        {/* Terms and Conditions Page */}
        <Route path="/tnc" element={<Termsandcondition />} />

        {/* Checkout Page */}
        <Route path="/checkout" element={<Checkout />} />
      </Routes>

      {/* Footer */}
      <Footer />
    </Router>
  );
}

export default App;
