import { Route } from 'react-router-dom';

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
            <Route path="/" exact render={() => <Login />} />
            <Route path="/missions" exact render={() => <Missions />} />
            <Route path="/enrolled" exact render={() => <Enrolled />} />
            <Route path="/connect" exact render={() => <Connect />} />
            <Route path="/premium" exact render={() => <Premium />} />
            <Route path="/enrolled/course" exact render={() => <Course />} />
            <Route path="/enrolled/chat" exact render={() => <Chat />} />
        </div>
    );
};