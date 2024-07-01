import React from 'react'

const page = () => {

  const stuName="Wishwajith Samaranayaka"
  return (
    <div className='bg-image-baground h-full w-full bg-cover rounded-5xl bg-no-repeat relative vsm:max-md:py-1 2xl:pt-10'>
      <div className='pl-12 pt-16 pr-12 text-8xl text-white font-bold vsm:max-lg:text-6xl vsm:max-md:text-5xl 2xl:text-9xl'>
        Welcome,<br/>
        <p className='text-amber-500 pt-8'>
        {stuName}
        </p>  
      </div>
      <div className='text-white pl-12 pt-32 pb-10 vsm:max-xl:pr-8'>
        The University Medical Center Student Management System will efficiently manage student medical records. It offers secure login, medical report management, and robust data security, enhancing accessibility and operational efficiency for medical staff.
      </div>
    </div>
  )
}

export default page
