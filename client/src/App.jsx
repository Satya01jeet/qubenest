import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import City from './components/City';
import Feature from './components/Feature';
import TourSection from './components/TourSection';
import Testimonial from './components/Testimonial';
import CallButton from './components/CallButton';
import RoomSplendour from './components/RoomSplendour';
import RoomElite from './components/Roomelite';
import LocationSection from './components/Location';
import PrivacyPolicy from './components/PrivacyPolicy';
import RefundCancellationPolicy from './components/RefundPolicy';
import Termsandcondition from './components/Termsandcondition';
import Whatsapp from './components/Whatsapp';
import RoomImage from './components/RoomImage';
import Location from './components/Location';
import Checkout from './components/Checkout';
import Room from './components/Room'

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      {/* Navbar */}
      <Navbar />
      <ScrollToTop />

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

        <Route path='/rooms/:buildingName' element={<Room />} />
        
        {/* Rooms Page for Qubenest Splendour */}
        {/* <Route path="/rooms_splendour" element={<RoomSplendour />} /> */}

        {/* RoomElite Page for Qubenest Elite */}
        {/* <Route path="/rooms_elite" element={<RoomElite />} /> */}

        {/* Location Section */}
        <Route path="/location" element={<LocationSection />} />

        {/* Privacy Policy Page */}
        <Route path="/privacy" element={<PrivacyPolicy />} />

        {/* Refund and Cancellation Policy Page */}
        <Route path="/refund" element={<RefundCancellationPolicy />} />

        {/* Terms and Conditions Page */}
        <Route path="/tnc" element={<Termsandcondition />} />

        {/* Payments route */}
        <Route path='/rooms_splendour/:building/:type/payment' element={<Checkout />} />
        <Route path='/rooms_elite/:building/:type/payment' element={<Checkout />} />
        
      </Routes>

      {/* Footer */}
      <Footer />
    </Router>
  );
}

export default App;
