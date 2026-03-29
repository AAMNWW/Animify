import React from 'react'
import './WhyChooseUs.css'

/* ── SVG Icons matching Figma exactly ── */
const IconMouse = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
    stroke="rgba(255,255,255,0.85)" strokeWidth="1.5"
    strokeLinecap="round" strokeLinejoin="round">
    <rect x="6" y="3" width="12" height="18" rx="6" />
    <line x1="12" y1="7" x2="12" y2="11" />
  </svg>
)

const IconBolt = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
    stroke="rgba(255,255,255,0.85)" strokeWidth="1.5"
    strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
)

const IconDoc = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
    stroke="rgba(255,255,255,0.85)" strokeWidth="1.5"
    strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
  </svg>
)

const IconChat = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
    stroke="rgba(255,255,255,0.85)" strokeWidth="1.5"
    strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
)

const IconShield = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
    stroke="rgba(255,255,255,0.85)" strokeWidth="1.5"
    strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <polyline points="9 12 11 14 15 10" />
  </svg>
)

const IconExport = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
    stroke="rgba(255,255,255,0.85)" strokeWidth="1.5"
    strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
    <polyline points="16 6 12 2 8 6" />
    <line x1="12" y1="2" x2="12" y2="15" />
  </svg>
)

const cells = [
  {
    Icon: IconMouse,
    title: 'Intuitive User Experience',
    desc: 'Start a quick with a user-friendly interface designed for maximum easy and efficiency.',
  },
  {
    Icon: IconBolt,
    title: 'Boost Productivity',
    desc: 'Use pre-default transitions to save time and productivity.',
  },
  {
    Icon: IconDoc,
    title: 'Customizable Templates',
    desc: 'Get ready made customizable templates for your projects.',
  },
  {
    Icon: IconChat,
    title: '24/7 Support',
    desc: 'Get instant assistance anytime with our intelligent, always available assistant.',
  },
  {
    Icon: IconShield,
    title: 'Data Security & Compliance',
    desc: 'Safeguard your operations with industry-leading standards.',
  },
  {
    Icon: IconExport,
    title: 'High-Quality Export',
    desc: 'High-quality export options allow users to download their content in formats.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="why-section">

      {/* ── Header ── */}
      <div className="why-header">
        {/*
          Title gradient:
          radial-gradient(293.61% 1054.76% at 36.54% 31.34%, #FFFFFF 0%, rgba(255,255,255,0) 100%)
        */}
        <h2 className="why-title">Why choose us</h2>

        {/*
          Satoshi Medium 18px | lh:24px | ls:-1.4% | #BEBEBE | centered
        */}
        <p className="why-sub">
          Unlock the full potential of your business with exceptional features
          and unmatched performance.
        </p>
      </div>

      {/*
        Card:
          width:1160 height:440 border-radius:14px
          border: 1px solid rgba(255,255,255,0.2)
          padding:40px gap:40px
          bg: linear-gradient(90deg, rgba(13,11,20,.9) 0%, rgba(11,16,20,.9) 100%)
          backdrop-filter: blur(16px)
      */}
      <div className="why-outer">

        {/* Single big purple glow — top center of card only */}
        <div className="why-bg-glow" />

        {/* 3×2 grid — all cells identical, no borders, fully centered */}
        <div className="why-grid">
          {cells.map(({ Icon, title, desc }, i) => (
            <div key={i} className="why-cell">
              {/* Icon ring: 48×48 br:12 */}
              <div className="why-icon-ring">
                <Icon />
              </div>
              <h3 className="why-cell-title">{title}</h3>
              <p className="why-cell-desc">{desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}