import React from 'react'
import './Clients.css'

export default function Clients() {
  return (
    <div className="clients reveal">
      <p className="clients-label">Our Clients</p>
      <div className="clients-row">

        {/* LOGO wordmark */}
        <div className="client-logo">
          <svg width="90" height="22" viewBox="0 0 90 22" fill="none">
            <text x="0" y="18" fontFamily="Satoshi,sans-serif" fontSize="20" fontWeight="900" fill="rgba(255,255,255,0.55)" letterSpacing="-1">LOGO</text>
          </svg>
        </div>

        {/* Four-circle icon */}
        <div className="client-logo">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <circle cx="9"  cy="9"  r="7" fill="rgba(255,255,255,0.45)"/>
            <circle cx="19" cy="9"  r="7" fill="rgba(255,255,255,0.45)"/>
            <circle cx="9"  cy="19" r="7" fill="rgba(255,255,255,0.45)"/>
            <circle cx="19" cy="19" r="7" fill="rgba(255,255,255,0.45)"/>
          </svg>
        </div>

        {/* Logoipsum with circle icon */}
        <div className="client-logo">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <circle cx="11" cy="11" r="10" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5"/>
            <circle cx="11" cy="11" r="4"  fill="rgba(255,255,255,0.5)"/>
          </svg>
          <span style={{fontFamily:'Satoshi,sans-serif',fontWeight:700,fontSize:15,color:'rgba(255,255,255,0.5)',letterSpacing:'-0.02em'}}>Logoipsum</span>
        </div>

        {/* Diamond icon */}
        <div className="client-logo">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L22 12L12 22L2 12Z" fill="rgba(255,255,255,0.45)"/>
            <path d="M12 7L17 12L12 17L7 12Z" fill="rgba(0,0,0,0.4)"/>
          </svg>
        </div>

        {/* Infinity / loop logo */}
        <div className="client-logo">
          <svg width="52" height="22" viewBox="0 0 52 22" fill="none">
            <path d="M5.5 11C5.5 7.962 7.962 5.5 11 5.5C14.038 5.5 16.5 7.962 16.5 11C16.5 14.038 14.038 16.5 11 16.5C7.962 16.5 5.5 14.038 5.5 11Z" stroke="rgba(255,255,255,0.5)" strokeWidth="1.8" fill="none"/>
            <path d="M16.5 11C16.5 7.962 18.962 5.5 22 5.5C25.038 5.5 27.5 7.962 27.5 11" stroke="rgba(255,255,255,0.5)" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
            <path d="M27.5 11C27.5 14.038 29.962 16.5 33 16.5C36.038 16.5 38.5 14.038 38.5 11C38.5 7.962 36.038 5.5 33 5.5" stroke="rgba(255,255,255,0.5)" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
            <circle cx="11" cy="11" r="2.5" fill="rgba(255,255,255,0.5)"/>
          </svg>
        </div>

        {/* N lettermark */}
        <div className="client-logo">
          <svg width="22" height="26" viewBox="0 0 22 26" fill="none">
            <text x="0" y="22" fontFamily="Satoshi,sans-serif" fontSize="26" fontWeight="900" fill="rgba(255,255,255,0.5)">N</text>
          </svg>
        </div>

      </div>
    </div>
  )
}
