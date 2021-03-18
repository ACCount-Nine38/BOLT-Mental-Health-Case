import React, {useState} from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'


import * as FaIcons from "react-icons/fa";
import { SidebarData } from './SidebarData';

function Navbar() {
    const [sidebar, setsidebar] = useState(false);

    const showSidebar = () => setsidebar(!sidebar);

    return (
        <>
            <div className="pad">
                <Link to="#" className='menu-bars'>
                    <FaIcons.FaBars className='icons' onClick={showSidebar} />
                </Link>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSidebar}>
                    <li className='navbar-toggle'>
                        <Link to="#" className='menu-bars'>
                        <FaIcons.FaBars className='icons invert' onClick={showSidebar} />
                        </Link>
                    </li>
                    {SidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span className='navTitle'>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </>
    )
}

export default Navbar
