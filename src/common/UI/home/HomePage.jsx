import React from 'react'
import Learningclub from '../../components/Learningclub'
import Navbar from '../../components/Navbar'
import Hero from './Hero'
import Footer from '../../components/Footer'

const HomePage = () => {
  return (
    <div>
      <Hero/>
      <Learningclub/>
      <Footer/>
    </div>
  )
}

export default HomePage