import React from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart} from 'phosphor-react'
import './Navbar.css'
function Navbar() {
  return (
    <div className='navbar'>
      <div className='links'>
        <Link to="/login">Login</Link>
        <Link to="/">Shop</Link>
        <Link to="/cart">
          <ShoppingCart size={32}></ShoppingCart>
        </Link>
        
      </div>
    </div>
  )
}

export default Navbar