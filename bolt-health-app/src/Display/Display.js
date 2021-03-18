import {useState} from 'react'
import { Route } from 'react-router-dom';
import './Display.css'

import NavBar from '../Elements/Navbar/Navbar'

import Login from '../Pages/Login/Login';
import Missions from '../Pages/Missions/Missions'
import Connect from '../Pages/Connect/Connect'
import Preview from '../Pages/Connect/Preview/Preview'
import Chat from '../Pages/Course/Chat/Chat'
import Course from '../Pages/Course/Main/Course'
import Enrolled from '../Pages/Enrolled/Enrolled'
import Premium from '../Pages/Premium/Premium'

export function Display () {
    const [stage2, setstage2] = useState(false);
    const newEnrolled = () => setstage2(true);
    return (
        <div>
            <div className='header' />
            <Route path="/" exact render={() => <Login />} />
            <Route path="/missions" exact render={() => <><Missions stage2={stage2} /><NavBar /></>} />
            <Route path="/enrolled" exact render={() => <><Enrolled stage2={stage2} /><NavBar /></>} />
            <Route path="/connect" exact render={() => <><Connect stage2={stage2} /><NavBar /></>} />
            <Route path="/connect/preview" exact render={() => <><Preview changeStage={newEnrolled} /><NavBar /></>} />
            <Route path="/premium" exact render={() => <><Premium /><NavBar /></>} />
            <Route path="/course/main" exact render={() => <><Course /><NavBar /></>} />
            <Route path="/course/chat" exact render={() => <><Chat /><NavBar /></>} />
            
        </div>
    );
};