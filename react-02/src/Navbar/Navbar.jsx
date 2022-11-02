import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className='navbar navbar-dark bg-dark text-white'>
      <Link to='/' className="navbar-brand">React ProductList App</Link>
      <div className="ml-auto">
        <ul className="navbar-nav">
            <li className="nav-list"><Link className='nav-link' to='/product'>Products</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
