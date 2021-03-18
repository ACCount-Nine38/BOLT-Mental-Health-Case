import React from 'react'
import './Preview.css'
import '../../../Elements/Button/button.css'
import {Link} from 'react-router-dom'

const Preview = (props) => {
    return (
        <div className='preview'>
            <Link to='/connect'>
                <div className='ButtonPrimary enrollButton' onClick={props.changeStage}>Enroll</div>
            </Link>
        </div>
    )
}

export default Preview
