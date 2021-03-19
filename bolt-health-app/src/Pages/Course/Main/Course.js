import {Link} from 'react-router-dom'
import './Course.css'
import '../../../Elements/Navbar/Navbar.css'

import * as BsIcons from 'react-icons/bs'

function Course () {
    return (
        <> 
            <div className='coursePage'></div>
            <Link to='/course/chat'>
                <BsIcons.BsFillChatFill className='icons chatIcon' />
            </Link>
        </>
        
    );
};

export default Course;