  import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection"
import StatsSection from "./components/Stats"
import AboutSection from "./components/About"
import Features from "./components/Features"
import TestimonialsSection from "./components/Testimonial"
import SpecialOffers from './components/WhatNew';
import ContactSection from "./components/Contact"
import Footer from "./components/Footer"

function App() {

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <AboutSection />  
      <SpecialOffers />
      <Features />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default App
