import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <>
      <nav className='navbar navbar-dark bg-dark text-white navbar-expand-lg'>
        <Link to='/' className='navbar-brand'>React User-App</Link>
        <div className="ml-auto">
        <ul className="navbar-nav">
            <li className="nav-list"><Link to='/user' className="nav-link">Users</Link></li>
        </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
