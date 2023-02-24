import React from 'react'
import Learningclub from '../../components/Learningclub'
import Navbar from '../../components/Navbar'
import Hero from './Hero'
import Footer from '../../components/Footer'
import UpcommingEvent from './UpEvent'

const HomePage = () => {
  return (
    <div>
      <Hero/>
      <UpcommingEvent/>
      <Learningclub/>
      <Footer/>
    </div>
  )
}

export default HomePage