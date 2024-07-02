"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const navBarItems=[
    {
        title:"Home",
        link:"/pages/doctor"
    },
    {
        title:"Appointments",
        link:"/pages/doctor/appointments"
    },
    {
        title:"My Status",
        link:"/pages/doctor/mystatus"
    },
    {
        title:"Overall Summary",
        link:"/pages/doctor/overallsummary"
    },
]

const Navbar = () => {

const pathname1=usePathname()

  return (
    <div className='flex justify-between items-center w-3/5 m-auto text-dark-green text-lg pt-3 pb-6'>
        {
            navBarItems.map((item,index)=>(
                <Link key={index} href={item.link} className={`flex gap-0 pl-2 pr-2 py-2 cursor-grab${pathname1 === item.link ? 'pb-px border-b-2 border-light-green font-bold': ''}`}>
                    {item.title}
                </Link>
            ))
        }
    </div>
  )
}

export default Navbar