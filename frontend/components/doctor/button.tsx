import React from 'react'

const Button = ({type,style}:any) => {
  //Type mean what is the name of button, From style prop you can enter width and height
  const buttonStyle=`inline-flex ${style?style:""} items-center justify-center rounded-full bg-dark-green px-6 font-medium text-neutral-50 shadow-lg shadow-dark-green transition active:scale-95`
  return (
    <div> 
      <button className={buttonStyle}>{type}</button>      
    </div>
  )
}

export default Button