import { NextSeo } from 'next-seo';
import Home from '../components/Home';
console.log('%c Hold up there, kid! ', 'background: #007f5f; color: #fff; font-size: 32px; font-weight: bold; text-shadow: 2px 2px 0 #000;');
console.log('%c If you\'re not web-savvy, beware! My website may make your brain explode. ', 'background: #000; color: #007f5f; font-size: 16px; padding: 10px;');


export default function home() {



	return (
		<>
			<NextSeo
				title='Home | GDSC WCE'
				description='Official website of GDSC WCE'
			/>
			<Home />
		</>
	);
}
