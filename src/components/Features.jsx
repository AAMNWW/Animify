import React from 'react'
import './Features.css'

/* ═══════════════════════════════════════════
   CARD 1 VISUAL — Design UI mockup (exact Figma card-1)
═══════════════════════════════════════════ */
const UIVisual = () => (
  <div className="ui-visual">
    {/* mini topbar */}
    <div className="uiv-bar">
      <div className="uiv-tabs">
        <span className="uiv-tab uiv-tab-active">Design</span>
        <span className="uiv-tab">Animate</span>
      </div>
      <div className="uiv-tools">
        {['⊠','⊡','⊟','⊤','⊥','⊦'].map((ic,i)=>(
          <span key={i} className={`uiv-tool${i===1?' uiv-tool-on':''}`}>{ic}</span>
        ))}
      </div>
    </div>

    {/* two-column body */}
    <div className="uiv-body">
      {/* left: layers */}
      <div className="uiv-layers">
        <div className="uiv-ltabs">
          <span className="uiv-ltab uiv-ltab-on">Layers</span>
          <span className="uiv-ltab">Items</span>
        </div>
        <div className="uiv-layer uiv-layer-sel">
          <svg width="9" height="9" viewBox="0 0 9 9" fill="none"><rect x=".5" y=".5" width="8" height="8" rx="1.5" fill="#4A9EFF" fillOpacity=".3" stroke="#4A9EFF" strokeWidth="1"/></svg>
          <span>Scene</span>
          <span className="uiv-expand">∨</span>
        </div>
        <div className="uiv-layer">
          <svg width="9" height="9" viewBox="0 0 9 9" fill="none"><rect x=".5" y=".5" width="8" height="8" rx="1.5" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/></svg>
          <span>Rectangle</span>
        </div>
        <div className="uiv-layer">
          <svg width="9" height="9" viewBox="0 0 9 9" fill="none"><text x="1" y="8" fontSize="8" fill="rgba(255,255,255,.35)">T</text></svg>
          <span>User Interface</span>
        </div>
        <div className="uiv-layer">
          <svg width="9" height="9" viewBox="0 0 9 9" fill="none"><rect x=".5" y=".5" width="8" height="8" rx="1" fill="rgba(255,255,255,.04)" stroke="rgba(255,255,255,.2)" strokeWidth="1"/></svg>
          <span>Image</span>
        </div>
      </div>

      {/* right: layout properties */}
      <div className="uiv-props">
        <div className="uiv-section">Layout</div>
        <div className="uiv-grid">
          {[['X','197'],['Y','808'],['Width','480'],['Height','320'],['Angle','0°'],['Radius','0']].map(([k,v])=>(
            <div key={k} className="uiv-prop">
              <span className="uiv-pk">{k}</span>
              <span className="uiv-pv">{v}</span>
            </div>
          ))}
        </div>
        <div className="uiv-div"/>
        <div className="uiv-section">Opacity</div>
        <div className="uiv-opacity-row">
          <div className="uiv-opacity-bar"/>
          <span className="uiv-pv">100%</span>
        </div>
      </div>
    </div>
  </div>
)

