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
    <div className="bg-[#D4E3F0] flex">
      <Sidebar />
      <div className="flex-grow">
        {children}
      </div>
    </div>
  )
}

export default AdminLayout
