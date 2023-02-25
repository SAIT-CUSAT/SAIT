import React from 'react'
import Learningclub from '../../components/Learningclub'
import Navbar from '../../components/Navbar'
import Hero from './Hero'
import Footer from '../../components/Footer'
import UpcommingEvent from './UpEvent'
import Activities from './Activities'
import Placements from './Placements'
import FeaturedAlumni from './FeaturedAlumni'
import Executives from './Executives'

const HomePage = () => {
  return (
    <div>
      <Hero/>
      <UpcommingEvent/>
      <Activities/>
      <Placements/>
      <FeaturedAlumni/>
      <Executives/>
      <Learningclub/>
    </div>
  )
}

export default HomePage