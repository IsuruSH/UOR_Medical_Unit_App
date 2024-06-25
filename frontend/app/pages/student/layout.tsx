import Header from '@/components/student/Header';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
    title: "Student",
    description: "UOR Medical Student",
  };

const StudentLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className='pt-5 w-11/12 m-auto'>
      <Header/>
        <div>
            {children}
        </div>
    </div>
  )
}

export default StudentLayout