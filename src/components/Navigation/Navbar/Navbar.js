import React from 'react'
import { AiOutlineShopping,AiFillFolderAdd } from 'react-icons/ai';
import './Navbar.css'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'

const Navbar = ({ toggle }) => {
    return (
        <nav>
            <Link className="nav-link text-light Link" to="/" style={{display:"flex",justifyContent: "center",alignItems: "center"}}><AiOutlineShopping style={{fontSize: '20px'}}/> FYNTUNE<span style={{ color: "rgb(255 211 0)", padding: "2px", fontWeight: "bolder" }}>-SHOPS</span></Link>

            <div className="icons">
                <div className="menu-items">
                    <Link className="nav-link text-light Link" to="add-shops" style={{display:"flex",justifyContent: "center",alignItems: "center"}}><AiFillFolderAdd style={{fontSize: '20px'}}/>CRUD SHOP</Link>
                </div>
                <div className="mobile-menu-icon">
                    <FaBars onClick={toggle} />
                </div>
            </div>
        </nav>
    )
}

export default Navbar