import React from 'react';

const TeamBriefCard = ( {data:{Name,Lead,hasAssociates,Associates,memberCount},color} ) => {
	// console.log(color	)
	return (
		<div className={`team-card w-full sm:w-1/2 md:w-1/3 h-12 lg:w-1/4 bg-white rounded-lg shadow ${color==0||color%4==0?'shadow-gdsc-blue':color%4==1?'shadow-gdsc-red':color%4==2?'shadow-gdsc-green':'shadow-gdsc-yellow'}  p-4`}>
			<div className='team-card-head flex justify-between items-center '>
				<span className='text-xl font-semibold'>{Name} </span>
				<span className='text-sm font-semibold'>2022-23</span>
			</div>
			<div className='team-card-body mt-4'>
				<div className='team-card-body-head flex justify-between items-center'>
					<span className='text-sm font-semibold'>Team Lead</span>
					<span className='text-sm font-semibold'>{Lead}</span>
				</div>
				<div className='team-card-body-content mt-2'>
					<div className='team-card-body-content-member flex justify-between items-center'>
						<span className='text-sm font-semibold'>Total Members</span>
						
					</div>
				</div>
			</div>
		</div>
	);
};

export default TeamBriefCard;
