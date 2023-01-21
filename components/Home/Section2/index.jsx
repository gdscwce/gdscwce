import React from 'react';
import hero from '../../../public/assets/hero2.1.png';
import Image from 'next/image';
import imageLoader from '../../../loader';



const Section2 = () => {
	return (
		<div className='  lg:h-80vh sm:mt-12 lg:mt-0   flex  items-center justify-center '>
			<div className='hero flex mt-12  lg:-mt-12 items-center  flex-col'>
				<div className='hero-text text-center flex flex-col flex-nowrap  justify-center items-start space-y-8 px-6 sm:px-12 lg:px-52'>
					<h1 className='hero-title text-4xl font-bold  w-full'>Who We Are</h1>
					<p className='hero-description  text-gray-500  leading-5 '>
						Google Developer Students' Club (GDSC) WCE is a community of talents from various
						fields who mostly focus on google technologies and events promoted by google .
						our events and activities center around once advancement in both technical and
						non technical areas. While doing so we work as a team and develop new friends who will
						support you and grow with you. We want to create a healthy environment for the budding
						developers to exploring solutions to real life problems and promote the developer culture.

						Few of the key events that are conducted by GDSC-WCE every year include <span className='text-gdsc-blue opacity-75 '> HacktoberFest</span>,
						<span className='text-gdsc-red opacity-75 '> Android and Flutter Bootcamps</span>, <span className='text-gdsc-green opacity-75 '> Backend Bootcamp</span>, <span className='text-gdsc-yellow opacity-75 '> Google Cloud Platform </span>
						and a lot of other exciting events to look forward to!
					</p>
				</div>
				<div className='hero-image-container  hidden md:flex   justify-center p-3 sm:p-6 md:p-16'>
					<Image loader={imageLoader} alt='GDSC' className='hero-image  h-full' src={hero} />
				</div>
			</div>
		</div>
	);
};

export default Section2;
