import React from 'react'
import './DashboardOverview.css'
import lungs from '../../assets/lungs.png'
import tooth from '../../assets/tooth.png'
import bone from '../../assets/bone.png'
import body from '../../assets/body.jpg'
import Activity from '../Activity/Activity'

const DashboardOverview = () => {
    
    const dash = [{name: 'Lungs', time: 'Date: May 05, 2025', icon: lungs, class: 'report', status: 'red'},
        {name: 'Teeth', time: 'Date: May 05, 2025', icon: tooth, class: 'report', status: 'green'},
        {name: 'Bone', time: 'Date: May 05, 2025', icon: bone, class: 'report', status: 'orange'}
    ]
  return (
    <div>
        <h2>Dashboard</h2>
        <div className='main-container'>
            <div>
                <img className='body-img' src={body} alt="" />
            </div>
            <div className='container'>
                {dash.map((item, index) => {
                    return (
                        <div className='card'>
                            <div key={index} className='icons'>
                                <img src={item.icon} alt="" />
                                <p>{item.name}</p>
                            </div>
                            <p>{item.time}</p>
                            <div className={item.class}>
                                <div className={item.status}></div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default DashboardOverview