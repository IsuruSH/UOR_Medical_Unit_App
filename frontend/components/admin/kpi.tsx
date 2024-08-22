import React from 'react'
import Image from 'next/image'


type KpiProps = {
  title: string;
  count: number;
  src: string;
};

const Kpi = (props: KpiProps) => {
  return (
    <div className='bg-white w-fit px-4 mt-5 shadow rounded-lg'>
      <div className='text-xs pt-3 text-dark-green'>
        {props.title}
      </div>
      <div className='flex flex-row text-center items-center gap-24 mt-3 pb-5'>
        <div className='text-lg font-semibold'>
            {props.count}
        </div>
        <div>
            <Image src={props.src} alt={''} width={40}></Image>
        </div>
      </div>
    </div>
  )
}

export default Kpi
