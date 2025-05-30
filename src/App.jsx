import React from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import Dasboard from './components/Dashboard/Dasboard'
import Calendar from './components/Calendar/Calendar'

const App = () => {
  return (
    <div>
        <Sidebar />
        <Dasboard />
        <Calendar />
    </div>
  )
}

export default App