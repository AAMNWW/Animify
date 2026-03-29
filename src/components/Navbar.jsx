import React from 'react'
import './Navbar.css'

const Logo = () => (
  <svg width="46" height="28" viewBox="0 0 46 28" fill="none">
    <path d="M7 14C7 10.134 10.134 7 14 7C17.866 7 21 10.134 21 14C21 17.866 17.866 21 14 21C10.134 21 7 17.866 7 14Z"
      stroke="url(#logoGrad)" strokeWidth="2.2" fill="none"/>
    <path d="M21 14C21 10.134 24.134 7 28 7C31.866 7 35 10.134 35 14"
      stroke="url(#logoGrad)" strokeWidth="2.2" fill="none" strokeLinecap="round"/>
    <path d="M35 14C35 17.866 38.134 21 42 21"
      stroke="url(#logoGrad)" strokeWidth="2.2" fill="none" strokeLinecap="round"/>
    <circle cx="14" cy="14" r="3.5" fill="url(#logoGrad)"/>
    <defs>
      <linearGradient id="logoGrad" x1="7" y1="14" x2="42" y2="14" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#00AEFF"/>
        <stop offset="100%" stopColor="#1778FF"/>
      </linearGradient>
    </defs>
  </svg>
)

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <a href="#" className="nav-logo">
          <Logo />
          <span className="nav-logo-text">Animify</span>
        </a>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#features">Template</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#">About</a></li>
        </ul>
        <a href="#" className="nav-cta">Try it now</a>
      </div>
    </nav>
  )
}