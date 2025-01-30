// /pages/admin/page.tsx


import Kpi from '@/components/admin/kpi'
import React from 'react'
import tstudents from '@/public/images/admin/tstudents.svg'
import tappoint from '@/public/images/admin/tappoint.svg'
import treports from '@/public/images/admin/treports.svg'
import upappoint from '@/public/images/admin/upappoint.svg'
import AppointmentForm from '@/components/admin/appointmentForm'

const kpis = [
  {
    title : "Total Students",
    count : 300,
    src : tstudents
  },
  {
    title: "Total Appointments",
    count: 500,
    src: tappoint
  },
  {
    title: "Total Reports",
    count: 350,
    src: treports
  },
  {
    title: "Upcoming Appointments",
    count: 20,
    src: upappoint
  }
]


const Page = () => {
  
  return (
    <div className='mx-5'>
    <div className=' flex flex-row gap-5'>
      {kpis.map((kpi, index) => (
        <Kpi title={kpi.title} count={kpi.count} src={kpi.src} key={index} />
      ))}
    </div>
    <div className='bg-white px-3 mt-8 pt-3'>
      <AppointmentForm/>
    </div>
    </div>
  )
}

export default Page
