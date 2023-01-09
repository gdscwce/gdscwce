import {  useState } from 'react';
import {
	Accordion,
	AccordionHeader,
	AccordionBody,
} from '@material-tailwind/react';

import Image from 'next/image';
import tick from '../../../public/icons/tick.png';
function Icon({ id, open }) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			className={`${
				id === open ? 'rotate-180' : ''
			} h-5 w-5 transition-transform`}
			fill='none'
			viewBox='0 0 24 24'
			stroke='currentColor'
			strokeWidth={2}>
			<path strokeLinecap='round' strokeLinejoin='round' d='M19 9l-7 7-7-7' />
		</svg>
	);
}

const FAQ = () => {
	const [open, setOpen] = useState(0);
	const handleOpen = (value) => {
		setOpen(open === value ? 0 : value);
	};
	return (
		<div className='mt-20 md:my-10  flex  items-center space-x-2 justify-center '>
			<div className='hero flex items-center space-x-2  flex-col'>
				<div className='hero-text text-center flex flex-col flex-nowrap  justify-center items-start space-y-8 px-6 sm:px-12 lg:px-52'>
					<h1 className='hero-title text-4xl font-bold  w-full'>FAQ</h1>

					<Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
						<AccordionHeader
							className='outline-none text-left text-lg sm:text-xl'
							onClick={() => handleOpen(1)}>
							What is GDSC WCE?
						</AccordionHeader>
						<AccordionBody className='text-left pt-3 text-gray-500'>
							Google Developer Student Club Walchand College of Engineering
							(GDSC-WCE) is community groups for WCE students interested in
							Google developer technologies. ... By joining a GDSC WCE, students
							grow their knowledge in a peer-to-peer learning environment and
							build solutions for local businesses and their community.
						</AccordionBody>
					</Accordion>
					<Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
						<AccordionHeader
							className='outline-none text-left text-lg sm:text-xl'
							onClick={() => handleOpen(2)}>
							Why GDSC WCE?
						</AccordionHeader>
						<AccordionBody className='text-left pt-3 text-gray-500'>
							GDSC provides the community with the opportunity to:
							<ul className=' sm:pl-3 md:pl-5 list-disc space-y-2 pt-3 '>
								<li className='flex items-center space-x-2'>
									<Image alt='GDSC' className='w-4 h-4' src={tick} />
									<span>
										Growing their knowledge of developer technologies and more
										through peer to peer workshops and events.
									</span>
								</li>
								<li className='flex items-center space-x-2'>
									<Image alt='GDSC' className='w-4 h-4' src={tick} />
									<span>
										Gaining relevant experience by solving problems for local
										organizations with technology-based solutions.
									</span>
								</li>
								<li className='flex items-center space-x-2'>
									<Image alt='GDSC' className='w-4 h-4' src={tick} />
									<span>
										Showcaseing their prototypes and solutions to the local
										community and industry leaders.
									</span>
								</li>
							</ul>
						</AccordionBody>
					</Accordion>
					<Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
						<AccordionHeader
							className='outline-none text-left text-lg sm:text-xl'
							onClick={() => handleOpen(3)}>
							What does the core team do?
						</AccordionHeader>
						<AccordionBody className='text-left pt-3 text-gray-500'>
							The core team is a group of contributing members who are
							responsible for GES-COENGG operations, including the planning and
							execution of activities and events.
						</AccordionBody>
					</Accordion>
					<Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
						<AccordionHeader
							className='outline-none text-left text-lg sm:text-xl'
							onClick={() => handleOpen(4)}>
							Who can become a member of GDSC?
						</AccordionHeader>
						<AccordionBody className='text-left pt-3 text-gray-500'>
							Students from all undergraduate or graduate programs with an
							interest in growing as a developer are welcomed. The only
							prerequisite is your interest and will to learn in a community of
							budding developers.
						</AccordionBody>
					</Accordion>
					<Accordion open={open === 5} icon={<Icon id={5} open={open} />}>
						<AccordionHeader
							className='outline-none text-left text-lg sm:text-xl'
							onClick={() => handleOpen(5)}>
							Who should I reach out to if I have any questions?
						</AccordionHeader>
						<AccordionBody className='text-left pt-3 text-gray-500'>
							If you have any questions or comments, please don't hesitate to
							contact us by clicking the button below. We would be happy to stay
							engaged via email even after the event
						</AccordionBody>
					</Accordion>
				</div>
			</div>
		</div>
	);
};

export default FAQ;
