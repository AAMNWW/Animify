import React from 'react'
import './CTA.css'

export default function CTA() {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-box reveal">
          <div className="cta-glow" />
          <div className="cta-grid" />
          <h2 className="cta-title">Get Started</h2>
          <p className="cta-sub">Holds no opinions on what's and how's. Build whatever makes sense to you.</p>
          <div className="cta-btns">
            {/* Figma: same "Try it now" — #03263D, border 0.6px #E0F2FF 40%, inner shadow blur:10 #0099FF */}
            <a href="#" className="cta-btn-primary">Try it now</a>
            <a href="#" className="cta-btn-secondary">Book your demo</a>
          </div>
        </div>
      </div>
    </section>
  )
}
