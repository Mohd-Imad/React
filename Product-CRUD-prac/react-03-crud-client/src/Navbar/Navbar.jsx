import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav id='navbar' className='navbar navbar-dark bg-dark text-white navbar-expand-lg' >
      <Link to='/'id='brand' className='navbar-brand'>Product-CRUD</Link>
      <ul className="navbar-nav ml-auto">
        <li className="nav-list"><Link to='/createproduct' id='link' className='nav-link'>CreateProduct</Link></li>
        <li className="nav-list"><Link to='/products' id='link' className='nav-link'>Products</Link></li>
        <li className="nav-list"><Link to='/admin' id='link' className='nav-link'>Admin</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
