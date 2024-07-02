
import StuForm from '@/components/student/StuForm'
import TextInput from '@/components/student/TextInput'
import React from 'react'


const page = () => {
  return (
    <div>
      <StuForm styles="p-6">
        <TextInput placeholder="Enter Your First Name" label="First Name"/>
        <br/>


      </StuForm>      
    </div>
  )
}

export default page