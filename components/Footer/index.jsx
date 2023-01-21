import React from 'react';

import logo from '../../public/assets/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import { imageLoader } from '../../loader';
// footer links
import { SocialLinks, FooterLinks } from '../../data/FooterLinks';
const Footer = () => {
	return (
		<div className='md:h-50vh  relative shadow-footer border w-full'>
			<div className='footer-container py-3 md:py-12  flex justify-around flex-wrap items-center'>
				<div className='GDSC-details px-5 flex flex-col space-y-3'>
					<Link href='/' className='GDSC-logo  '>
						<Image
							alt='GDSC'
							className='w-16 h-12 sm:w-20 sm:h-16 lg:w-28 lg:h-20 object-cover '
							src={logo}
						/>
					</Link>
					<div className='GDSC-Powered-by font-bold text-lg'>
						GDSC-WCE powered by Google Developer Students club
					</div>
					<Link href='https://www.google.com/maps/place/Walchand+College+of+Engineering/@16.8457387,74.5992688,17z/data=!3m1!4b1!4m5!3m4!1s0x3bc1237f52c65db5:0xa3535676176ded0a!8m2!3d16.8457387!4d74.6014575' target='_blank' className='WCE-address '>
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
					</Link>
					<div className='social flex space-x-3'>
						<span className='text-lg font-bold'>Follow us on </span>
						<div className='social-links flex space-x-3'>
							{SocialLinks.map((link, index) => {
								return (
									<Link target='_blank' href={link.link} key={index}>
										<Image loader={imageLoader} alt='GDSC' className='w-6 h-6' src={link.icon} />
									</Link>
								);
							})}
						</div>
					</div>
				</div>
				<div className='quick-links h-52 md:h-60 flex items-end space-x-20'>
					{FooterLinks.map((Link, index) => {
						return (
							<div key={index} className='link-section'>
								<div className={`${Link.title}-heading text-lg font-bold pb-2`}>
									{Link.title}
								</div>
								<div className='links flex flex-col items-center  space-y-3'>
									{Link.links.map((link, index) => {
										return (
											<a className='hover:text-gdsc-blue' aria-label={link.url} key={link.name} target={Link.target} href={link.url}>
												{link.name}
											</a>
										);
									})}
								</div>
							</div>
						);
					})}
				</div>
			</div>
			<div className='trademark text-xs  w-full pt-5 pb-3 sm:py-0   text-center '>
				© 2022 GDSC WCE. All Rights Reserved
			</div>
		</div>
	);
};

export default Footer;
