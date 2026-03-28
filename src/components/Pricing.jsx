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
    price: '$0', period: '/monthly',
    desc: 'Perfect for custom animation and motion graphics.',
    btnLabel: 'Sign Up with Enterprise', btnType: 'outline',
    features: ['Unlimited files','Unlimited editors','Export video, GIF, Lottie','720p, 30fps','Import from Figma'],
  },
  {
    type: 'pro',
    name: 'Professional',
    price: '$20', period: '/monthly',
    desc: 'Perfect for custom animation and motion graphics.',
    btnLabel: 'Sign Up with Professional', btnType: 'white',
    popular: true,
    features: ['Everything in Free','Unlimited folders','No watermark','HD export in 4K, 120fps','Team libraries'],
  },
  {
    type: 'enterprise',
    name: 'Enterprise',
    price: 'Custom', period: '',
    desc: 'Perfect for custom animation and motion graphics.',
    btnLabel: "Let's Chat!", btnType: 'outline',
    features: ['Everything in Studio','Single sign-on (SSO)','Pre-release features','Personalized demo','Priority support'],
  },
]

export default function Pricing() {
  return (
    <section className="pricing-section" id="pricing">
      <div className="container">
        {/* Figma purple glow above pricing */}
        <div className="pricing-glow" />
        <h2 className="pricing-title reveal">Explore all <span className="dim">plans</span></h2>
        <div className="pricing-grid">
          {plans.map(plan => (
            <div className={`price-card ${plan.type} reveal`} key={plan.type}>
              {plan.popular && <div className="popular-badge">Popular</div>}
              <p className="plan-name">{plan.name}</p>
              <div className="plan-price-row">
                <span className="plan-price">{plan.price}</span>
                {plan.period && <span className="plan-period">{plan.period}</span>}
              </div>
              <p className="plan-desc">{plan.desc}</p>
              {plan.btnType === 'white'
                ? <button className="btn-white">{plan.btnLabel}</button>
                : <button className="btn-outline">{plan.btnLabel}</button>
              }
              <ul className="plan-features">
                {plan.features.map(f => (
                  <li key={f} className="plan-feature"><CheckIcon /><span>{f}</span></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
