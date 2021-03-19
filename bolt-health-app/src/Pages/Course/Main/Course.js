import {useState} from 'react'

import {Link} from 'react-router-dom'
import './Course.css'
import '../../../Elements/Navbar/Navbar.css'
import '../../../Elements/Button/button.css'

import * as BsIcons from 'react-icons/bs'

function Course (props) {
    const [unenroll, setUnenroll] = useState(false);
    const confirmUnenroll = () => setUnenroll(!unenroll);

    return (
        <> 
            <div className='coursePage'></div>
            <Link to='/course/chat'>
                <BsIcons.BsFillChatFill className='icons chatIcon' />
            </Link>
            <div onClick={confirmUnenroll} className='ButtonSecondary leavePrimary button1'>Unenroll</div>
            {unenroll ? 
            <div className='cancelConfirmCard'>
                <span className='cancelPrompt'>Are you sure you want to unenroll?</span>
                <div onClick={confirmUnenroll} className='ButtonPrimary leaveSecondary button2'>Cancel</div>
                <Link to='/enrolled'>
                    <div onClick={props.changeStage} className='ButtonSecondary leavePrimary button3'>Unenroll</div>
                </Link>
            </div> : null}
        </>
        
    );
};

export default Course;