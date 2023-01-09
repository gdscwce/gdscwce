import React from 'react';
import hero from '../../../public/assets/hero2.png';
import Image from 'next/image';

const Section2 = () => {
	return (
		<div className='  lg:h-80vh sm:mt-12 lg:mt-0   flex  items-center justify-center '>
			<div className='hero flex mt-12  lg:-mt-12 items-center  flex-col'>
				<div className='hero-text text-center flex flex-col flex-nowrap  justify-center items-start space-y-8 px-6 sm:px-12 lg:px-52'>
					<h1 className='hero-title text-4xl font-bold  w-full'>Who We Are</h1>
					<p className='hero-description  text-gray-500  leading-5 '>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae,
						delectus tenetur dignissimos sapiente libero voluptatum aliquid.
						Voluptatibus, laborum labore laboriosam unde doloribus excepturi
						accusantium expedita possimus quae doloremque nemo, quidem minima
						accusamus iste placeat nihil cumque error suscipit dolores
						obcaecati? Voluptate eos adipisci porro earum magnam commodi.
						Tempore magnam ratione ad corporis natus pariatur, perferendis sint,
						praesentium, a illum illo? Laudantium fugit ea non deleniti minus,
						accusantium veritatis. Eius error odit nesciunt veniam dolores et
						tempora dolorem hic autem, a explicabo quis amet ut qui laborum
						provident iste commodi ea quasi fugiat, assumenda ratione. Ipsa
						ducimus tempora reprehenderit nisi minus?
					</p>
				</div>
				<div className='hero-image-container  hidden md:flex   justify-center p-3 sm:p-6 md:p-12'>
					<Image alt='GDSC' className='hero-image  h-full' src={hero} />
				</div>
			</div>
		</div>
	);
};

export default Section2;
