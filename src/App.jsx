import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Clients from './components/Clients'
import Features from './components/Features'
import WhyChooseUs from './components/WhyChooseUs'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('visible')
            }, 0)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )

    const elements = document.querySelectorAll('.reveal')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Navbar />
      <Hero />
      <Clients />
      <Features />
      <WhyChooseUs />
      <Pricing />
      <FAQ />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  )
}

export default App
