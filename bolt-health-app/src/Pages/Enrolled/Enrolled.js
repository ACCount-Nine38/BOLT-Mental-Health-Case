import React from 'react'
import '../Connect/Connect.css'
import {Link} from 'react-router-dom'

const Enrolled = (props) => {
    return (
        <div>
            {props.stage2 ? 
            <Link to='/course/main'>
                <div className='card real' />
            </Link> : null}
            <div className='card fake3' />
        </div>
    )
}

export default Enrolled
