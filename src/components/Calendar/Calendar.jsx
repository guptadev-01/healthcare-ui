import React from 'react'
import './Calendar.css'
import profile from '../../assets/profile.svg'
import add from '../../assets/add.svg'
import Appointments from '../Appointments/Appointments'

const Calendar = () => {
   
  return (
    <div className='cal-container'>
        <div className='profile-sec'>
            <img src={profile} alt="" />
            <img src={add} alt="" />
        </div>
        <h3>May 2025</h3>
        <div className='calendar'>
            <div className='cal-card'>
                <p>Mon</p>
                <p>15</p>
                <p>10:00</p>
                <p>11:00</p>
                <p>12:00</p>
            </div>
            <div className='cal-card'>
                <p>Tue</p>
                <p>13</p>
                <p>-</p>
                <p>01:00</p>
                <p>02:00</p>
            </div>
            <div className='cal-card'>
                <p>Wed</p>
                <p>14</p>
                <p>10:00</p>
                <p>12:00</p>
                <p>-</p>
            </div>
            <div className='cal-card'>
                <p>Thu</p>
                <p>15</p>
                <p>11:00</p>
                <p>-</p>
                <p>01:00</p>
            </div>
            <div className='cal-card'>
                <p>Fri</p>
                <p>16</p>
                <p>11:00</p>
                <p>12:00</p>
                <p>01:00</p>
            </div>
            <div className='cal-card'>
                <p>Sat</p>
                <p>17</p>
                <p>10:00</p>
                <p>-</p>
                <p>12:00</p>
            </div>
            <div className='cal-card'>
                <p>Sun</p>
                <p>18</p>
                <p>-</p>
                <p>-</p>
                <p>-</p>
            </div>
        </div>
        <Appointments />
    </div>
  )
}

export default Calendar