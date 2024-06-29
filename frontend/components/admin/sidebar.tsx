"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import logo from '@/public/images/admin/uor_logo.png'
import { MdSummarize } from "react-icons/md";
import { RiPieChart2Fill, RiGraduationCapFill  } from "react-icons/ri";
import { FaUserDoctor, FaCalendarDays } from "react-icons/fa6";
import { IoMdHome } from "react-icons/io";
import Link from 'next/link';
import { usePathname } from 'next/navigation'; 
import { CiLogout } from "react-icons/ci";


const sidebarItems = [
  {
    title: 'Dashboard',
    icon: <IoMdHome />,
    link: '/pages/admin',
  },
  {
    title: 'Reports',
    icon: <RiPieChart2Fill />,
    link: '/pages/admin/reports',
  },
  {
    title: 'Students',
    icon: <RiGraduationCapFill />,
    link: '/pages/admin/students',
  },
  {
    title: 'Doctors',
    icon: <FaUserDoctor />,
    link: '/pages/admin/doctors',
  },
  {
    title: 'Appointments',
    icon: <FaCalendarDays />,
    link: '/pages/admin/appointments',
  },
  {
    title: 'Summary',
    icon: <MdSummarize />,
    link: '/pages/admin/summary',
  },
  
]

const Sidebar = () => {
    const pathname = usePathname();

    const [toggleCollapse, setToggleCollapse] = useState(true)
  return (
    <div className={`h-screen px-4 pt-4 pb-4 bg-white flex justify-between flex-col  ${toggleCollapse ? 'w-80' : 'w-20'}`}>
        <div className='flex flex-col '>
          <div className='flex flex-col items-center'>
            <div className='flex items-center gap-3'>
                <Image src={logo} width={40} height={100} alt='logo' />
                <h1 className={`font-semibold text-xl text-yellow-500 ${toggleCollapse ? '' : 'hidden'}`}>UNIVERSITY OF RUHUNA</h1>
              </div>
              <div className='text-dark-green mt-2'>
                <h1 className='font-semibold'>
                  Medical Center
                </h1>
              </div>
          </div>
            
          <div className='text-dark-green space-y-6 mt-8 pl-4 '>
            {
              sidebarItems.map((item, index) => (
                <Link key={index} href={item.link} className={`flex gap-3 w-[70%] hover:bg-[#eef3e1] transition-colors 
                duration-300 pl-4 pr-12 py-2 rounded-lg ${pathname === item.link ? 'bg-[#eef3e1]': ''}`}>
                  <div className='text-xl'>
                    {item.icon}
                  </div>
                  <div>
                    {item.title}
                   </div> 
                </Link>
              ))
            }

          </div>
        </div>
        <div>
          <div className='text-dark-green'>
                <button   className={`flex gap-3 ml-4 py-2 rounded-lg `}>
                  <div className='text-xl'>
                    <CiLogout />
                  </div>
                  <div>
                    Log out
                   </div> 
                </button>
          </div>
        </div>
      
    </div>
  )
}

export default Sidebar
