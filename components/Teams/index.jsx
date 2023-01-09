import React, { useState } from 'react';
import TeamsBackground from './Background';

const Teams = () => {
	const [open, setopen] = useState(false);
	const [current, setcurrent] = useState('2022-23');
	const [years, setyears] = useState(['2022-23', '2021-22']);
	console.log(current);
	return (
		<div className='teams-container min-h-screen'>
			<TeamsBackground />
			<div className='teams-section p-3  sm:px-8 sm:py-5 md:px-16 md:my-12 '>
				<div className='team-head flex justify-between py-5 '>
					<span className='text-3xl font-semibold'>Teams</span>
					<div>
						<button
							className='text-gray-600 border-b-2  font-medium text-sm px-4 py-2.5 text-center inline-flex items-center'
							type='button'
							onClick={(e) => setopen((prev) => !prev)}>
							{current}

							<svg
								className='w-4 h-4 ml-2'
								fill='none'
								stroke='currentColor'
								viewBox='0 0 24 24'
								xmlns='http://www.w3.org/2000/svg'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M19 9l-7 7-7-7'
								/>
							</svg>
						</button>

						{/* <!-- Dropdown menu --> */}
						<div
							className={` ${
								open ? 'block' : 'hidden'
							} bg-white text-base z-50 list-none divide-y divide-gray-100 rounded shadow my-4`}
							id='dropdown'>
							<ul className='py-1' aria-labelledby='dropdown'>
								{years.map((ele) => {
									return (
										<li
											key={ele}
											className='cursor-pointer hover:bg-gray-100'
											onClick={(e) => {
												setopen(false);
												current !== ele && setcurrent(ele); // remove update if same value is present in current state
												// its still gonna update any ways as setopen happens :)
											}}>
											<a
												aria-label='2022-23'
												className='text-sm py-2 px-4 block whitespace-nowrap'
												href='#pablo'>
												{ele}
											</a>
										</li>
									);
								})}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Teams;
