import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import HotDessert from "./components/HotDessert/HotDessert";
import Banner from "./components/Banner/Banner";
import PopularRecepie from "./components/PopularRecepie/PopularRecepie";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import BecomeaFranchise from "./components/BecomeFranchise/BecomeaFranchise";
import "./index.css";

function HomePage() {
  return (
    <>
      <div id="home" className="relative overflow-hidden">
        <Hero />
      </div>
      <div id="about">
        <HotDessert />
      </div>
      <div id="banner">
        <Banner />
      </div>
      <div id="popular">
        <PopularRecepie />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </>
  );
}

function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const section = document.getElementById(location.state.scrollTo);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="overflow-x-hidden bg-white2 text-dark mt-32 md:mt-12">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/BecomeaFranchise" element={<BecomeaFranchise />} />
      </Routes>
    </div>
  );
}

export default App;
