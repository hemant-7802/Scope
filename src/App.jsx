// import Library
import React from 'react'

// import Components
import Nav from './components/navbar/Nav'
import Heropage from './components/heropage/Heropage'
import Courses from './components/courses/Courses'
import Students from './components/learners/Students'
import Registeration from './components/registerationPage/Registeration'
import Footer from './components/footer/Footer'

export default function App() {
  return (
    <>
      <Nav/>
      <Heropage/>
      <Courses/>
      <Students/>
      <Registeration/>
      <Footer />
    </>
  )
}