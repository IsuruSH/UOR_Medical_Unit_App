
import RadioButton from '@/components/student/RadioButton'
import StuForm from '@/components/student/StuForm'
import TextAreaInput from '@/components/student/TextAreaInput'
import TextInput from '@/components/student/TextInput'
import React from 'react'

const options = [
  { value: 'female', label: 'Female' },
  { value: 'male', label: 'Male' },
  { value: 'other', label: 'Other' },
  ];

const page = () => {
  return (
    <div>
      <StuForm styles="p-6">
        <div>
        <TextInput label="First Name" placeholder="Enter your First Name" type="text"/>
        <br/>


        <TextAreaInput label="Alaric medicines or any thing  " placeholder="Enter your Alaric medicines or any thing"/>
        <br/>
        

        <RadioButton options={options} label="Gender" />        
        </div>

      </StuForm>      
    </div>
  )
}

export default page