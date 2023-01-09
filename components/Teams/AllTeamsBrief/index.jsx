import React from 'react';
import TeamBriefCard from './TeamBriefCard';

const AllTeamsBrief = () => {
	const allTeamsBrief =[
		{
			Name:"Core",
			Lead :"Nirmit Chatto",
			hasAssociates:false,
			Associates:"",
			memberCount:7,
		},
		{
			Name:"Createive and Social Team",
			Lead :"Sapna Khedkar",
			hasAssociates:false,
			Associates:"",
			memberCount:8,
		},
		{
			Name:"Management Team",
			Lead :"Nehal Ughade",
			hasAssociates:false,
			Associates:"",
			memberCount:8,
		},
		{
			Name:"E-CELL Team",
			Lead :"Aman Agarwal",
			hasAssociates:false,
			Associates:"",
			memberCount:7,
		},
		{
			Name:"Technical Team",
			Lead :"Daulatrao Patil",
			hasAssociates:true,
			Associates:"Neha Gddam && Chetna Patil",
			memberCount:7,
		}
	]
	return (
		<div className='space-y-8'>
			<div className='flex justify-center'>				
					<TeamBriefCard data={allTeamsBrief[0]} color={0} />
			</div>
			<div className='teams-grid flex justify-around flex-wrap'>
				{/* Teams grid  */}
				{allTeamsBrief.map((team,index)=>{
					if(team.Name=="Core" || team.Name=="Technical Team")
						return null;
					return <TeamBriefCard data={team} color={index} key={index} />
				})}
			</div>
			<div className='flex justify-center mb-8'>
				{/* <AllTeamsBrief data={allTeamsBrief[AllTeamsBrief.length-1]} color={0} /> */}
			</div>
		</div>
	);
};

export default AllTeamsBrief;
