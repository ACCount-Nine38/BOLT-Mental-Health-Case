import React, {useState} from 'react'
import './Calendar.css'
import '../../../Elements/Button/button.css'

import * as IoIcons from 'react-icons/io'

const Calendar = () => {
    const [appointed, setAppointed] = useState(false);
    const [confirmAppoint, setConfirmAppoint] = useState(false);
    const arrange = () => setConfirmAppoint(!confirmAppoint);
    const confirm = () => {
        setConfirmAppoint(!confirmAppoint);
        setAppointed(true);
    }
    return (
        <div className='chatBack'>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <h1 className='calendarHead'>Book your appointment</h1>
            <br />
            <div className='calendar'>
                <div className="month">      
                    <ul>
                        <li className="prev">&#10094;</li>
                        <li className="next">&#10095;</li>
                        <li>
                        March<br/>
                        <span>2021</span>
                        </li>
                    </ul>
                </div>

                <ul className="weekdays">
                    <li>Mo</li>
                    <li>Tu</li>
                    <li>We</li>
                    <li>Th</li>
                    <li>Fr</li>
                    <li>Sa</li>
                    <li>Su</li>
                </ul>

                <ul className="days"> 
                    <li></li> 
                    <li><span className="disabled">1</span></li>
                    <li><span className="disabled">2</span></li>
                    <li><span className="disabled">3</span></li>
                    <li><span className="disabled">4</span></li>
                    <li><span className="disabled">5</span></li>
                    <li><span className="disabled">6</span></li>
                    <li><span className="disabled">7</span></li>
                    <li><span className="disabled">8</span></li>
                    <li><span className="disabled">9</span></li>
                    <li><span className="disabled">10</span></li>
                    <li><span className="disabled">11</span></li>
                    <li><span className="disabled">12</span></li>
                    <li><span className="disabled">13</span></li>
                    <li><span className="disabled">14</span></li>
                    <li><span className="disabled">15</span></li>
                    <li><span className="disabled">16</span></li>
                    <li><span className="disabled">17</span></li>
                    <li><span className="disabled">18</span></li>
                    <li><span className="disabled">19</span></li>
                    <li onClick={arrange}><span className={appointed ? "active" : null}>20</span></li>
                    <li><span className="disabled">21</span></li>
                    <li>22</li>
                    <li>23</li>
                    <li>24</li>
                    <li><span className="disabled">25</span></li>
                    <li>26</li>
                    <li>27</li>
                    <li><span className="disabled">28</span></li>
                    <li><span className="disabled">29</span></li>
                    <li>30</li>
                    <li>31</li>
                </ul>
            </div>
            <div className={confirmAppoint ? 'arrange active' : 'arrange'}>
                <IoIcons.IoIosClose className='closeIcon' onClick={arrange} />
                <div className='ButtonSecondary confirmButton' onClick={confirm}>Confirm</div>
                <div className='ButtonPrimary cancelButton' onClick={arrange}>Cancel</div>
                <br/>
                <br/>
                <br/>
                <br/>
                <span className='appointmentTextSmall'>Confirm for a video appointment <br/> on </span>
                <span className='appointmentTextBig'>March 20?</span>
                <br/>
                <br/>
                <br/>
                <span className='appointmentTextSmall'>Select a start time</span>
                <hr className='line'/>
                <input type="time" className='appointmentInput' min="12:00" max="19:00" step="1800"/><br/>
                <span className='appointmentTextSmall'>Select an end time</span>
                <hr className='line'/>
                <input type="time" className='appointmentInput' min="12:00" max="19:00" step="1800"/><br/>
            </div>
        </div>
    )
}

export default Calendar
