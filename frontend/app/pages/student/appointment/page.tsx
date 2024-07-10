import Button from '@/components/student/Button';
import RadioButton from '@/components/student/RadioButton';
import StuForm from '@/components/student/StuForm'
import TextAreaInput from '@/components/student/TextAreaInput';
import TextInput from '@/components/student/TextInput';
import React from 'react'

const options_1 = [
  { value: 'Clinic', label: 'Clinic' },
  { value: 'Dental', label: 'Dental' },
];

const page = () => {
  return (
    <div>
      <StuForm styles="p-6"> 
        <p className='text-black pt-5'>Application Form</p>
        <hr className='pb-8'/>

        <div className='grid grid-cols-1 gap-y-4 px-4'>
          <RadioButton options={options_1} label="Appointment Type" /> 
          <TextInput label="Date" placeholder="Enter your Date" type="date"/>
          <TextInput label="Time" placeholder="Enter your Time" type="time"/>
          <TextAreaInput label="Mention your Disease" placeholder="Type Here"/>
          <Button type="Submit" style="w-24 h-10 my-4"/>
        </div>
        
      </StuForm>
    </div>
  )
}

export default page