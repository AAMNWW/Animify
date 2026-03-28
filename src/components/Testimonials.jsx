import React from 'react'
import './Testimonials.css'

/* ── Exact Figma card data ──
   Row 1: partially-visible | John M. | Mike T. | David R. | partially-visible
   Row 2: partially-visible | Kevin B. | Robert S. | partially-visible | partially-visible
*/

const row1Cards = [
  {
    name: 'John M.',
    role: 'Operations Lead',
    imgSeed: 11,
    avatarBg: '#3A4050',
    text: 'This tool has completely transformed the way we work! It\'s intuitive, fast, and so easy to integrate with our current processes. Highly recommended!',
  },
  {
    name: 'Mike T.',
    role: 'Product Designer',
    imgSeed: 65,
    avatarBg: '#2A3A60',
    text: 'I\'ve tried a lot of similar tools, but this one stands out. The features are top-notch, and the customer support is fantastic.',
  },
  {
    name: 'David R.',
    role: 'Product Manager',
    imgSeed: 33,
    avatarBg: '#3A2A50',
    text: 'I\'ve tried a lot of similar tools, but this one stands out. The features are top-notch, the customer support is fantastic.',
  },
]

const row2Cards = [
  {
    name: 'Kevin B.',
    role: 'Freelancer',
    imgSeed: 55,
    avatarBg: '#2A3A2A',
    text: 'I can\'t imagine going back to the old way of doing things. This product has made everything smoother and more efficient. It\'s a game changer!',
  },
  {
    name: 'Robert S.',
    role: 'Project Manager',
    imgSeed: 53,
    avatarBg: '#4A3A20',
    text: 'Incredible tool! I was able to automate so many tasks that used to take hours. It\'s a real time-saver!',
  },
]

/* Ghost (partially visible) card data */
const ghostLeft1  = { name: 'Sarah K.',  role: 'Designer',       text: "…It's a total game‑changer for our workflow.",         imgSeed: 44, avatarBg: '#3A2A60' }
const ghostRight1 = { name: 'Alex W.',   role: 'Developer',      text: 'The API integration was seamless from day one.',        imgSeed: 22, avatarBg: '#1A4A30' }
const ghostLeft2  = { name: 'Tom H.',    role: 'Motion Designer', text: '…from design to animation in minutes.',                imgSeed: 12, avatarBg: '#1A3A5A' }
const ghostRight2 = { name: 'Lisa P.',   role: 'Art Director',   text: '…our team ships 3× faster now.',                       imgSeed: 48, avatarBg: '#5A2A3A' }
const ghostRight2b= { name: 'Rachel B.', role: 'Creative Dir.',  text: 'Absolutely the best tool in the market.',               imgSeed: 49, avatarBg: '#4A2A4A' }

function Avatar({ imgSeed, avatarBg, name }) {
  return (
    <div className="t-avatar" style={{ background: avatarBg }}>
      <img
        src={`https://i.pravatar.cc/80?img=${imgSeed}`}
        alt={name}
        onError={e => { e.currentTarget.style.display = 'none' }}
      />
      <span className="t-avatar-fb">{name[0]}</span>
    </div>
  )
}

function Card({ card, ghost }) {
  return (
    <div className={`t-card${ghost ? ' t-card-ghost' : ''} reveal`}>
      <div className="t-card-top">
        <Avatar imgSeed={card.imgSeed} avatarBg={card.avatarBg} name={card.name} />
        <div>
          <div className="t-name">{card.name}</div>
          <div className="t-role">{card.role}</div>
        </div>
      </div>
      <p className="t-text">{card.text}</p>
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="testi-section">

      {/* ── Heart / arch header ── */}
      <div className="testi-header">
        {/* The heart shape is drawn as two overlapping circles + rectangle */}
        <div className="testi-heart">
          <div className="heart-bg" />
        </div>
        <div className="testi-header-text">
          <h2 className="testi-title">Our Customers</h2>
          <p className="testi-sub">What people say about us</p>
        </div>
      </div>

      {/* ── ROW 1: ghost | John M. | Mike T. | David R. | ghost ── */}
      <div className="testi-wrapper">
        <div className="testi-row testi-row-1">
          {/* left ghost — partially visible, clipped */}
          <div className="t-ghost-wrap t-ghost-left">
            <Card card={ghostLeft1} ghost />
          </div>

          {row1Cards.map(c => <Card key={c.name} card={c} />)}

          {/* right ghost */}
          <div className="t-ghost-wrap t-ghost-right">
            <Card card={ghostRight1} ghost />
          </div>
        </div>

        {/* ── ROW 2: ghost | Kevin B. | Robert S. | ghost | ghost ── */}
        <div className="testi-row testi-row-2">
          <div className="t-ghost-wrap t-ghost-left">
            <Card card={ghostLeft2} ghost />
          </div>

          {row2Cards.map(c => <Card key={c.name} card={c} />)}

          <div className="t-ghost-wrap t-ghost-right">
            <Card card={ghostRight2} ghost />
          </div>
          <div className="t-ghost-wrap t-ghost-right2">
            <Card card={ghostRight2b} ghost />
          </div>
        </div>
      </div>

    </section>
  )
}
