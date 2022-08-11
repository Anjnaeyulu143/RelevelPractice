import { Link } from 'react-router-dom'
import React from 'react'
import './index.css'





export const Header = () => {
  
  return (
    <div className="header__container">
        <h1>React Router Dom</h1>
       <ul className="header__links">
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/aboutus">About Us</Link>
        </li>
        <li>
            <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/books">BooksList</Link>
        </li>
       </ul>
    </div>
  )
}
