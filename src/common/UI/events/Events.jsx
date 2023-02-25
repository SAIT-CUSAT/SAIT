import React from 'react'
import Navbar from '../../components/Navbar.jsx'
import Landing from './Landing.jsx'
import Carosel from './Carosel.jsx'
import Upevent from './Upevent.jsx'
import Allevent from './Allevent.jsx'

const Events = () => {
  return (
    <div>
        <Landing />
        <Carosel />
        <Upevent/>
        <Allevent/>
    </div>
  )
}

export default Events