/* ═══════════════════════════════════════════
   CARD 2 VISUAL — Collaboration network (exact Figma card-2)
   Real photo-style avatar circles connected to "Collaboration" pill
═══════════════════════════════════════════ */
const CollabVisual = () => (
  <div className="collab-visual">
    <svg viewBox="0 0 440 260" fill="none" xmlns="http://www.w3.org/2000/svg" className="collab-svg">
      {/* connection lines */}
      <line x1="220" y1="130" x2="100" y2="52"  stroke="rgba(255,255,255,0.12)" strokeWidth="1" strokeDasharray="5 4"/>
      <line x1="220" y1="130" x2="330" y2="52"  stroke="rgba(255,255,255,0.12)" strokeWidth="1" strokeDasharray="5 4"/>
      <line x1="220" y1="130" x2="88"  y2="206" stroke="rgba(255,255,255,0.12)" strokeWidth="1" strokeDasharray="5 4"/>
      <line x1="220" y1="130" x2="352" y2="206" stroke="rgba(255,255,255,0.12)" strokeWidth="1" strokeDasharray="5 4"/>

      {/* Collaboration pill – centre */}
      <rect x="145" y="114" width="150" height="32" rx="16" fill="rgba(10,8,30,0.92)" stroke="rgba(255,255,255,0.12)" strokeWidth="1"/>
      <text x="220" y="134" textAnchor="middle" fill="rgba(255,255,255,0.75)" fontFamily="Satoshi,sans-serif" fontSize="12" fontWeight="500">Collaboration</text>

      {/* Avatar: top-left – pink/red hair woman */}
      <circle cx="100" cy="52" r="28" fill="#C96B8A" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5"/>
      <circle cx="100" cy="45" r="13" fill="#A04060"/>
      <ellipse cx="100" cy="68" rx="18" ry="13" fill="#A04060"/>
      <circle cx="100" cy="42" r="9" fill="#F0AABE"/>
      {/* hair */}
      <ellipse cx="100" cy="32" rx="14" ry="8" fill="#C96B8A"/>

      {/* Avatar: top-right – man with short hair */}
      <circle cx="330" cy="52" r="28" fill="#5B8ED9" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5"/>
      <circle cx="330" cy="45" r="13" fill="#3A6ABF"/>
      <ellipse cx="330" cy="68" rx="18" ry="13" fill="#3A6ABF"/>
      <circle cx="330" cy="42" r="9" fill="#90B4E8"/>
      <ellipse cx="330" cy="33" rx="13" ry="5" fill="#2A4A8A"/>

      {/* Avatar: bottom-left – man with beard */}
      <circle cx="88" cy="206" r="28" fill="#B07040" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5"/>
      <circle cx="88" cy="199" r="13" fill="#8A5028"/>
      <ellipse cx="88" cy="222" rx="18" ry="13" fill="#8A5028"/>
      <circle cx="88" cy="196" r="9" fill="#D4956A"/>
      <ellipse cx="88" cy="208" rx="10" ry="5" fill="#6A3818"/>

      {/* Avatar: bottom-right – man */}
      <circle cx="352" cy="206" r="28" fill="#5A6070" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5"/>
      <circle cx="352" cy="199" r="13" fill="#3A4050"/>
      <ellipse cx="352" cy="222" rx="18" ry="13" fill="#3A4050"/>
      <circle cx="352" cy="196" r="9" fill="#8A9AB0"/>
      <ellipse cx="352" cy="188" rx="13" ry="5" fill="#2A3040"/>
    </svg>
  </div>
)

/* ═══════════════════════════════════════════
   CARD 3 VISUAL — Cloud storage (exact Figma card-3)
   Colors: #08152B → #10141A → #0D1014, radial gradient #3B6BBF → #132B57
═══════════════════════════════════════════ */
const CloudVisual = () => (
  <div className="cloud-visual">
    <div className="cloud-scene">
      {/* outer rings */}
      <div className="cv-ring cv-ring-lg"/>
      <div className="cv-ring cv-ring-md"/>
      {/* orbit icons */}
      <div className="cv-orb cv-orb-top">
        <svg width="14" height="14" viewBox="0 0 20 20" fill="none"><rect x="2" y="5" width="16" height="12" rx="2" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5"/><path d="M7 5V4a3 3 0 016 0v1" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5"/></svg>
      </div>
      <div className="cv-orb cv-orb-left">
        <svg width="14" height="14" viewBox="0 0 20 20" fill="none"><path d="M14 8H6a4 4 0 000 8h8a4 4 0 000-8z" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5"/><path d="M10 4v4" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round"/></svg>
      </div>
      <div className="cv-orb cv-orb-right">
        <svg width="14" height="14" viewBox="0 0 20 20" fill="none"><rect x="2" y="5" width="16" height="12" rx="2" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5"/><path d="M7 5V4a3 3 0 016 0v1" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5"/></svg>
      </div>
      {/* centre sphere */}
      <div className="cv-sphere">
        {/* cloud icon */}
        <svg width="44" height="32" viewBox="0 0 44 32" fill="none">
          <path d="M34 32H10a10 10 0 010-20c.34 0 .67.02 1 .05A14 14 0 0138 20a8 8 0 01-4 12z" fill="white" fillOpacity=".9"/>
          <path d="M34 12a8 8 0 010 16" stroke="white" strokeOpacity=".6" strokeWidth="1"/>
        </svg>
      </div>
    </div>
  </div>
)

