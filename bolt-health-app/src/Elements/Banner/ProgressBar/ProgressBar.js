import React from 'react'
import '../Banner.css'
import './ProgressBar.css'

const ProgressBar = (props) => {
    return (
        <div className='banner'>
            <h2 className='stat'>{props.points}/10</h2>
            <div className={props.points === 0 ? 'remainder' : 'current'} />
        </div>
    )
}

export default ProgressBar
