// /pages/admin/layout.tsx

import Sidebar from '@/components/admin/sidebar'
import React from 'react'

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