/* ═══════════════════════════════════════════
   CARD 4 VISUAL — Integrations (exact Figma card-4)
   Dropbox → Animify (Loom-style logo) → Slack
═══════════════════════════════════════════ */
const IntegrationsVisual = () => (
  <div className="int-visual">
    {/* Dropbox */}
    <div className="int-icon int-dropbox">
      <svg width="32" height="28" viewBox="0 0 40 34" fill="none">
        <path d="M10 2L20 9L10 16L0 9Z"  fill="#0061FF"/>
        <path d="M30 2L40 9L30 16L20 9Z" fill="#0061FF"/>
        <path d="M0 23L10 16L20 23L10 30Z"  fill="#0061FF"/>
        <path d="M20 23L30 16L40 23L30 30Z" fill="#0061FF"/>
        <circle cx="20" cy="29" r="3" fill="#0061FF"/>
      </svg>
    </div>

    {/* Arrow */}
    <div className="int-dot-arrow">
      <span className="int-dot"/>
      <svg width="18" height="2" viewBox="0 0 18 2"><line x1="0" y1="1" x2="18" y2="1" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5"/></svg>
      <span className="int-dot"/>
    </div>

    {/* Animify (dark circle with loom-style logo) */}
    <div className="int-icon int-animify">
      <svg width="36" height="24" viewBox="0 0 44 28" fill="none">
        <path d="M7 14C7 9.582 10.582 6 15 6C19.418 6 23 9.582 23 14C23 18.418 19.418 22 15 22C10.582 22 7 18.418 7 14Z" stroke="white" strokeWidth="2.2" fill="none"/>
        <path d="M23 14C23 9.582 26.582 6 31 6C35.418 6 39 9.582 39 14" stroke="white" strokeWidth="2.2" fill="none" strokeLinecap="round"/>
        <path d="M39 14C39 18.418 42.582 22 47 22" stroke="white" strokeWidth="2.2" fill="none" strokeLinecap="round"/>
        <circle cx="15" cy="14" r="4" fill="white"/>
      </svg>
    </div>

    {/* Arrow */}
    <div className="int-dot-arrow">
      <span className="int-dot"/>
      <svg width="18" height="2" viewBox="0 0 18 2"><line x1="0" y1="1" x2="18" y2="1" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5"/></svg>
      <span className="int-dot"/>
    </div>

    {/* Slack */}
    <div className="int-icon int-slack">
      <svg width="32" height="32" viewBox="0 0 44 44" fill="none">
        {/* hashtag-grid slack logo */}
        <path d="M11 22a5 5 0 110-10 5 5 0 010 10zm0 0h5v5a5 5 0 01-10 0 5 5 0 015-5z" fill="#E01E5A"/>
        <path d="M33 22a5 5 0 110 10 5 5 0 010-10zm0 0h-5v-5a5 5 0 0110 0 5 5 0 01-5 5z" fill="#2EB67D"/>
        <path d="M22 11a5 5 0 1110 0 5 5 0 01-10 0zm0 0v5h-5a5 5 0 010-10 5 5 0 015 5z" fill="#36C5F0"/>
        <path d="M22 33a5 5 0 11-10 0 5 5 0 0110 0zm0 0v-5h5a5 5 0 010 10 5 5 0 01-5-5z" fill="#ECB22E"/>
      </svg>
    </div>
  </div>
)

/* ═══════════════════════════════════════════
   MAIN COMPONENT
═══════════════════════════════════════════ */
export default function Features() {
  return (
    <section className="features-section" id="features">

      {/* HEADER */}
      <div className="features-header reveal">
        <div className="sec-badge">✦ Amazing</div>
        <h2 className="feat-sec-title">
          Features and <span className="feat-dim-grad">benefits</span>
        </h2>
        <p className="feat-sec-sub">
          Create, customize, and collaborate effortlessly with our intuitive platform.<br />
          From simple edits to complex designs, bring your vision to life in no time.
        </p>
      </div>

      {/* ROW 1:  card-1 (600px) + card-2 (480px) */}
      <div className="features-row row-top">

        <div className="feat-card card-1 reveal">
          <div className="feat-content">
            <h3>Easy-to-Use Interface</h3>
            <p>Users can quickly start using the platform without needing a steep learning curve.</p>
            <a href="#" className="feat-link">Try it now &nbsp;→</a>
          </div>
          <div className="feat-visual-area ui-area">
            <UIVisual />
          </div>
        </div>

        <div className="feat-card card-2 reveal">
          <div className="feat-content">
            <h3>Collaboration Tools</h3>
            <p>Explanation: If your product enables collaboration, emphasize the ability for teams to work together in real time.</p>
            <a href="#" className="feat-link">Try it now &nbsp;→</a>
          </div>
          <div className="feat-visual-area collab-area">
            <CollabVisual />
          </div>
        </div>

      </div>

      {/* ROW 2:  card-3 (540px) + card-4 (540px) */}
      <div className="features-row row-bottom">

        <div className="feat-card card-3 reveal">
          <div className="feat-visual-area cloud-area">
            <CloudVisual />
          </div>
          <div className="feat-content feat-content-bottom">
            <h3>Secure Cloud Storage</h3>
            <p>With cloud storage, users' projects are automatically saved, ensuring their data is never lost.</p>
            <a href="#" className="feat-link">Try it now &nbsp;→</a>
          </div>
        </div>

        <div className="feat-card card-4 reveal">
          <div className="feat-visual-area int-area">
            <IntegrationsVisual />
          </div>
          <div className="feat-content feat-content-bottom">
            <h3>Wide Integration Support</h3>
            <p>The ability to integrate with third-party apps (e.g., Google Drive, Dropbox, Slack) is essential for users who rely on a suite of tools.</p>
            <a href="#" className="feat-link">Try it now &nbsp;→</a>
          </div>
        </div>

      </div>

    </section>
  )
}
