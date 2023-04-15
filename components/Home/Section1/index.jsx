import React from 'react';
import hero from '../../../public/assets/hero.png';
import Image from 'next/image';
import Link from 'next/link';
import imageLoader from '../../../loader';


const Section1 = () => {
	return (
		<div className='h-screen  flex items-center justify-center '>
			<div className='hero flex mt-20 sm:mt-52   lg:-mt-20 lg:flex-row flex-col'>
				<div className='hero-text lg:w-1/2  p-3 flex flex-col flex-nowrap  justify-center items-start space-y-5 pr-0 sm:pr-12 md:pr-40'>
				<div classNames='head-title-container'>
					<h1 className='hero-title text-4xl font-bold tracking-wide'>
						Welcome to
						<br className='sm:hidden' /> GDSC-WCE{' '}
					</h1>
					<div className="subheading mt-3 capitalize">It's welcomed gift to encourage others to achieve greatness</div>
				</div>
					<p className='hero-description   text-gray-500  leading-5'>
					
					Google Developer Students' Club - WCE aims to inculcate the culture of
					<span className='text-gdsc-blue opacity-75 '> development</span> and solving problems within local communities using technology.
					Coming together is the <span className='text-gdsc-blue opacity-75'>beginning</span>. Keeping together is a <span className='text-gdsc-blue opacity-75'>progress</span>. Working together 
					is a Success. 
					</p>
					<Link
						href='https://gdsc.community.dev/walchand-college-of-engineering-sangli/'
						target='_blank'
						className='learn-more bg-gdsc-blue drop-shadow-lg text-white px-6 py-2  rounded-full'>
						Learn More
					</Link>
				</div>
				<div className='hero-image-container  flex  lg:w-1/2  justify-center p-3 sm:p-6 md:p-12'>
					<Image loader={imageLoader} alt='GDSC' className='hero-image  h-full' src={hero} />
				</div>
			</div>
		</div>
	);
};

export default Section1;
