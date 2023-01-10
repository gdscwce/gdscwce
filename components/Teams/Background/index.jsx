import React from 'react';
import Image from 'next/image';
import team_background from '../../../public/assets/team_background.jpg';
import imageLoader from '../../../loader';

const TeamsBackground = () => {
	return (
		<div className='teams-bg border h-64 relative'>
			<Image
				alt='GDSC'
				loading='eager'
				priority={true} // as the image is to heavy increasing LCP(largest contentful paint)  we set the priority of it
				className='absolute w-full h-full object-cover '
				src={team_background}
			/>
			<div className='relative teams-bg-overlay h-full flex flex-col items-center justify-center'>
				<div className='capitalize text-lg md:text-xl text-transparent   bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 '>
					Meet the team
				</div>
				<div className='text-lg md:text-2xl font-bold text-center  md:w-3/4 lg:w-1/2'>
					Our team is made up of passionate individuals who are dedicated to
					creating a positive community
				</div>
			</div>
		</div>
	);
};

export default TeamsBackground;
