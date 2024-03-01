// import Library
import React from 'react'

// import Components
import Footer from './components/Footer'
import Hero from './components/Hero'
import Features from './components/Features'
import Testimonial from './components/Testimonial'
import FAQ from './components/FAQ'
import CenteredCard from './components/CenteredCars'
import Stats from './components/Stats'
import Contact from './components/Contact'

export default function App() {
  return (
    <>
      <Hero />
      <Features />
      <CenteredCard />
      <Testimonial />
      <Stats />
      <Contact />
      <FAQ />
      <Footer />
    </>
  )
}