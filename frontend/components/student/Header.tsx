import React from 'react'
import logoUni from '@/public/images/student/logo_copy 2.png'
import proIcon from '@/public/images/student/images-p-icon.png'
import Image from 'next/image'
import Navbar from './Navbar'
import Button from './Button'

const Header = () => {
  return (
    <div> 
        <div className='flex justify-between items-center'> 
            <Image src={logoUni} alt='University logo with name' width={500} height={50}/> 
            <div className='flex justify-between items-center gap-7'>
                <Image src={proIcon} alt='pro icon' width={60} height={60}/>
                <Button type="Log Out" style="w-26 h-10"/>      
            </div>
        </div>
        <Navbar/>
    </div>
  )
}

export default Header