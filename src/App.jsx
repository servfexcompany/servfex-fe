import React from 'react'
import './App.css'

export default function App() {
  return (
    <main className="coming-soon-page">
      {/* Top spacer for optical balance */}
      <div className="top-spacer" aria-hidden="true"></div>

      {/* Main brand text dead center */}
      <div className="brand-hero">
        <h1 className="brand-title">ServFex</h1>
        <p className="brand-tagline">MAKING LIFE EASIER</p>
      </div>

      {/* Badge positioned very down at the bottom */}
      <div className="bottom-badge-container">
        <div className="coming-soon-badge">
          <span className="pulse-dot"></span>
          <span className="badge-text">COMING VERY SOON</span>
        </div>
      </div>
    </main>
  )
}
