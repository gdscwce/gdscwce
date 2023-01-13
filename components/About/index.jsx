import React from 'react'
import Background from '../../utils/Background'
import about_bg from '../../public/assets/about-bg.png'
import WhatGDSCWCEDo from './WhatGDSCWCEDo'
import Domains from './Domains'
const About = () => {
    return (
        <div className='About-container'>
            <Background img={about_bg}>
                <div className='gdscwce capitalize text-xl md:text-3xl mb-3 text-center' >Developer Student Clubs <span className="font-bold uppercase">WCE</span> </div>
                <div className="gdsc-description text-sm md:text-base text-center  opacity-75 px-3  md:w-3/4 lg:w-1/2">
                    Google Developer Student Club Walchand College of Engineering (GDSC-WCE) is community groups for WCE students interested in Google developer technologies.
                </div>
            </Background>
            <div className="about-container flex flex-col space-y-20 py-12 sm:py-16 md:py-24 ">
                <WhatGDSCWCEDo />
                <Domains  />
            </div>
        </div>
    )
}

export default About