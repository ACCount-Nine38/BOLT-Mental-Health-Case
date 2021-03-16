import React from 'react'
import Drawer from './Drawer/Drawer'
import './Menu.css'
import Backdrop from '../Backdrop/Backdrop'

const Menu = (props) => {
    let attachedClasses = ['Menu', 'Close'];
    if (props.open) {
        attachedClasses = ['Menu', 'Open']
    }
    return (
        <>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={attachedClasses.join(' ')} onClick={props.closed}>
                <Drawer />
                <nav>
                </nav>
            </div>
        </>
    );
};

export default Menu;