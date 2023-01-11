import React from 'react'
import logo from "./images/logo.svg"
import { HiMenu, HiOutlineChevronRight } from "react-icons/hi";
import { useGlobalContext } from './context'

function Navbar() {
    const {openSidebar,openSubmenu,closeSubmenu} = useGlobalContext()
  return (
    <nav className="nav">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="stripe-logo" className="nav-logo" />
          <button className='toggle-btn' onClick={openSidebar}>
            <HiMenu />
          </button>
        </div>
        <ul className='nav-links'>
            <li>
                <button className='link-btn'>products</button>
            </li>
            <li>
                <button className='link-btn'>solutions</button>
            </li>
            <li>
                <button className='link-btn'>developers</button>
            </li>
            <li>
                <button className='link-btn'>resources</button>
            </li>
            <li>
                <button className='link-btn'>pricing</button>
            </li>
        </ul>
        <button className='signIn-btn'>sign in <HiOutlineChevronRight style={{paddingTop: "7px", fontSize: "19px", fontWeight: "bolder"}}/> </button>
      </div>
    </nav>
  );
}

export default Navbar