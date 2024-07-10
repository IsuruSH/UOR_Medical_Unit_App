import StuForm from '@/components/student/StuForm'
import React from 'react'
import dataStu from '@/data/student/studentDetails.json'

const page = () => {
  return (
    <div>
      <StuForm styles="p-6">
        <div className='grid grid-cols-5 pb-2 pt-5 vsm:max-md:px-5'>
          <p className='text-dark-green flex md:justify-center '>Medical No</p>
          <p className='text-light-green flex md:justify-center'>Date</p>
          <p className='text-dark-green flex md:justify-center'>Time</p>
          <p className='text-light-green flex md:justify-center'>Type</p>
          <p className='text-dark-green flex md:justify-center'>medical form State</p>
        </div>
        <hr className='pb-5'/>
        {dataStu.map((item,index)=>
            <div className='grid grid-cols-5 pb-8 vsm:max-md:px-5'>
              <p key={index} className='text-dark-green md:flex justify-center'>{item.Appointment_No}</p>
              <p key={index} className='text-light-green md:flex justify-center'>{item.Date}</p>
              <p key={index} className='text-dark-green md:flex justify-center'>{item.Time}</p>
              <p key={index} className='text-light-green md:flex justify-center'>{item.Type}</p>
              <p key={index} className='text-dark-green md:flex justify-center'>{item.State}</p>
            </div>
        )}
      </StuForm>
    </div>
  )
}

export default page