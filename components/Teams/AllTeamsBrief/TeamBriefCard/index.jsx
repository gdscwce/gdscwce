import React from 'react';
import { Link } from 'next/link';

const TeamBriefCard = ({ data: { Name, Lead, hasAssociates, Associates, memberCount }, color, year }) => {

	return (
		<a href='#core'  className={`team-card  mb-8  lg:mb-16 w-80 bg-white cursor-pointer shadow ${color % 4 == 0 ? 'shadow-gdsc-blue' : color % 4 == 1 ? 'shadow-gdsc-red' : color % 4 == 2 ? 'shadow-gdsc-green' : 'shadow-gdsc-yellow'} p-4 rounded-lg`}>
			<div className={`team-card-head flex justify-between items-center   `}>
				<span className=' lg:text-lg font-semibold '>{Name} </span>
				<span className='text-sm font-semibold'>{year}</span>
			</div>
			<div className='team-card-body mt-4'>
				<div className='team-card-body-head flex justify-between items-center'>
					<span className='text-sm font-semibold'>Team Lead</span>
					<span className='text-sm font-semibold'>{Lead}</span>

				</div>
				{hasAssociates && <div className='team-card-body-associates flex justify-between pt-2'>
					<span className='text-sm font-semibold'>Team Associates</span>
					<div className="flex flex-col text-right">
						{
							Associates.map((associate, index) => {
								return <span className='text-sm font-semibold' key={index}>{associate}</span>
							}
							)
						}
					</div>
				</div>}
				<div className='team-card-body-content mt-2'>
					<div className='team-card-body-content-member flex justify-between items-center'>
						<span className='text-sm font-semibold'>Total Members</span>
						<span className='text-sm font-semibold'>{memberCount}</span>
					</div>

				</div>
			</div>
		</a>
	);
};

export default TeamBriefCard;
