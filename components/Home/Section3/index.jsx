import React from 'react';
import hero from '../../../public/assets/hero3_v2.png';
import Image from 'next/image';

const Section3 = () => {
	return (
		<div className='  lg:h-80vh mt-20 md:mt-10 mb-20 flex  items-center justify-center '>
			<div className='hero flex    items-center  flex-col '>
				<div className='connect text-center flex flex-col flex-nowrap  justify-center items-start space-y-8 px-6 sm:px-12 lg:px-52 mb-8'>
					<h1 className='connect-title text-4xl font-bold  w-full '>
						Connect With Us
					</h1>
				</div>
				<div className='connect-container  flex flex-col lg:flex-row    items-center  '>
					<div className='connect-image-container order-2 lg:order-1 lg:w-3/5'>
						<Image alt='GDSC' className='connect-image  h-full' src={hero} />
					</div>
					<div className='connect-form w-full  lg:w-2/5 order-1 lg:order-2 flex flex-col space-y-3 p-3 sm:px-5 md:px-7  xl:px-12 '>
						<div className='connect-head font-bold tracking-wide text-xl mb-2 lg:mb-0'>
							We are a message away!
						</div>
						<div className='inp flex flex-col '>
							<label htmlFor='name'>Your Name</label>
							<input
								className='h-10  border outline-none pl-5   rounded-lg'
								type='text'
							/>
						</div>
						<div className='inp flex flex-col '>
							<label htmlFor='email'>Your Email</label>
							<input
								className='h-10  border outline-none pl-5   rounded-lg'
								type='email'
							/>
						</div>
						<div className='inp flex flex-col '>
							<label htmlFor='message'>Your Message</label>
							<textarea
								className=' border outline-none pl-5  pt-3  rounded-lg '
								cols='30'
								rows='5'></textarea>
						</div>
						<input
							className='text-white  cursor-pointer bg-black rounded-lg py-2'
							type='submit'
							value='Send Message'
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Section3;
