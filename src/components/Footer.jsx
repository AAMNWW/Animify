import React from 'react'
import './Footer.css'

const AnimifyLogo = () => (
  <svg width="32" height="20" viewBox="0 0 36 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.5 11C5.5 7.962 7.962 5.5 11 5.5C14.038 5.5 16.5 7.962 16.5 11C16.5 14.038 14.038 16.5 11 16.5C7.962 16.5 5.5 14.038 5.5 11Z"
      stroke="white" strokeWidth="2" fill="none"/>
    <path d="M16.5 11C16.5 7.962 18.962 5.5 22 5.5C25.038 5.5 27.5 7.962 27.5 11"
      stroke="white" strokeWidth="2" fill="none" strokeLinecap="round"/>
    <path d="M27.5 11C27.5 14.038 29.962 16.5 33 16.5"
      stroke="white" strokeWidth="2" fill="none" strokeLinecap="round"/>
    <circle cx="11" cy="11" r="3" fill="white"/>
  </svg>
)

const cols = [
  {
    title: 'Home',
    links: ['About', 'Blog', 'Contact'],
  },
  {
    title: 'Other Pages',
    links: ['Log In', 'Forgot Password', 'Terms & Services', 'Privacy Policy'],
  },
  {
    title: 'My Work',
    links: ['Dribbble', 'Upwork', 'Awwwwards', 'X'],
  },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          {/* Brand column */}
          <div className="footer-brand-col">
            <div className="footer-logo">
              <AnimifyLogo />
              <span className="footer-logo-text">Animify</span>
            </div>
            <p className="footer-addr">
              1234 Innovation Blvd, Suite 567<br />
              Tech City, TC 98765, United States.
            </p>
            <p className="footer-contact">(555) 123-4567</p>
            <p className="footer-contact">contact@animify.com</p>
          </div>

          {/* Link columns */}
          {cols.map((col) => (
            <div className="footer-col" key={col.title}>
              <h4 className="footer-col-title">{col.title}</h4>
              <ul className="footer-links">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <span>© 2024 Animify. All rights reserved.</span>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
