import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer/Footer'
import SideNavbar from '../Components/SideNavbar/SideNavbar'

const LayoutThree = () => {
  return (
    <div className='flex h-screen'>
        <SideNavbar />
        <Outlet />
        <Footer />
    </div>
  )
}

export default LayoutThree