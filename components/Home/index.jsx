import React from 'react';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import FAQ from './FAQ';


const Home = () => {
	return (
		<main>
			<div className='sections flex flex-col items-center px-3 sm:px-8 md:px-16 '>
				<Section1 />
				<Section2 />
				<FAQ />
				<Section3 />
			</div>
		</main>
	);
};

export default Home;
