import React from 'react';
import Image from 'next/image';
import imageLoader from '../../loader';

const Background = ({ img, children,border }) => {
	return (
		<div style={{ height: '18rem' }} className={`teams-bg ${border && 'border'} h-64 relative`}>
			<Image
				alt='GDSC'
				loading='eager'
				loader={imageLoader}
				priority={true} // as the image is to heavy increasing LCP(largest contentful paint)  we set the priority of it
				className='absolute w-full h-full object-cover '
				src={img}
			/>
			<div className='relative teams-bg-overlay h-full flex flex-col items-center justify-center'>
				{children}
			</div>
		</div>
	);
};

export default Background;
