import React from 'react'
import './Pricing.css'

const CheckIcon = () => (
  <div className="feat-check">
    <svg width="9" height="7" viewBox="0 0 9 7" fill="none">
      <polyline points="1,3.5 3.2,5.8 8,1" stroke="#4A9EFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </div>
)

const plans = [
  {
    type: 'starter',
    name: 'Starter',
    price: '$0',
    period: '/monthly',
    desc: 'Perfect for custom animation and motion graphics.',
    btnLabel: 'Sign Up with Enterprise',
    features: ['Unlimited files','Unlimited editors','Export video, GIF, Lottie','720p, 30fps','Import from Figma'],
  },
  {
    type: 'pro',
    name: 'Professional',
    price: '$20',
    period: '/monthly',
    desc: 'Perfect for custom animation and motion graphics.',
    btnLabel: 'Sign Up with Professional',
    popular: true,
    features: ['Everything in Free','Unlimited folders','No watermark','HD export in 4K, 120fps','Team libraries'],
  },
  {
    type: 'enterprise',
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    desc: 'Perfect for custom animation and motion graphics.',
    btnLabel: "Let's Chat!",
    features: ['Everything in Studio','Single sign-on (SSO)','Pre-release features','Personalized demo','Priority support'],
  },
]

export default function Pricing() {
  return (
    <section className="pricing-section" id="pricing">
      <div className="container">

        {/* Title + purple glow */}
        <div className="pricing-title-wrap">
          {/* The glow: a blurred purple element sitting behind the text.
              Uses filter:blur() so the *element itself* is soft — not backdrop-filter */}
          <div className="pricing-glow" />
          <h2 className="pricing-title">Explore all <span className="dim">plans</span></h2>
        </div>

        <div className="pricing-grid">
          {plans.map(plan => (
            /*
              GRADIENT TOP BORDER TECHNIQUE:
              Outer wrapper = the gradient (acts as the 2.4px top border)
              Inner .price-card = actual card bg, pushed down by 2.4px padding-top on wrapper
              This correctly handles border-radius + gradient border together.
            */
            <div className={`card-wrapper ${plan.type}`} key={plan.type}>
              <div className="price-card">
                {plan.popular && <div className="popular-badge">Popular</div>}

                <p className="plan-name">{plan.name}</p>

                <div className="plan-price-row">
                  <span className="plan-price">{plan.price}</span>
                  {plan.period && <span className="plan-period">{plan.period}</span>}
                </div>

                <p className="plan-desc">{plan.desc}</p>

                <button className="plan-btn">{plan.btnLabel}</button>

                <ul className="plan-features">
                  {plan.features.map(f => (
                    <li key={f} className="plan-feature">
                      <CheckIcon /><span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}