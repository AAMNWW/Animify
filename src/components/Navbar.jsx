import React from 'react'
import './Navbar.css'

const Logo = () => (
  <svg width="38" height="22" viewBox="0 0 38 22" fill="none">
    <path d="M5.5 11C5.5 7.962 7.962 5.5 11 5.5C14.038 5.5 16.5 7.962 16.5 11C16.5 14.038 14.038 16.5 11 16.5C7.962 16.5 5.5 14.038 5.5 11Z" stroke="white" strokeWidth="2" fill="none"/>
    <path d="M16.5 11C16.5 7.962 18.962 5.5 22 5.5C25.038 5.5 27.5 7.962 27.5 11" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round"/>
    <path d="M27.5 11C27.5 14.038 29.962 16.5 33 16.5" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round"/>
    <circle cx="11" cy="11" r="3" fill="white"/>
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
