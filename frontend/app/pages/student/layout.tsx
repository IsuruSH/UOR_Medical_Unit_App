import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
    title: "Student",
    description: "UOR Medical Student",
  };

const StudentLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div>
        layout
        <div>
            {children}
        </div>
    </div>
  )
}

export default StudentLayout