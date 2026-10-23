import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import HowItWorks from './components/HowItWorks'
import Ambition from './components/Ambition'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

export default function App() {
  return (
    <div className="servfex-app">
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Services />
        <HowItWorks />
        <Ambition />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
