import Image from 'next/image'
import React from 'react'
import imageLoader from '../../../loader'
import whatgdscwcedo from '../../../public/assets/whatgdscwcedo.png'

const WhatGDSCWCEDo = () => {
    return (
        <div className='whatgdscwcedo-container flex flex-col items-center space-y-8 md:space-y-16 px-3 sm:px-8 md:px-16'>
            <div className=" text-2xl sm:text-3xl px-3 md:text-4xl">What does <span className='font-bold uppercase'>GDSC-WCE</span> do?</div>
            <div className='whatgdscwcedo-description text-sm sm:text-base md:text-lg lg:text-xl text-center px-3  text-gray-500  lg:w-3/4'>
                We at <span className="font-bold">DSC-WCE</span> are a passionate group of people who work towards bringing a change in the ecosystem of development around the campus. We want to create a healthy environment for the budding developers to exploring solutions to real life problems and promote the <span className="font-bold">developer culture.</span>
            </div>
            <div className='whatgdscwcedo-img-container sm:w-2/3 md:w-1/2'>
                <Image className='w-full h-full' alt='GDSC-img' src={whatgdscwcedo} loader={imageLoader} />
            </div>

        </div>
    )
}

export default WhatGDSCWCEDo