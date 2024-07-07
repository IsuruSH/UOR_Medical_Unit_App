import Button from '@/components/student/Button'
import StuForm from '@/components/student/StuForm'
import TextAreaInput from '@/components/student/TextAreaInput'
import TextInput from '@/components/student/TextInput'
import Image from 'next/image'
import React from 'react'
import conIcon from '@/public/images/student/icon.png'

const page = () => {
  return (
    <div>
      <StuForm styles="p-6">
        <p className='text-black pt-5'>Contact Us</p>
        <hr className='pb-8'/>
             
        <div className='grid grid-cols-1 gap-y-4 px-10'>
          <TextInput label="Name" placeholder="Enter your Name" type="text"/>
          <TextInput label="Email" placeholder="Enter your email" type="email"/>
          <TextAreaInput label="Message" placeholder="Enter your Message"/>
          <Button type="Sent" style="w-24 h-10 my-4"/>   
        </div>

      </StuForm>
    </div>
  )
}

export default page