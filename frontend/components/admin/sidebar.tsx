"use client"

import React, { useState } from 'react'

const Sidebar = () => {

    const [toggleCollapse, setToggleCollapse] = useState(true)
  return (
    <div className={`h-screen px-4 pt-8 pb-4 bg-white flex justify-between flex-col  ${toggleCollapse ? 'w-80' : 'w-20'}`}>
        <div className='flex flex-col'>
          dd
        </div>
      
    </div>
  )
}

export default Sidebar
