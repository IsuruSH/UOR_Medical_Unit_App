import Header from '@/components/student/Header';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
    title: "Student",
    description: "UOR Medical Student",
  };

const StudentLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className='bg-zinc-50 pb-8'>
    <div className='vsm:max-sm:w-min w-11/12 m-auto pt-1'>
      <Header/>
        <div>
            {children}
        </div>
    </div>
    </div>
  )
}

export default StudentLayout