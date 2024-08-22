"use client"

import React from 'react'
import logoUni from '@/public/images/student/logo_copy 2.png'
import Image from 'next/image'

import Button from './Button'
import Link from 'next/link'


const LoginHeader = () => {
  return (
    <div> 
        <div className='flex justify-between items-center'> 
            <Image src={logoUni} alt='University logo with name' width={500} height={50}/> 
            <div className='flex justify-between items-center gap-7'>      
            </div>
        </div>
    </div>
  )
}

export default LoginHeader
