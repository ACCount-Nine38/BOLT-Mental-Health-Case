import React from 'react';
import './Toggle.css';

const Toggle = (props) => (
    <div onClick={props.clicked} className='Toggle'>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default Toggle;