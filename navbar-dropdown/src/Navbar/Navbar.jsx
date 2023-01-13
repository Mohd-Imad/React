import React from 'react'
import {Link} from 'react-router-dom'
import {navItems} from './Dropdown/NavItems'
import './Navbar.css'

const Navbar = () => {
  return (
    <>
         <nav className="navBar">
      <Link to='/' className='brand'>Logo</Link>
        <ul className="navbar-ul">
          {
            navItems.map((item)=>{
                return <li>
                    <Link to={item.path} className={item.cName}>{item.title}</Link>
                </li>
            })
          }
        </ul>
    </nav>
    </>
  )
}

export default Navbar
