import { NextSeo } from 'next-seo';
import Home from '../components/Home';
export default function home() {
	return (
		<>
			<NextSeo
				title='Home | GDSC WCE'
				description='A short description goes here.'
			/>
			<Home />
		</>
	);
}
