import React from 'react';
import TeamBriefCard from './TeamBriefCard';

const AllTeamsBrief = ({allTeamsBrief,year}) => {
	
	return (
		<div className='mt-10 md:mt-0'>
			{/* Core team */}
			<div className='flex justify-center'>				
					<TeamBriefCard data={allTeamsBrief[0]} color={0} year={year} />
			</div>
			<div className='teams-grid flex justify-evenly items-center flex-wrap gap-3'>
				{/* Teams grid  */}
				{allTeamsBrief.map((team,index)=>{
					if(team.Name=="Core" || team.Name=="Technical Team")
						return null;
					return <TeamBriefCard data={team} color={index} key={index} year={year} />
				})}
			</div>
			{/* Technical Team */}
			<div className='flex justify-center mb-8'>
				<TeamBriefCard data={allTeamsBrief[allTeamsBrief.length-1]} color={0} year={year} />
			</div>
		</div>
	);
};

export default AllTeamsBrief;
