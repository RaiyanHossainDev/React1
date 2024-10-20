import React from 'react'

const Navbar = () => {
  return (
    <div>
        <div className="logo">
            <img src="" alt="" />
        </div>
        <div className="main_menu">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Blog</li>
                <li>Contact</li>
            </ul>
        </div>
        <div className="events">
            <input type="text" /><button>Search</button>
            <button>Login</button>
        </div>
    </div>
  )
}

export default Navbar