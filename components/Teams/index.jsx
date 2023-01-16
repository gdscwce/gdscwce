import React, { useState } from 'react';
import AllTeamsBrief from './AllTeamsBrief';
import Background from '../../utils/Background';
import Dropdown from './Dropdown';
import { allTeamsBrief } from '../../data/AllTeamsOverview';
import AllTeams from './AllTeams/index';
import team_background from '../../public/assets/team_background.jpg';

const Teams = () => {
	const [open, setopen] = useState(false);
	const [current, setcurrent] = useState('2022-23');
	const [years, setyears] = useState(['2022-23', '2021-22']);
	const [AllTeamsOverview, setAllTeamsOverview] = useState(allTeamsBrief);
	return (
		<div className='teams-container min-h-screen'>
			<Background img={team_background} border={true} >
				<div className='capitalize text-lg md:text-xl text-transparent   bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 '>
					Meet the team
				</div>
				<div className='text-lg md:text-2xl font-bold text-center  md:w-3/4 lg:w-1/2'>
					Our team is made up of passionate individuals who are dedicated to
					creating a positive community
				</div>
			</Background>
			<div className='teams-section px-8 py-5 md:px-16 md:my-12 '> {/* Teams section  */}
				<div className='team-head flex justify-between py-5 '> {/* Teams Brief section  */}
					{/* Teams page head  */}
					<span className='text-3xl font-semibold'>Teams</span>
					{/* Year select dropdown */}
					<Dropdown
						open={open} setopen={(e) => setopen(e)} current={current} setcurrent={e => setcurrent(e)} data={years}
					/>
				</div>
				{/* Teams Brief section  */}
				<AllTeamsBrief allTeamsBrief={AllTeamsOverview} year={current} />
				<AllTeams />
			</div>
			{/* Teams section  */}
		</div> // container
	);
};

export default Teams;
