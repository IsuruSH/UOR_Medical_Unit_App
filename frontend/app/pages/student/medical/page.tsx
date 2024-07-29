import StuForm from '@/components/student/StuForm'
import React from 'react'
import Button from '@/components/student/Button';
import RadioButton from '@/components/student/RadioButton';
import TextInput from '@/components/student/TextInput';

const options_1 = [
  { value: 'Clinic', label: 'Clinic' },
  { value: 'Dental', label: 'Dental' },
];

const page = () => {
  return (
    <div>
      <StuForm styles="p-6">
      <p className='text-black pt-5'>Requesting Medical Form</p>
      <hr className='pb-8'/>

      <div className='grid grid-cols-1 gap-y-4 px-4'>
          <RadioButton options={options_1} label="Appointment Type" /> 
          <TextInput label="Appoinment No" placeholder="Type here Number" type="number"/>  
          <TextInput label="Medical Date" placeholder="Type here Number" type="date"/>
          <TextInput label="How many days" placeholder="How many days" type="number"/>       
          <Button type="Submit" style="w-24 h-10 my-4"/>
      </div>

      </StuForm>
    </div>
  )
}

export default page