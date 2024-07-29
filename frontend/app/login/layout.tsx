// /pages/admin/layout.tsx


import { Metadata } from 'next';
import React from 'react'

 

export const metadata: Metadata = {
    title: "login",
    description: "UOR Medical Center login",
  };
  

const LoginLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  
  return (
    <div className="bg-[#F2F8FD] flex">
      <div className="flex-grow ml-80">
        {children}
      </div>
    </div>
  )
}

export default LoginLayout
