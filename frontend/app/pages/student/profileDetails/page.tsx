import RadioButton from '@/components/student/RadioButton'
import StuForm from '@/components/student/StuForm'
import TextAreaInput from '@/components/student/TextAreaInput'
import TextInput from '@/components/student/TextInput'
import React from 'react'
import proIcon from '@/public/images/student/images-p-icon.png'
import Image from 'next/image'
import Button from '@/components/student/Button'

const options_1 = [
  { value: 'Female', label: 'Female' },
  { value: 'Male', label: 'Male' },
  { value: 'Other', label: 'Other' },
];

const options_2 = [
  { value: 'Hostel', label: 'Hostel' },
  { value: 'Boarding', label: 'Boarding' },
  { value: 'Home', label: 'Home' },
];

const page = () => {
  return (
    <div>
      <StuForm styles="p-6">
        <div className='flex flex-col justify-center items-center pb-10 '>
          <Image src={proIcon} alt='pro icon' width={200} height={200}/> 
          <Button type="Edit Picture" style="w-26 h-10"/>
        </div>

        <p className='text-black'>Presonal Details</p>
        <hr className='pb-8'/>

        <div className='grid grid-cols-2 gap-x-10 px-3 gap-y-4 vsm:max-md:gap-x-5'>
          <TextInput label="First Name" placeholder="Enter your First Name" type="text"/>
          <TextInput label="Last Name" placeholder="Enter your Last Name" type="text"/>
          <TextInput label="Email Address" placeholder="Enter your Email Address" type="email"/>
          <TextInput label="Mobile No" placeholder="Enter your Mobile No" type="tel"/>
          <TextInput label="Faculty" placeholder="Enter your Faculty" type="text"/>
          <TextInput label="Age" placeholder="Enter your Age" type="number"/>
          <TextAreaInput label="Home Address" placeholder="Enter your Home Address"/>
          <TextAreaInput label="Alaric medicines or any thing  " placeholder="Enter your Alaric medicines or any thing"/>
          <RadioButton options={options_1} label="Gender" />
          <RadioButton options={options_2} label="Comming from" />
          <TextInput label="Height" placeholder="Enter your Height" type="number"/>
          <TextInput label="Weight" placeholder="Enter your Weight" type="number"/>
          <TextInput label="Blood Type" placeholder="Enter your Blood Type" type="text"/>
        </div> 

        <p className='text-black pt-10'>Parent/Guardian Details</p>
        <hr className='pb-8'/>

        <div className='grid grid-cols-2 gap-x-10 px-3 gap-y-4 vsm:max-md:gap-x-5'>
          <TextInput label="Name" placeholder="Enter your Parent/Guardian Name" type="text"/>
          <TextInput label="Mobile No" placeholder="Enter your Mobile No" type="tel"/>
          <TextAreaInput label="Home Address" placeholder="Enter your Home Address"/>  
        </div>

        <Button type="Save" style="w-20 h-10 my-8"/>
   
      </StuForm>      
    </div>
  )
}

export default page