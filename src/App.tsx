  import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection"
import StatsSection from "./components/Stats"
import AboutSection from "./components/About"
import Features from "./components/Features"
import TestimonialsSection from "./components/Testimonial"
import SpecialOffers from './components/WhatNew';
import Products from "./components/Products"
import ContactSection from "./components/Contact"
import Footer from "./components/Footer"

function App() {

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <AboutSection />  
      <SpecialOffers />
      <Features />
      <Products />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default App
