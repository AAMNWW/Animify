import React from 'react'
import './Clients.css'

export default function Clients() {
  return (
    <div className="clients reveal">
      <p className="clients-label">Our Clients</p>
      <div className="clients-row">

        {/* 1 — LOOO wordmark */}
        <div className="client-logo">
          <svg width="130" height="40" viewBox="0 0 130 40" fill="none">
            <rect x="0"  y="6" width="7"  height="28" rx="2"  fill="white"/>
            <rect x="0"  y="27" width="22" height="7"  rx="2"  fill="white"/>
            <rect x="26" y="6" width="22" height="28" rx="11" fill="white"/>
            <rect x="32" y="12" width="10" height="16" rx="5"  fill="black"/>
            <rect x="52" y="6" width="34" height="28" rx="11" fill="white"/>
            <rect x="58" y="12" width="22" height="16" rx="5"  fill="black"/>
            <rect x="90" y="6" width="22" height="28" rx="11" fill="white"/>
            <rect x="96" y="12" width="10" height="16" rx="5"  fill="black"/>
            <circle cx="120" cy="31" r="4" fill="white"/>
          </svg>
        </div>

        {/* 2 — Four rounded squares */}
        <div className="client-logo">
          <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
            <rect x="1"  y="1"  width="15" height="15" rx="7" fill="white"/>
            <rect x="22" y="1"  width="15" height="15" rx="7" fill="white"/>
            <rect x="1"  y="22" width="15" height="15" rx="7" fill="white"/>
            <rect x="22" y="22" width="15" height="15" rx="7" fill="white"/>
          </svg>
        </div>

        {/* 3 — Shield icon + Logoipsum */}
        <div className="client-logo">
          <svg width="28" height="32" viewBox="0 0 28 32" fill="none">
            <path d="M14 1L26 7V17C26 23.627 20.627 29.627 14 31C7.373 29.627 2 23.627 2 17V7L14 1Z" fill="white"/>
            <path d="M14 8C14 8 10 12 10 16C10 18.2 11.8 20 14 20C16.2 20 18 18.2 18 16C18 12 14 8 14 8Z" fill="black"/>
            <circle cx="14" cy="24" r="2" fill="black"/>
          </svg>
          <span style={{ fontFamily: 'Satoshi,sans-serif', fontWeight: 700, fontSize: 17, color: 'white', letterSpacing: '-0.03em' }}>
            Logoipsum
          </span>
        </div>

        {/* 4 — House / app icon */}
        <div className="client-logo">
          <svg width="36" height="38" viewBox="0 0 36 38" fill="none">
            <rect x="1" y="1" width="34" height="34" rx="8" fill="white"/>
            <path d="M18 8L28 16V30H22V22H14V30H8V16L18 8Z" fill="black"/>
            <circle cx="24" cy="10" r="2.5" fill="white"/>
          </svg>
        </div>

        {/* 5 — Triple loop wordmark */}
        <div className="client-logo">
          <svg width="96" height="34" viewBox="0 0 96 34" fill="none">
            <path d="M4 17C4 9.82 9.82 4 17 4C24.18 4 30 9.82 30 17C30 24.18 24.18 30 17 30C9.82 30 4 24.18 4 17Z" stroke="white" strokeWidth="4" fill="none"/>
            <path d="M17 10C17 10 13 14 17 17C21 20 17 24 17 24" stroke="black" strokeWidth="5" fill="none"/>
            <path d="M37 17C37 9.82 42.82 4 50 4C57.18 4 63 9.82 63 17C63 24.18 57.18 30 50 30C42.82 30 37 24.18 37 17Z" stroke="white" strokeWidth="4" fill="none"/>
            <path d="M50 10C50 10 46 14 50 17C54 20 50 24 50 24" stroke="black" strokeWidth="5" fill="none"/>
            <path d="M70 17C70 9.82 75.82 4 83 4C90.18 4 96 9.82 96 17C96 24.18 90.18 30 83 30C75.82 30 70 24.18 70 17Z" stroke="white" strokeWidth="4" fill="none"/>
            <path d="M83 10C83 10 79 14 83 17C87 20 83 24 83 24" stroke="black" strokeWidth="5" fill="none"/>
          </svg>
        </div>

        {/* 6 — N lettermark */}
        <div className="client-logo">
          <svg width="40" height="44" viewBox="0 0 40 44" fill="none">
            <path d="M3 4H13L28 32V4H37V40H27L12 12V40H3V4Z" fill="white"/>
            <rect x="0"  y="4"  width="16" height="5" rx="1" fill="white"/>
            <rect x="24" y="35" width="16" height="5" rx="1" fill="white"/>
          </svg>
        </div>

      </div>
    </div>
  )
}