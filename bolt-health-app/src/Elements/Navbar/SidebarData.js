import React from 'react'

import * as FaIcons from "react-icons/fa";
import * as BiIcons from "react-icons/bi";
import * as BsIcons from "react-icons/bs";


export const SidebarData = [
    {
        title: 'Missions',
        path: '/missions',
        icon: <BiIcons.BiCheckboxChecked className='icons invert' />,
        cName: 'nav-text'
    },
    {
        title: 'Enrolled',
        path: '/enrolled',
        icon: <FaIcons.FaHandshake className='icons invert' />,
        cName: 'nav-text'
    },
    {
        title: 'Connect',
        path: '/connect',
        icon: <BiIcons.BiLink className='icons invert' />,
        cName: 'nav-text'
    },
    {
        title: 'Subscribe',
        path: '/premium',
        icon: <BsIcons.BsFillStarFill className='icons invert' />,
        cName: 'nav-text'
    },
    {
        title: 'Account',
        path: '/missions',
        icon: <FaIcons.FaHandshake className='icons invert' />,
        cName: 'nav-text'
    },
    {
        title: 'Settings',
        path: '/missions',
        icon: <BsIcons.BsFillGearFill className='icons invert' />,
        cName: 'nav-text'
    },
]