import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import './Missions.css'

import ProgressBar from '../../Elements/Banner/ProgressBar/ProgressBar'
import Updates from '../../Elements/Banner/Updates/Updates'
import MissionBanner from '../../Elements/Banner/MissionBanner/MissionBanner'

import * as CgIcons from 'react-icons/cg'
import * as IoIcons from 'react-icons/io'

function Missions () {
    const [points, setPoints] = useState(0);
    const missionComplete = () => setPoints(10);

    const [showAddPage, setShowAddPage] = useState(false);
    const displayAddPage = () => setShowAddPage(!showAddPage);

    const [missionAddDemo, setMissionAddDemo] = useState(false);
    const demoStart = () => {
        displayAddPage();
        setMissionAddDemo(true);
    }
    const demoEnd = () => {
        missionComplete();
        setMissionAddDemo(false);
    }

    useEffect(() => {
        var slider = document.getElementById("slidePoints");
        var output = document.getElementById("slideValue");
        output.innerHTML = 10;

        slider.oninput = function() {
            output.innerHTML = this.value;
        }
    })

    

    return (
        <> 
            <ProgressBar points={points} />
            <Link to='/enrolled'>
                <Updates />
            </Link>
            <h1>Missions</h1>
            <div className='line'/>
            
            <div className='missionList'>
                <MissionBanner title='Go on a nature walk' value='10' fun={missionComplete} 
                    desciption="Fresh air helps to send plenty of oxygen through the blood, allowing your lungs to work at full capacity and benefits both our physical and mental health. Plus, as proven by mathematics, oxygen to your brain = more brain power." />
                <MissionBanner title='Meditate' value='10' fun={missionComplete} 
                    desciption='Meditation is proven to reduce stress! Taking a moment to meditate everyday gives your mind some time to ease away from work.' />
                <MissionBanner title='Listen to slow music' value='3' fun={missionComplete} 
                    desciption='Slow-paced instrumental music can induce the relaxation response by helping lower blood pressure and heart rate as well as stress hormones. Some types of classical, Celtic, Native American and Indian music can be particularly soothing, but simply listening to the music you enjoy is effective too.' />
                <MissionBanner title='Gardening for an hour' value='7' fun={missionComplete}
                    desciption='Studies have also found evidence that being in green is linked with less anxiety and depression, and better stress management.' />
                {missionAddDemo ? 
                <MissionBanner title='Get 10 hours of sleep' value='10' fun={demoEnd}
                    desciption='Getting a good night’s rest improves your energy the next day!' />
                : <></>}
            </div>
            <CgIcons.CgAdd className='taskAddButton' onClick={displayAddPage} />
            <div className={showAddPage ? 'addPage active': 'addPage'}>
                <IoIcons.IoIosClose className='closeIcon' onClick={displayAddPage} />
                <div className='ButtonSecondary addMissionButton' onClick={demoStart}>Confirm</div>
                <div className='ButtonPrimary cancelMissionButton' onClick={displayAddPage}>Cancel</div>
                <br />
                <br />
                <br />
                <br />
                <span className='appointmentTextSmall'>Task</span> <br />
                <hr className='line'/>
                <input type="text" className='missionAddTitle' />
                <span className='appointmentTextSmall'>Description</span> <br />
                <hr className='line'/>
                <textarea className='missionAddDescription' />
                <br />
                
                <div className='slidercontainer'>
                    <span className='appointmentTextSmall'>Points for Completion: </span>
                    <span id='slideValue' className='appointmentTextSmall'></span> <br />
                    <input type="range" className='slider' min='1' max='10' id='slidePoints' />
                </div>
                <br />
                <select className='missionAddCycle'>
                    <option value='0'>Repeat every...</option>
                    <option value='1'>Day</option>
                    <option value='2'>Week</option>
                    <option value='3'>Month</option>
                </select>
            </div>
        </>
        
    );
};

export default Missions;