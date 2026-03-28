import React, { useState } from 'react'
import './FAQ.css'

const faqs = [
  { q: 'Can I use Animify for free?' },
  { q: 'Why should I upgrade to the Starter plan?' },
  { q: 'How does workspace billing work?' },
  { q: 'How do I cancel my subscription?' },
  { q: 'What is your refund policy?' },
]

const answers = [
  'Yes! Animify offers a completely free Starter plan that includes unlimited files, unlimited editors, video/GIF/Lottie export at 720p 30fps, and Figma import — at absolutely no cost.',
  'Upgrading to Professional unlocks HD exports up to 4K at 120fps, removes watermarks, gives you team libraries, and unlimited folder organization — perfect for professional studios and agencies.',
  'Billing is per workspace, charged monthly or annually. You can have multiple members in one workspace and only pay for what you use. Annual billing saves you 20% compared to monthly.',
  'You can cancel anytime from Account Settings → Billing. Your subscription remains active until the end of the current billing cycle, after which you will be downgraded to the free plan.',
  'We offer a 14-day money-back guarantee on all paid plans. Simply reach out to our support team within 14 days of your purchase and we will issue a full refund, no questions asked.',
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)
  const toggle = (i) => setOpenIndex(openIndex === i ? null : i)

  return (
    <section className="faq-section">
      <div className="faq-inner">
        {/* Title — exact Figma: "Frequently Asked Questions", two-tone */}
        <div className="faq-header reveal">
          <h2 className="faq-title">
            Frequently <span className="faq-title-dim">Asked Questions</span>
          </h2>
        </div>

        {/* Each item is its own card — exact Figma: 748px wide, 72px height,
            radial gradient #10141A #0C1018 #0A1017, border 1px radial #687283→50% */}
        <div className="faq-list">
          {faqs.map((item, i) => (
            <div
              key={i}
              className={`faq-item reveal ${openIndex === i ? 'open' : ''}`}
            >
              <button className="faq-q" onClick={() => toggle(i)}>
                <span className="faq-q-text">{item.q}</span>
                <span className="faq-plus">
                  {openIndex === i
                    ? <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><line x1="2" y1="7" x2="12" y2="7" stroke="white" strokeWidth="1.5" strokeLinecap="round"/></svg>
                    : <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><line x1="7" y1="2" x2="7" y2="12" stroke="white" strokeWidth="1.5" strokeLinecap="round"/><line x1="2" y1="7" x2="12" y2="7" stroke="white" strokeWidth="1.5" strokeLinecap="round"/></svg>
                  }
                </span>
              </button>
              <div className="faq-answer">
                <p>{answers[i]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
