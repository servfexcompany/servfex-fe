import React from 'react'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-radar-ring" aria-hidden="true" />
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-eyebrow">
            <span className="eyebrow-line" aria-hidden="true" />
            <span>A smarter service experience</span>
          </div>

          <h1 className="hero-title">
            Everyday services.<br />
            <span className="hero-title-highlight">Made simpler.</span>
          </h1>

          <p className="hero-description">
            ServFex is a service platform designed to connect customers
            with local service-provider businesses for convenient home
            services. We aim to bring service discovery, booking
            coordination and service delivery into one organised experience.
          </p>

          <div className="hero-buttons">
            <a href="#about" className="btn btn-primary">
              Discover ServFex &nbsp; ↘
            </a>
            <a href="mailto:care@servfex.com?subject=ServFex%20Enquiry" className="btn btn-outline">
              Contact Our Team
            </a>
          </div>

          <div className="hero-details">
            <div className="detail-item">
              <span className="detail-label">Brand:</span>
              <strong className="detail-value">ServFex</strong>
            </div>
            <div className="detail-item">
              <span className="detail-label">Company:</span>
              <strong className="detail-value">StrategicScale Private Limited</strong>
            </div>
            <div className="detail-item">
              <span className="detail-label">Our promise:</span>
              <strong className="detail-value">Making Life Easier</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
