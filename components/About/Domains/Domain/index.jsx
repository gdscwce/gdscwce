import React from 'react'
import Image from 'next/image'
import imageLoader from '../../../../loader'


const Domain = ({ data:{name,description,img,isGray,color} }) => {
    console.log(isGray);
    return (
        <div className={`domain md:h-45vh ${isGray ? ' bg-gray-200' : ' bg-white'} flex`}>
            <div className={`domain-description ${isGray ? 'order-1' : 'order-2'} w-full md:w-1/2  px-3 sm:px-10 lg:px-16 py-5 md:py-10 flex flex-col`}>
                <span className={`font-bold domain-description-head text-2xl sm:text-3xl lg:text-4xl py-3 lg:py-8 max-w-sm ${color}`}>{name}</span>
                <div className='domain-description-body text-gray-600 text-sm md:text-lg py-3 lg:pr-10'>
                   {description}
                </div>
            </div>
            <div className={`domain-img w-1/2 hidden md:flex ${isGray ? 'order-2' : 'order-1'} justify-${isGray ? 'start' : 'end'} px-16`}>
                <div className='img-container py-8'>
                    <Image className='w-full h-full ' alt='GDSC-img' loader={imageLoader} src={img} />
                </div>
            </div>
        </div>
    )
}

export default Domain