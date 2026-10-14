import React from 'react'
import logoImg from './assets/logo.png'
import './App.css'

export default function App() {
  return (
    <main className="coming-soon-page">
      <div className="image-wrapper">
        <img
          src={logoImg}
          alt="ServFex - Making Life Easier"
          className="brand-image"
        />
      </div>

      <div className="coming-soon-badge">
        <span className="pulse-dot"></span>
        <span className="badge-text">COMING VERY SOON</span>
      </div>
    </main>
  )
}
