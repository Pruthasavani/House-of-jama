import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './navbar.css'


export default function Navbar() {

  const location = useLocation();

  let currentURl = location.pathname


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
            <Link className={`nav-link ${currentURl === "/" && "active" }`} aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${currentURl === "/about" && "active" }`} to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${currentURl === "/collection" && "active" }`} to="/collection">All Collection</Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${currentURl === "/men" && "active" }`} to="/men" >Men</Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${currentURl === "/women" && "active" }`} to="/women" >Women</Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${currentURl === "/kids" && "active" }`} to="/kids">Kids</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link cart" to="/">
            <i className="fa-solid fa-cart-shopping"></i>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link login" to="/">
            <i className="fa-solid fa-user"></i>
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}
