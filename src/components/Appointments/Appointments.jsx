import React from 'react'
import './Appointments.css'
import tooth from '../../assets/tooth.png'
import muscle from '../../assets/muscle.png'
import health from '../../assets/healthcare.png'
import heart from '../../assets/heart.png'
import eye from '../../assets/eye.png'
import neurologist from '../../assets/neurologist.png'

const Appointments = () => {
    const todayAppointment = [
        {doc: 'Dr. Cameron Williamson', time: '12:00-02:00', name: 'Dentist', icon: tooth},
        {doc: 'Dr. Kevin Djones', time: '02:00-03:00', name: 'Physiotherapy', icon: muscle}
    ];
    const upcomingAppointments = [
  { day: 'Thursday', events: [
    { time: '11:00 AM', title: 'Health', icon: health },
    { time: '14:00 PM', title: 'Ophthalmologist', icon: eye },
  ]},
  { day: 'Saturday', events: [
    { time: '12:00 AM', title: 'Cardiologist', icon: heart },
    { time: '16:00 PM', title: 'Neurologist', icon: neurologist },
  ]},
];
  return (
    <div>
        <div className='appoint'>
            {todayAppointment.map((item, index) => {
                return (
                    <div key={index} className='appoint-card'>
                        <div className='appoint-icon'>
                            <p>{item.name}</p>
                            <img src={item.icon} alt="" />
                        </div>
                        <p>{item.time}</p>
                        <p>{item.doc}</p>
                    </div>
                )
            })}
        </div>
        <h3>The Upcoming Schedule</h3>
        <div>
            {upcomingAppointments.map((item, index) => {
                return(
                    <div key={index} className='upcoming-appoint'>
                        <p className='day'>
                            On {item.day}
                        </p>
                        <div className='upcoming-appoint-card'>
                            {item.events.map((item, index) => {
                                return(
                                    <div key={index} className='upcoming-appoint-details'>
                                       <div className='appoint-icon'>
                                             <p>{item.title}</p>
                                            <img src={item.icon} alt="" />
                                       </div>
                                       <p>{item.time}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Appointments