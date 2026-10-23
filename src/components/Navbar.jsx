import React, { useState } from 'react'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleLinkClick = () => {
    setMobileMenuOpen(false)
  }

  return (
    <header className="navbar-header">
      <div className="container nav-wrapper">
        <a href="#" className="nav-logo" aria-label="ServFex Home">
          Serv<span className="logo-accent">Fex</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#ambition">Our Ambition</a>
          <a href="#contact" className="nav-contact-btn">Contact</a>
        </nav>

        {/* Mobile Hamburger Toggle */}
        <button
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
        >
          <span className={`hamburger-bar ${mobileMenuOpen ? 'open' : ''}`} />
          <span className={`hamburger-bar ${mobileMenuOpen ? 'open' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          <a href="#about" onClick={handleLinkClick}>About</a>
          <a href="#services" onClick={handleLinkClick}>Services</a>
          <a href="#how-it-works" onClick={handleLinkClick}>How It Works</a>
          <a href="#ambition" onClick={handleLinkClick}>Our Ambition</a>
          <a href="#contact" onClick={handleLinkClick} className="mobile-contact-btn">Contact</a>
        </nav>
      )}
    </header>
  )
}
