import React from 'react'
import './SideNavbar.css'
import { Link } from 'react-router-dom'

const SideNavbar = () => {
  return (
    <>
        <div className="main-menu">
            <div className="logo">
                <img className='w-[150px]' src="images/logo.avif" alt="logo" />
            </div>
            <ul className='gap-[20px]'>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={'/Contact'}>Contact</Link></li>
                <li><Link to={'/Blog'}>Blog</Link></li>
                <li><Link to={'/About'}>About us</Link></li>
                <li><Link to={"/LayoutTwo"}>Help</Link></li>
                <li><Link to={"/LayoutThree"}>Documentaion</Link></li>
            </ul>
        </div>
    </>
  )
}

export default SideNavbar