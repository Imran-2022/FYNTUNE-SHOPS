import React from 'react'
import './Sidebar.css'
import { FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Sidebar = ({ isopen, toggle }) => {

    let opacityClasses = ['sidebar-container'];
    if (isopen) {
        opacityClasses.push('opacity-on')
    } else {
        opacityClasses.push('opacity-off')
    }
    return (
        <div className={opacityClasses.join(' ')} isopen={isopen.toString()} onClick={toggle}>
            <div className="icon">
                <FaTimes className="close-icon" onClick={toggle} />
            </div>
            <div className="sidebar-wrapper">
                <div className="sidebar-menu">
                <Link className="nav-link text-light Link" to="add-shops">ADD SHOPS</Link>
                </div>
            </div>
        </div>

    )
}

export default Sidebar