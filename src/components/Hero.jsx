import React from 'react'
import './Hero.css'

const AppMockup = () => (
  <div className="mockup">
    <div className="mockup-topbar">
      <div className="mockup-dots">
        <span className="dot red" /><span className="dot yellow" /><span className="dot green" />
      </div>
    </div>
    <div className="mockup-body">
      <div className="mockup-sidebar">
        <div className="sidebar-tabs">
          <span className="s-tab active">Layers</span>
          <span className="s-tab">Items</span>
        </div>
        <div className="layer-item sel">
          <svg width="9" height="9" viewBox="0 0 9 9" fill="none"><rect x="0.5" y="0.5" width="8" height="8" rx="1.5" fill="#4A9EFF" fillOpacity=".3" stroke="#4A9EFF" strokeWidth="1"/></svg>
          <span>Scene</span><span className="li-arrow">›</span>
        </div>
        <div className="layer-item">
          <svg width="9" height="9" viewBox="0 0 9 9" fill="none"><rect x="0.5" y="0.5" width="8" height="8" rx="1.5" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/></svg>
          <span>Rectangle</span>
        </div>
        <div className="layer-item">
          <svg width="9" height="9" viewBox="0 0 9 9" fill="none"><text x="1" y="8" fontSize="8" fill="rgba(255,255,255,0.35)">T</text></svg>
          <span>User Interface</span>
        </div>
        <div className="layer-item">
          <svg width="9" height="9" viewBox="0 0 9 9" fill="none"><rect x="0.5" y="0.5" width="8" height="8" rx="1" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/><line x1="0.5" y1="3.5" x2="8.5" y2="3.5" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5"/></svg>
          <span>Image</span>
        </div>
      </div>

      <div className="mockup-canvas">
        <div className="sphere-outer">
          <div className="sphere-core" />
          <svg className="sphere-rings" viewBox="0 0 220 220" fill="none">
            <ellipse cx="110" cy="110" rx="109" ry="22"  stroke="rgba(120,200,255,0.20)" strokeWidth="0.8"/>
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
        <div className="mockup-timeline">
          <div className="tl-ruler">
            {['0s','1s','2s','3s','4s','5s'].map(s=><span key={s} className="tl-seg">{s}</span>)}
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

      <div className="mockup-props">
        <div className="props-tabs">
          <span className="p-tab active">Design</span>
          <span className="p-tab">Animate</span>
        </div>
        <div className="props-align-btns">
          {['⊠','⊡','⊟'].map((b,i)=><span key={i} className={`a-btn${i===1?' active':''}`}>{b}</span>)}
          <span className="a-sep"/>
          {['⊤','⊥','⊦'].map((b,i)=><span key={i} className="a-btn">{b}</span>)}
        </div>
        <div className="props-section">Layout</div>
        <div className="p-grid">
          {[['X','197'],['Y','806'],['Width','480'],['Height','320'],['Angle','0°'],['Radius','0']].map(([l,v])=>(
            <div key={l} className="p-cell"><label>{l}</label><span>{v}</span></div>
          ))}
        </div>
        <div className="p-div"/>
        <div className="props-section">Opacity</div>
        <div className="p-opacity-row"><div className="p-opacity-track"><div className="p-opacity-fill"/></div></div>
        <div className="p-div"/>
        <div className="props-section">Fill</div>
        <div className="p-fill-row">
          <div className="p-swatch" style={{background:'#0099FF'}}/>
          <span className="p-fill-label">0099FF</span>
          <span className="p-fill-pct">100%</span>
        </div>
        <div className="p-div"/>
        {['Stroke','Shadow','Blur'].map(s=>(
          <div key={s} className="p-collapsible"><span className="props-section">{s}</span><span className="p-plus">+</span></div>
        ))}
      </div>
    </div>
  </div>
)

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">

        {/* Figma: Satoshi 500, 64px, line-height 111%, letter-spacing -3.2%
            Full words: gradient #989CA5→#FFF→#FFF→#989CA5
            "Dynamic": gradient 95.52deg #00AEFF → #1778FF */}
        <h1 className="hero-title">
          <span className="title-shimmer">Transform Concepts into,</span>
          <br />
          <span className="title-dynamic">Dynamic</span><span className="title-shimmer"> Animations</span>
        </h1>

        {/* Figma: Satoshi 500, 18px, 100% line-height, -1.4% tracking, #BEBEBE */}
        <p className="hero-sub">
          Unleash your creativity with our intuitive animation tool. Create stunning
          videos and bring your vision to life in just a few clicks!
        </p>

        {/* Try it now: 113×46, radius 12px, pad 12px 20px, bg #03263D,
            border 0.6px #E0F2FF66, inset shadow 0 0 10px #0099FF
            Text: Manrope 600, 16px, white */}
        <div className="hero-ctas">
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