import React from 'react';
import Link from 'next/link';
const FourOhFour = () => {
	return (
		<div className=' 404-container px-5 h-screen  -mt-20 flex justify-center items-center text-lg'>
			<div className='404-content flex flex-col items-center space-y-4'>
				<p className='flex items-center justify-between '>
					<span className='h-16 flex items-center'> 404 <span className='border h-full mx-4 '></span> </span> <span>Oops ! the page you
					are looking for doesn't exists</span>
				</p>
				<Link className='bg-gdsc-green px-6 py-3 outline-none text-sm text-white rounded-lg cursor-pointer' href='/'>Home </Link>
			</div>
		</div>
	);
};

export default FourOhFour;
