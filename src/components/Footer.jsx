import React from 'react'

const CURRENT_YEAR = new Date().getFullYear()

export default function Footer() {
  const currentYear = CURRENT_YEAR

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#" className="nav-logo" aria-label="ServFex Home">
              Serv<span className="logo-accent">Fex</span>
            </a>
            <p className="footer-description">
              Making Life Easier. ServFex is a service platform designed
              to connect customers with local service-provider businesses
              for everyday service needs.
            </p>
          </div>

          <nav className="footer-links" aria-label="Footer navigation">
            <a href="#about">About Us</a>
            <a href="#services">Services</a>
            <a href="#how-it-works">How It Works</a>
            <a href="#ambition">Our Ambition</a>
            <a href="mailto:StrategicScale@servfex.com">StrategicScale@servfex.com</a>
          </nav>
        </div>

        <div className="footer-bottom">
          <span className="copyright-text">
            © {currentYear} <strong className="company-name">StrategicScale Private Limited</strong>. All rights reserved.
          </span>
          <span className="brand-disclaimer">
            ServFex is a brand of StrategicScale Private Limited.
          </span>
        </div>
      </div>
    </footer>
  )
}
