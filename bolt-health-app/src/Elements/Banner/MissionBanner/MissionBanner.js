import React, {useState} from 'react'
import '../Banner.css'
import './MissionBanner.css'
import '../Updates/Updates.css'
import '../../Button/button.css'

import * as GrIcons from 'react-icons/gr'
import * as AiIcons from 'react-icons/ai'

const MissionBanner = (props) => {
    const [expanded, setExpanded] = useState(false);
    const expand = () => setExpanded(!expanded);
    return (
        <>
            <div className='banner extra' onClick={expand}>
                <span className='missionHead'>{props.title}{expanded ? <AiIcons.AiOutlineMinus className='icon' /> : <GrIcons.GrFormAdd className='icon' />}<span className='missionPoints'>{props.value}pts</span></span>
            </div>
            {expanded ? 
            <div className='missionExpand'>
                <p className='description'>{props.desciption}</p>
                <div className='ButtonPrimary missionComplete' onClick={props.fun}>Finish!</div>
            </div> : null}
        </>
    )
}

export default MissionBanner
