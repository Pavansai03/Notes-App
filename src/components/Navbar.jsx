import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
         <NavLink className="text p10" to="/">Home</NavLink>
         <NavLink className={`text p10 ${({ isActive }) => (isActive ? 'active' : 'inactive')}`} to="/pastes">All Notes</NavLink>
    </div>
  )
}

export default Navbar
