import {useState} from 'react'
import {Link} from 'react-router-dom'
import './Missions.css'

import Navbar from '../../Elements/Navbar/Navbar'
import ProgressBar from '../../Elements/Banner/ProgressBar/ProgressBar'
import Updates from '../../Elements/Banner/Updates/Updates'
import MissionBanner from '../../Elements/Banner/MissionBanner/MissionBanner'

import * as CgIcons from 'react-icons/cg'

function Missions () {
    const [points, setPoints] = useState(0);
    const missionComplete = () => setPoints(10);

    return (
        <> 
            <Navbar />
            <ProgressBar points={points} />
            <Link to='/enrolled'>
                <Updates />
            </Link>
            <h1>Missions</h1>
            <div className='line'/>
            
            <Link to='/missions/add' className='taskAdd'>
                <CgIcons.CgAdd className='addButton' />
            </Link>
            <MissionBanner title='Go on a nature walk' value='10' fun={missionComplete} 
                desciption='Reconnecting with nature and seeing green is a proven way to reduce stress!' />
            <MissionBanner title='Meditate' value='10' fun={missionComplete} 
                desciption='Meditation facts' />
        </>
        
    );
};

export default Missions;