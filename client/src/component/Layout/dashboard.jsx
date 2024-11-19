import React from 'react'
import Navpage from './Navpage'

const Dashboard = ({sidebarToggle, setSidebarToggle}) => {
  return (
    <div className={`${sidebarToggle ? "" : " ml-64 "} w-full`}>
      <Navpage 
        sidebarToggle={sidebarToggle}
        setSidebarToggle={setSidebarToggle}/>
    </div>
  )
}

export default Dashboard