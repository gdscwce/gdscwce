import React from 'react';
import logo from '../../public/assets/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import ig from '../../public/icons/instagram.png';
import tw from '../../public/icons/twitter.png';
import yt from '../../public/icons/youtube.png';
import gh from '../../public/icons/github.png';
import ld from '../../public/icons/linkedin.png';
const Footer = () => {
	const socialLinks = [
		{ icon: ig, link: 'https://www.instagram.com/gdsc_wce/?hl=en' },
		{ icon: tw, link: '#' },
		{
			icon: yt,
			link: 'https://www.youtube.com/channel/UCrwdrer13mWACqFNR8y6vgA',
		},
		{ icon: gh, link: 'https://github.com/gdscwce' },
		{ icon: ld, link: 'https://www.linkedin.com/company/gdsc-wce/mycompany/' },
	];
	return (
		<div className='md:h-50vh relative  shadow-footer border w-full'>
			<div className='footer-container py-3 md:py-12  flex justify-around flex-wrap items-center'>
				<div className='GDSC-details px-5 flex flex-col space-y-3'>
					<div className='GDSC-logo  '>
						<Image
							className='w-16 h-12 sm:w-20 sm:h-16 lg:w-28 lg:h-20 object-cover '
							src={logo}
						/>
					</div>
					<div className='GDSC-Powered-by font-bold text-lg'>
						GDSC-WCE powered by Google Developer Students club
					</div>
					<div className='WCE-address '>
						<span className='capitalize line-1'>
							Walchand college of engineering,
						</span>
						<br />
						<span className='capitalize line-2'>
							Sangli, Maharashta, 416416
						</span>
						<br />
						<span className='capitalize line-3'>India.</span>
						<br />
					</div>
					<div className='social flex space-x-3'>
						<span className='text-lg font-bold'>Follow us on </span>
						<div className='social-links flex space-x-3'>
							{socialLinks.map((link, index) => {
								return (
									<Link href={link.link} key={index}>
										<Image className='w-6 h-6' src={link.icon} />
									</Link>
								);
							})}
						</div>
					</div>
				</div>
				<div className='quick-links h-52 md:h-60 flex items-end space-x-20'>
					<div className='link-section-1'>
						<div className='quick-link-head text-lg font-bold pb-2'>
							Quick Links
						</div>
						<div className='links flex flex-col items-center  space-y-3'>
							<Link href='#'>Home</Link>
							<Link href='#'>Events</Link>
							<Link href='#'>Projects</Link>
							<Link href='#'>Contact Us</Link>
						</div>
					</div>
					<div className='link-section-2'>
						<div className='quick-link-head text-lg font-bold pb-2'>
							Quick Links
						</div>
						<div className='links flex flex-col items-center  space-y-3'>
							<Link href='#'>Home</Link>
							<Link href='#'>Events</Link>
							<Link href='#'>Projects</Link>
							<Link href='#'>Contact Us</Link>
						</div>
					</div>
				</div>
			</div>
			<div className='trademark text-xs  w-full mb-4 mt-6 sm:mt-4 text-center '>
				© 2022 GDSC WCE. All Rights Reserved
			</div>
		</div>
	);
};

export default Footer;
