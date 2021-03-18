import React from 'react'
import {Link} from 'react-router-dom'
import './Connect.css'

const Connect = (props) => {
    return (
        <div>
            <div className='search'>
                <span>Search</span>
            </div>
            {!props.stage2 ? 
            <Link to='/connect/preview'>
                <div className='card real' />
            </Link> : null}
            <div className='card fake1' />
            <div className='card fake2' />
        </div>
    )
}

export default Connect
