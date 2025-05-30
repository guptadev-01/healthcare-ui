import React from 'react'
import './Dasboard.css'
import bell from '../../assets/bell.svg'
import search from '../../assets/search.svg'
import Sidebar from '../Sidebar/Sidebar'
import DashboardOverview from '../DashboardOverview/DashboardOverview'


const Dasboard = () => {
  return (
    <div className='dashboard'>
      <div className='search-input'>
        <div className='input'>
          <img src={search} alt="" />
          <input type="text" placeholder='Search'/>
        </div>
        <img src={bell} alt="" />
      </div>
      <DashboardOverview />
    </div>
  )
}

export default Dasboard