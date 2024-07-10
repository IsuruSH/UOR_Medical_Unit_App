import React from 'react'

//use children for pass all eliments and use styles for taildwind css classes 
const StuForm = ({children,styles}:any) => {
  return (
    <div className={` bg-white shadow-md shadow-light-green rounded-3xl ${styles}`}>
    <form>
      {children}
    </form>
  </div>
  )
}

export default StuForm