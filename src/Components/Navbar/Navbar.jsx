import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
   <>
        <div className="main_menu px-24 py-10 rounded-3xl bg-orange-600">
            <div className="row flex items-center justify-between">
                <div className="menu_logo">
                    <img className='w-[120px]' src="images/logo.avif" alt="" />
                </div>
                <div className="menu">
                    <ul className='flex gap-12'>
                        <li><a className='text-white text-2xl hover:text-[28px] hover:text-[#024CAA] transition-all' href="/">Home</a></li>
                        <li><a className='text-white text-2xl hover:text-[28px] hover:text-[#024CAA] transition-all' href="/About">About</a></li>
                        <li><a className='text-white text-2xl hover:text-[28px] hover:text-[#024CAA] transition-all' href="/Contact">Contact</a></li>
                        <li><a className='text-white text-2xl hover:text-[28px] hover:text-[#024CAA] transition-all' href="/Blog">Blog</a></li>
                    </ul>
                </div>
            </div>
        </div>
   </>
  )
}

export default Navbar