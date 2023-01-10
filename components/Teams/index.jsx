import React, { useState } from 'react';
import AllTeamsBrief from './AllTeamsBrief';
import TeamsBackground from './Background';
import Dropdown from './Dropdown';
import { allTeamsBrief } from '../../data/AllTeamsOverview';
import AllTeams from './AllTeams/index';
const Teams = () => {
	const [open, setopen] = useState(false);
	const [current, setcurrent] = useState('2022-23');
	const [years, setyears] = useState(['2022-23', '2021-22']);
	const [AllTeamsOverview, setAllTeamsOverview] = useState(allTeamsBrief);
	return (
		<div className='teams-container min-h-screen'>
			<TeamsBackground />
			<div className='teams-section p-3  sm:px-8 sm:py-5 md:px-16 md:my-12 '> {/* Teams section  */}
				<div className='team-head flex justify-between py-5 '> {/* Teams Brief section  */}
					{/* Teams page head  */}
					<span className='text-3xl font-semibold'>Teams</span>
					{/* Year select dropdown */}
					<Dropdown
						open={open} setopen={(e) => setopen(e)} current={current} setcurrent={e => setcurrent(e)} years={years}
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
