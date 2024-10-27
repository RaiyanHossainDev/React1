import React from 'react'
import { Outlet } from 'react-router-dom'
import SideNavbar from '../Components/SideNavbar/SideNavbar'
import Footer from '../Components/Footer/Footer'

const Layout = () => {
  return (
    <>
        <div className='flex justify-center'>
          <SideNavbar />
          <Outlet />
        </div>
        <Footer />
    </>
  )
}

export default Layout