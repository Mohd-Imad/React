import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { navItems } from './Dropdown/NavItems'
import './Navbar.css'
import Dropdown from './Dropdown/Dropdown'

const Navbar = () => {
  const [productDropdown, setProductDropdown] = useState(false)
  const [userDropdown, setUserDropdown] = useState(false)

  const displayDropdown = (a)=>{

    if(a==='product'){
      setProductDropdown(true)
      // setUserDropdown(false)
    }
    else if(a==='user'){
      setUserDropdown(true)
      setProductDropdown(false)
    }
  }

  const hideDropdowm = ()=>{
    setProductDropdown(false)
    setUserDropdown(false)
  }

  return (
    <>
      <nav className="navBar">
        <Link to='/' className='brand'>Logo</Link>
        <ul className="navbar-ul">
          {
            navItems.map((item) => {
              if (item.title === 'Product') {
                return <li key={item.id} onMouseEnter={displayDropdown.bind(this,'product')} onMouseLeave={hideDropdowm}>
                  <Link
                    to={item.path} 
                    className={item.cName}>
                    {item.title}
                  </Link>
                  {productDropdown ? <Dropdown /> : null }

                </li>
              }
              else if(item.title=== 'Register'){
                return <li key={item.id} onMouseEnter={displayDropdown.bind(this,'user')} onMouseLeave={hideDropdowm}>
                <Link
                  to={item.path} 
                  className={item.cName}>
                  {item.title}
                </Link>
                {userDropdown ? <Dropdown /> :null }
              </li>
              }
              return <li key={item.id}>
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
