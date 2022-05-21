import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'

const Navbar = ({ toggle }) => {
    return (
        <nav>
            <Link className="nav-link text-light Link" to="/">FYNTUNE<span style={{ color: "rgb(255 211 0)", padding: "2px", fontWeight: "bolder" }}>-SHOPS</span></Link>

            <div className="icons">
                <div className="menu-items">
                    <input type="search" name="" id="" placeholder="Search by shop Name" />
                    <Link className="nav-link text-light Link" to="add-shops">ADD SHOPS</Link>
                </div>
                <div className="mobile-menu-icon">
                    <FaBars onClick={toggle} />
                </div>
            </div>
        </nav>
    )
}

export default Navbar