import React from 'react'

const page = () => {

  const doctorName="Mohammed Aathif"
  return (
    <div className='bg-image-baground h-150 bg-cover rounded-5xl bg-no-repeat relative '>
      <div className='pl-12 pt-16 text-8xl text-white font-bold'>
        Welcome,<br/>
        <p className='text-amber-500 pt-8'>
        {doctorName}
        </p>  
      </div>
      <div className='text-white pl-12 pt-20'>
        The University Medical Center Doctor Management System will efficiently manage Doctor medical records. It offers secure login, medical report management, and robust data security, enhancing accessibility and operational efficiency for medical staff.
      </div>
    </div>
  )
}

export default page