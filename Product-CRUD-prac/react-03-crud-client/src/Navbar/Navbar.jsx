import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar navbar-dark bg-dark text-white navbar-expand-lg' >
      <Link to='/' className='navbar-brand'>React Product-CRUD</Link>
      <ul className="navbar-nav ml-auto">
        <li className="nav-list"><Link to='/createproduct' className='nav-link'>CreateProduct</Link></li>
        <li className="nav-list"><Link to='/products' className='nav-link'>Products</Link></li>
        <li className="nav-list"><Link to='/admin' className='nav-link'>Admin</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
