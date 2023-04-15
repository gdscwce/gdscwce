import React from 'react'
import Team from './Team'
import  allTeams  from '../../../data/AllTeamsData'
const AllTeams = () => {
   
    return (
        <>
         <i> * Site under maintainance * </i>
            {allTeams.map((team, idx) => {
                return <Team key={idx} data={team} />
            })
            }
        </>

    )
}

export default AllTeams