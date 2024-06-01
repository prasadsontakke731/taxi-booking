import CardsList from '@/data/CardsList' 
import Image from 'next/image'
import React, { useState } from 'react'

const Cards = () => {
    const [activeIndex,setActiveIndex]=useState<any>()

  return (
    <div>
        <h2 className='font-medium text-[14px]'>Payment Methods</h2>
        <div className='grid grid-cols-5 mt-2'>
            {
                CardsList.map((item,index)=>(
                    <div className={`w-[50px] border-[1px] flex items-center justify-center rounded-md cursor-pointer
                    hover:scale-110 transition-all hover:border-yellow-400
                    ${activeIndex==index?'border-yellow-400 border-[3px]':null}
                    `}
                    onClick={()=> setActiveIndex(index)}
                    >
                        <Image src={item.image} width={30} height={50} alt={item.name}/>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Cards