import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
   <>
        <div className="main_menu px-24 py-10 rounded-3xl bg-orange-600">
            <div className="row container flex items-center justify-between">
                <div className="menu_logo">
                    <img className='w-[120px]' src="images/logo.avif" alt="" />
                </div>
                <div className="menu">
                    <ul className='flex gap-12'>
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/Contact'}>Contact</Link></li>
                        <li><Link to={'/Blog'}>Blog</Link></li>
                        <li><Link to={'/About'}>About us</Link></li>
                        <li><Link to={'/layoutTwo'}>Help</Link></li>
                        <li><Link to={'/layoutThree'}>Documentetion</Link></li>
                    </ul>
                </div>
            </div>
        </div>
   </>
  )
}

export default Navbar