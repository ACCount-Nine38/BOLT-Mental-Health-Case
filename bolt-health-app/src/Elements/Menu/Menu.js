import React from 'react'
import './Menu.css'

import MenuIcon from './menu.png'
import AccountIcon from './account.png'

function Menu() {
    const [toggle, setToggle] = React.useState(false);
    // changes toggle state to show or not show menu
    const MenuToggle = () => {
        setToggle(!toggle);
    }

    return (
        <div>
            <img className={toggle ? "iconActive" : "icon"} onClick={MenuToggle} src={MenuIcon} alt="Menu icon"></img>
            <div className={toggle ? "drawerActive" : "drawerInactive"}>
                <ul>
                    <li><a href="/missions">Missions</a></li>
                    <li><a href="/missions">Enrolled</a></li>
                    <li><a href="/missions">Connect</a></li>
                    <li><a href="/missions">Premium</a></li>
                    <li listStyleImage={AccountIcon}><a>Account</a></li>
                    <li><a>Settings</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Menu
