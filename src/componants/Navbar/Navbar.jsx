import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'



export default function Navbar() {
  return (
    <>
      <div className="header">
        <ul className="nav justify-content-center">
        <li className="nav-item">
            <Link className="nav-link logo active" aria-current="page" to="/">
              <img src="./images/logo.png" alt="" width={70} />
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/collection">All Collection</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/men" >Men</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/women" >Women</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/kids">Kids</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link cart" to="/">
            <i class="fa-solid fa-cart-shopping"></i>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link login" to="/">
            <i class="fa-solid fa-user"></i>
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}
