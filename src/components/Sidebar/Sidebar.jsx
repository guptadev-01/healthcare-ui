import React from 'react'
import './Sidebar.css'
import appointment from '../../assets/appointment.svg'
import calendar from '../../assets/calendar.svg'
import dashbaord from '../../assets/dashboard.svg'
import history from '../../assets/history.svg'
import stat from '../../assets/stat.svg'
import chat from '../../assets/chat.svg'
import support from '../../assets/support.svg'

const Sidebar = () => {
    
  return (
    <div className='sidebar'>
        <h2>Healthcare.</h2>
        <div className='general'>
            <p className='tag'>General</p>
            <div className='side-selected'>
                <img src={dashbaord} alt="" />
                <p>Dashboard</p>
            </div>
            <div className='side'>
                <img src={history} alt="" />
                <p>History</p>
            </div>
            <div className='side'>
                <img src={calendar} alt="" />
                <p>Calendar</p>
            </div>
            <div className='side'>
                <img src={appointment} alt="" />
                <p>Appointments</p>
            </div>
            <div className='side'>
                <img src={stat} alt="" />
                <p>Statistics</p>
            </div>
        </div>
        <div className='tools'>
            <p className='tag'>Tools</p>
            <div className='side'>
                <img src={chat} alt="" />
                <p>Chat</p>
            </div>
            <div className='side'>
                <img src={support} alt="" />
                <p>Support</p>
            </div>
        </div>
    </div>
  )
}

export default Sidebar