import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import About from '../components/About'
import Service from '../components/Service'
import Experience from '../components/Experience'
import Portfolio from '../components/Portfolio'
import Testimonial from '../components/Testimonial'
import Partner from '../components/Partner'

const Home = () => {
  return (
     <>
         <Navbar/>
         <Banner/>
         <About/>
         <Service/>
         <Experience/>
         <Portfolio/>
         <Testimonial/>
         <Partner/>
     </>
  )
}

export default Home