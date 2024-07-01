import Header from '@/components/doctor/header';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
    title: "doctor",
    description: "UOR Medical doctor",
  };

const DoctorLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className='pt-5 w-11/12 m-auto'>
      <Header/>
        <div>
            {children}
        </div>
    </div>
  )
}

export default DoctorLayout