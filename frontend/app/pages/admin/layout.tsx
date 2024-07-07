// /pages/admin/layout.tsx


import Sidebar from '@/components/admin/sidebar'
import { Metadata } from 'next';
import React from 'react'

 

export const metadata: Metadata = {
    title: "Admin",
    description: "UOR Medical Admin",
  };

const AdminLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  
  return (
    <div className="bg-[#F2F8FD] h-screen flex">
      <div className='fixed top-0 left-0'>
        <Sidebar/>
      </div>
      
      <div className="flex-grow ml-80">
        
        {children}
      </div>
    </div>
  )
}

export default AdminLayout
