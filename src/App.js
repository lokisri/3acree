import React from "react";
import Navbar from './components/Navbar';
import BuyLands from './components/BuyLands';
import Premium from './components/Premium';
import SellMyLand from './components/SellMyLand';
import Testimonials from './components/Testimonials';
import Services from './components/Services';
import Home from './components/Home';
import Footer from "./components/Footer";
import { LandProvider } from "./LandContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <LandProvider>
    <BrowserRouter>
    <Navbar/>
    {/* <Footer/> */}
      <Routes>
         <Route path="/" element={<Home />} />
        <Route index element={<Home />} /> 
        <Route path="/buylands" element={<BuyLands />} />
        <Route path="/premium" element={<Premium />} />
        <Route path="/sellmyland" element={<SellMyLand />} />
        <Route path="/services" element={<Services />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/navbar" element={<Navbar />} />
         {/* Add more routes as needed */}
      </Routes>
    </BrowserRouter>
    </LandProvider>
  );
}

export default App;
