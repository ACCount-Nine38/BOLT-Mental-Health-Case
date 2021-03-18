import { Route } from 'react-router-dom';
import './Display.css'

import NavBar from '../Elements/Navbar/Navbar'

import Login from '../Pages/Login/Login';
import Missions from '../Pages/Missions/Missions'
import Connect from '../Pages/Connect/Connect'
import Chat from '../Pages/Course/Chat/Chat'
import Course from '../Pages/Course/Main/Course'
import Enrolled from '../Pages/Enrolled/Enrolled'
import Premium from '../Pages/Premium/Premium'

export function Display () {
    return (
        <div>
            <div className='header' />
            <Route path="/" exact render={() => <Login />} />
            <Route path="/missions" exact render={() => <><Missions /><NavBar /></>} />
            <Route path="/enrolled" exact render={() => <><Enrolled /><NavBar /></>} />
            <Route path="/connect" exact render={() => <><Connect /><NavBar /></>} />
            <Route path="/premium" exact render={() => <><Premium /><NavBar /></>} />
            <Route path="/enrolled/course" exact render={() => <><Course /><NavBar /></>} />
            <Route path="/enrolled/chat" exact render={() => <><Chat /><NavBar /></>} />
            
        </div>
    );
};