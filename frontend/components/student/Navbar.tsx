"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const navBarItems=[
    {
        title:"Home",
        link:"/pages/student"
    },
    {
        title:"Appointment",
        link:"/pages/student/appointment"
    },
    {
        title:"Medical",
        link:"/pages/student/medical"
    },
    {
        title:"Reports",
        link:"/pages/student/reports"
    },
    {
        title:"Contact",
        link:"/pages/student/contact"
    },
]

const Navbar = () => {

const pathname1=usePathname()

  return (
    <div className='flex justify-between items-center w-3/5 vsm:max-lg:w-full vsm:max-md:text-xs vsm:max-md:gap-x-9 m-auto vsm:max-lg:pb-8 text-dark-green text-lg pt-3 pb-6 2xl:py-10'>
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