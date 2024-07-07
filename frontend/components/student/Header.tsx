"use client"

import React from 'react'
import logoUni from '@/public/images/student/logo_copy 2.png'
import proIcon from '@/public/images/student/images-p-icon.png'
import Image from 'next/image'
import Navbar from './Navbar'
import Button from './Button'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Header = () => {

  const pathname2=usePathname()
  const profileDetailsPathName="/pages/student/profileDetails"
  const homePathName="/pages/student"

  return (
    <>
    <div className='sticky top-1 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-zinc-50/10 dark:border-zinc-50/[0.06] bg-white supports-backdrop-blur:bg-white/95 dark:bg-zinc-50/25'> 
        <div className='flex justify-between items-center'> 
          <div className='vsm:max-md:w-72 pt-3'>
            <Image src={logoUni} alt='University logo with name'/> 
          </div>

            <div className='flex justify-between items-center gap-7'>
                <div className='vsm:max-lg:hidden'>
                <Link href={"/pages/student/profileDetails"}>{pathname2==profileDetailsPathName?"":<Image src={proIcon} alt='pro icon' width={60} height={60}/>}</Link>
                </div>
                <Button type="Log Out" style="w-26 h-10"/>      
            </div>
        </div>
                  
        <Navbar/>
        
    </div>
      <div className='flex justify-center items-center lg:hidden m-2'>
            <Link href={"/pages/student/profileDetails"}>{pathname2==homePathName?<Image src={proIcon} alt='pro icon' width={200} height={200}/>:""}</Link>
      </div>
    </>
  )
}

export default Header