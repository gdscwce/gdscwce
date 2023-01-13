import React from 'react'
import Team from './Team'
import  allTeams  from '../../../data/AllTeamsData'
const AllTeams = () => {
   
    return (
        <>
            {allTeams.map((team, idx) => {
                return <Team data={team} />
            })
            }
        </>

    )
}

export default AllTeams