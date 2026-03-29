import React from 'react'
import './Hero.css'

/* ─────────────────────────────────────────
   APP MOCKUP  — mirrors Figma screenshot
───────────────────────────────────────── */
const AppMockup = () => (
  <div className="mockup">

    {/* ── Top bar ── */}
    <div className="mockup-topbar">
      <div className="mockup-dots">
        <span className="dot red" />
        <span className="dot yellow" />
        <span className="dot green" />
      </div>
    </div>

    {/* ── Three-column body ── */}
    <div className="mockup-body">

      {/* ── LEFT: Layers panel ── */}
      <div className="mockup-sidebar">
        <div className="sidebar-tabs">
          <span className="s-tab active">Layers</span>
          <span className="s-tab">Items</span>
        </div>

        <div className="layer-item sel">
          <svg width="9" height="9" viewBox="0 0 9 9" fill="none" className="li-icon">
            <rect x="0.5" y="0.5" width="8" height="8" rx="1.5" fill="#4A9EFF" fillOpacity=".3" stroke="#4A9EFF" strokeWidth="1"/>
          </svg>
          <span>Scene</span>
          <span className="li-arrow">›</span>
        </div>
        <div className="layer-item">
          <svg width="9" height="9" viewBox="0 0 9 9" fill="none" className="li-icon">
            <rect x="0.5" y="0.5" width="8" height="8" rx="1.5" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
          </svg>
          <span>Rectangle</span>
        </div>
        <div className="layer-item">
          <svg width="9" height="9" viewBox="0 0 9 9" fill="none" className="li-icon">
            <text x="1" y="8" fontSize="8" fill="rgba(255,255,255,0.35)">T</text>
          </svg>
          <span>User Interface</span>
        </div>
        <div className="layer-item">
          <svg width="9" height="9" viewBox="0 0 9 9" fill="none" className="li-icon">
            <rect x="0.5" y="0.5" width="8" height="8" rx="1" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
            <line x1="0.5" y1="3.5" x2="8.5" y2="3.5" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5"/>
          </svg>
          <span>Image</span>
        </div>
      </div>

      {/* ── CENTRE: Canvas with sphere ── */}
      <div className="mockup-canvas">
        <div className="sphere-outer">
          <div className="sphere-core" />
          <svg className="sphere-rings" viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="110" cy="110" rx="109" ry="22"  stroke="rgba(120,200,255,0.2)"  strokeWidth="0.8"/>
            <ellipse cx="110" cy="110" rx="109" ry="42"  stroke="rgba(120,200,255,0.17)" strokeWidth="0.8"/>
            <ellipse cx="110" cy="110" rx="109" ry="62"  stroke="rgba(120,200,255,0.13)" strokeWidth="0.8"/>
            <ellipse cx="110" cy="110" rx="109" ry="80"  stroke="rgba(120,200,255,0.10)" strokeWidth="0.8"/>
            <ellipse cx="110" cy="110" rx="109" ry="96"  stroke="rgba(120,200,255,0.07)" strokeWidth="0.8"/>
            <ellipse cx="110" cy="110" rx="109" ry="108" stroke="rgba(120,200,255,0.05)" strokeWidth="0.8"/>
            <ellipse cx="110" cy="110" rx="22"  ry="109" stroke="rgba(120,200,255,0.16)" strokeWidth="0.8"/>
            <ellipse cx="110" cy="110" rx="50"  ry="109" stroke="rgba(120,200,255,0.11)" strokeWidth="0.8"/>
            <ellipse cx="110" cy="110" rx="80"  ry="109" stroke="rgba(120,200,255,0.08)" strokeWidth="0.8"/>
          </svg>
        </div>

        {/* ── Timeline at bottom ── */}
        <div className="mockup-timeline">
          <div className="tl-ruler">
            <span className="tl-seg">0s</span>
            <span className="tl-seg">1s</span>
            <span className="tl-seg">2s</span>
            <span className="tl-seg">3s</span>
            <span className="tl-seg">4s</span>
            <span className="tl-seg">5s</span>
          </div>
          <div className="tl-playhead">
            <div className="tl-ph-tag">00:02</div>
            <div className="tl-ph-line" />
          </div>
          <div className="tl-tracks">
            <div className="tl-track"><div className="tl-block" /></div>
            <div className="tl-track tl-track-empty" />
          </div>
        </div>
      </div>

      {/* ── RIGHT: Properties panel ── */}
      <div className="mockup-props">
        <div className="props-tabs">
          <span className="p-tab active">Design</span>
          <span className="p-tab">Animate</span>
        </div>

        <div className="props-align-btns">
          <span className="a-btn">⊠</span>
          <span className="a-btn active">⊡</span>
          <span className="a-btn">⊟</span>
          <span className="a-sep" />
          <span className="a-btn">⊤</span>
          <span className="a-btn">⊥</span>
          <span className="a-btn">⊦</span>
        </div>

        <div className="props-section">Layout</div>
        <div className="p-grid">
          <div className="p-cell"><label>X</label><span>197</span></div>
          <div className="p-cell"><label>Y</label><span>806</span></div>
          <div className="p-cell"><label>Width</label><span>480</span></div>
          <div className="p-cell"><label>Height</label><span>320</span></div>
          <div className="p-cell"><label>Angle</label><span>0°</span></div>
          <div className="p-cell"><label>Radius</label><span>0</span></div>
        </div>

        <div className="p-div" />
        <div className="props-section">Opacity</div>
        <div className="p-opacity-row">
          <div className="p-opacity-track"><div className="p-opacity-fill" /></div>
        </div>

        <div className="p-div" />
        <div className="props-section">Fill</div>
        <div className="p-fill-row">
          <div className="p-swatch" style={{ background: '#0099FF' }} />
          <span className="p-fill-label">0099FF</span>
          <span className="p-fill-pct">100%</span>
        </div>

        <div className="p-div" />
        <div className="p-collapsible"><span className="props-section">Stroke</span><span className="p-plus">+</span></div>
        <div className="p-collapsible"><span className="props-section">Shadow</span><span className="p-plus">+</span></div>
        <div className="p-collapsible"><span className="props-section">Blur</span><span className="p-plus">+</span></div>
      </div>
    </div>
  </div>
)

export default function Hero() {
  return (
    <section className="hero">

      {/* Figma: Ellipse 17 — large decorative ring framing the section */}
      <div className="hero-ring" />

      <div className="hero-content">

        {/* Figma: Satoshi 500 64px, gradient #989CA5→#FFF→#FFF→#989CA5 */}
        <h1 className="hero-title">
          Transform Concepts into,<br />
          {/* "Dynamic" uses its own blue gradient */}
          <span className="hero-title-gradient">Dynamic</span>{' '}Animations
        </h1>

        {/* Figma: Satoshi 500 18px, #BEBEBE, line-height 100%, letter-spacing -1.4% */}
        <p className="hero-sub">
          Unleash your creativity with our intuitive animation tool. Create stunning
          videos and bring your vision to life in just a few clicks!
        </p>

        <div className="hero-ctas">
          {/* Figma: 113×46, radius 12px, Manrope SemiBold 16px, #03263D bg, inset glow */}
          <a href="#" className="btn-primary">Try it now</a>
          <a href="#" className="btn-secondary">Book your demo</a>
        </div>

        <div className="hero-mockup-wrap">
          <AppMockup />
        </div>
      </div>
    </section>
  )
}