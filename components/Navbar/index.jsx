import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/assets/gdsc banner.png';

const Navbar = () => {
	const [sidebarOpen, setsidebarOpen] = useState(false);
	return (
		<div className='border-gray-400 h-16 sm:h-20 flex justify-between items-center px-5 '>
			{/* Sidebar overlay */}
			<div
				className={`bg-white bg-opacity-75 w-full h-full fixed top-0 left-0 z-10 ${
					!sidebarOpen && 'hidden'
				}`}>
				{/* Close icon */}
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					strokeWidth={1.5}
					stroke='currentColor'
					onClick={() => setsidebarOpen(!sidebarOpen)}
					className='w-8 h-8 sm:hidden cursor-pointer absolute top-4 right-4'>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M6 18L18 6M6 6l12 12'
					/>
				</svg>
				{/* Navbar links */}
				<div className='flex  flex-col items-center text-xl justify-center h-full'>
					<Link
						href='/'
						className=' mb-5 px-3 pb-2 border-b-4 border-gdsc-blue'>
						Home
					</Link>
					<Link href='/teams' className=' mb-5 px-3 pb-2 border-b-4 border-gdsc-red'>
						Teams
					</Link>
					<Link
						href='about'
						className=' mb-5 px-3 pb-2 border-b-4 border-gdsc-yellow'>
						About us
					</Link>
					<Link
						href='contact'
						className=' px-3 pb-2 mx-4 border-b-4 border-gdsc-green'>
						Contact us
					</Link>
				</div>
			</div>

			{/* GDSC Logo  */}
			<Link className='w-48 sm:w-1/4 h-full object-contain' href='/'><Image src={logo} className=' h-full object-contain' /></Link>
			{/* hamburger icon */}
			{/* Hides on tablet screen and above */}
			<svg
				xmlns='http://www.w3.org/2000/svg'
				fill='none'
				viewBox='0 0 24 24'
				strokeWidth={1.5}
				stroke='currentColor'
				onClick={() => setsidebarOpen(!sidebarOpen)}
				className={`w-6 h-6 sm:hidden cursor-pointer ${
					sidebarOpen && 'hidden'
				}`}>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
				/>
			</svg>
			{/* Navbar links */}
			<div className='hidden sm:flex items-center lg:pr-16 font-bold sm:text-xs lg:text-sm text-black  uppercase'>
				<Link href='/' className='mr-5'>
					Home
				</Link>
				<Link href='teams' className='mr-5'>
					Teams
				</Link>
				<Link href='about' className='mr-5'>
					About us
				</Link>
				<Link
					href='contact'
					className='bg-gdsc-blue drop-shadow-lg text-white px-6 py-3.5 mx-4  rounded-full'>
					Contact us
				</Link>
			</div>
		</div>
	);
};

export default Navbar;
