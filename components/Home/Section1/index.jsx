import React from 'react';
import hero from '../../../public/assets/hero.png';
import Image from 'next/image';
import Link from 'next/link';

const Section1 = () => {
	return (
		<div className='h-screen  flex items-center justify-center '>
			<div className='hero flex mt-20 sm:mt-52   lg:-mt-20 lg:flex-row flex-col'>
				<div className='hero-text lg:w-1/2  p-3 flex flex-col flex-nowrap  justify-center items-start space-y-8 pr-0 sm:pr-12 md:pr-40'>
					<h1 className='hero-title text-4xl font-bold tracking-wide'>
						Welcome to
						<br className='sm:hidden' /> GDSC-WCE{' '}
					</h1>
					<p className='hero-description  text-gray-500  leading-5'>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem
						commodi veritatis eos, neque quidem eum adipisci eligendi quasi iste
						voluptate obcaecati eveniet quod reiciendis blanditiis fugiat
						quibusdam error doloribus! Ducimus quia doloribus perferendis
						molestias, repudiandae blanditiis laborum reiciendis iusto nesciunt
						ab hic possimus sed, id, veritatis similique commodi repellendus
						dignissimos!
					</p>
					<Link
						href='#'
						className='learn-more bg-gdsc-blue drop-shadow-lg text-white px-6 py-2  rounded-full'>
						Learn More
					</Link>
				</div>
				<div className='hero-image-container  flex  lg:w-1/2  justify-center p-3 sm:p-6 md:p-12'>
					<Image className='hero-image  h-full' src={hero} />
				</div>
			</div>
		</div>
	);
};

export default Section1;
