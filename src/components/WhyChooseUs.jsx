import React from 'react'
import './WhyChooseUs.css'

const icons = [
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5" strokeLinecap="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>,
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5" strokeLinecap="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>,
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5" strokeLinecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5" strokeLinecap="round"><path d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg>,
]

const cells = [
  { title: 'Intuitive User Experience', desc: 'Start a quick with a user-friendly interface designed for maximum easy and efficiency.' },
  { title: 'Boost Productivity',        desc: 'Use pre-default transitions to save time and productivity.', highlight: true },
  { title: 'Customizable Templates',    desc: 'Get ready made customizable templates for your projects.' },
  { title: '24/7 Support',              desc: 'Get instant assistance anytime with our intelligent, always available assistant.' },
  { title: 'Data Security & Compliance',desc: 'Safeguard your operations with our industry-leading security standards.' },
  { title: 'High-Quality Export',       desc: 'High-quality export options allow users to download their content in formats.' },
]

export default function WhyChooseUs() {
  return (
    <section className="why-section">
      <div className="container">
        <div className="why-header reveal">
          <h2 className="sec-title why-title-text">Why choose <span className="dim">us</span></h2>
          <p className="sec-sub" style={{maxWidth:540,margin:'0 auto'}}>
            Unlock the full potential of your business with exceptional features<br/>and unmatched performance.
          </p>
        </div>

        <div className="why-outer reveal">
          {/* Top purple glow inside the container */}
          <div className="why-top-glow" />

          <div className="why-grid">
            {cells.map((cell, i) => (
              <div className={`why-cell${cell.highlight ? ' why-hl' : ''}`} key={i}>
                {/* Per-icon radial glow */}
                <div className="why-icon-glow" />
                <div className="why-icon-ring">
                  {icons[i]}
                </div>
                <h3 className="why-cell-title">{cell.title}</h3>
                <p className="why-cell-desc">{cell.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
