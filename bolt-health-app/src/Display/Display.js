import { Route } from 'react-router-dom';

import Login from '../Pages/Login/Login';
import Missions from '../Pages/Missions/Missions'

export function Display () {
    return (
        <div>
            <Route path="/" exact render={() => <Login />} />
            <Route path="/missions" exact render={() => <Missions />} />
            <Route path="/enrolled" exact render={() => <p>Enrolled</p>} />
            <Route path="/connect" exact render={() => <p>Connect</p>} />
            <Route path="/premium" exact render={() => <p>Premium</p>} />
            <Route path="/enrolled/course" exact render={() => <p>Course Main</p>} />
            <Route path="/enrolled/chat" exact render={() => <p>Chat</p>} />
        </div>
    );
};