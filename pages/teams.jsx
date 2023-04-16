import React from 'react';
import Teams from '../components/Teams';
import { NextSeo } from 'next-seo';
const teams = () => {
	return (
		<>
			<NextSeo
				title='Teams | GDSC WCE'
				description='Official website of GDSC WCE'
			/>
			<Teams />
		</>
	);
};

export default teams;
