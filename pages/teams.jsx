import React from 'react';
import Teams from '../components/Teams';
import { NextSeo } from 'next-seo';
const teams = () => {
	return (
		<>
			<NextSeo
				title='Teams | GDSC WCE'
				description='A short description goes here.'
			/>
			<Teams />
		</>
	);
};

export default teams;
