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
import RoomElite from './components/RoomElite'; // Import RoomElite component
import LocationSection from './components/Location'; 
import PrivacyPolicy from './components/PrivacyPolicy'; 
import RefundCancellationPolicy from './components/RefundPolicy';
import Termsandcondition from './components/Termsandcondition';
import Whatsapp from './components/Whatsapp';

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
              <CallButton />
              <Whatsapp />
            </>
          } 
        />

        {/* Rooms Page */}
        <Route path="/rooms" element={<Rooms />} />

        {/* RoomElite Page */}
        <Route path="/rooms/elite" element={<RoomElite />} />

        {/* Location Section (if any) */}
        <Route path="/location" element={<LocationSection />} />

        {/* Privacy Policy Page */}
        <Route path="/privacy" element={<PrivacyPolicy />} />
        
        {/* Refund and Cancellation Policy Page */}
        <Route path="/refund" element={<RefundCancellationPolicy />} />
        
        {/* Terms and Conditions Page */}
        <Route path="/tnc" element={<Termsandcondition />} />
      </Routes>
      
      <Footer />
    </Router>
  );
}

export default App;
