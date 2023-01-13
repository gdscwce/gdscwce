import React from 'react'
import TeamMember from './TeamMember'


const Team = ({data:{TeamName,TeamMembers}}) => {
    return (
        <div id={TeamName} className='Allteams-container'>
            <div className='Allteams-section'>
                <div className='Allteams-head text-center pt-5'>
                    <span className='text-3xl font-semibold uppercase'>{TeamName} TEAM</span>
                </div>
                <div className='Allteams-body py-12  flex md:px-24 flex-wrap justify-center'>
                    {TeamMembers.map((ele, idx) => {
                        return <TeamMember key={idx} memeberInfo={ele} colorIdx={idx} color={'color' + idx} />
                    })}
                    {/* <div className="TeamCard shadow border ease-in hover:shadow-xl transition-all duration-400 rounded-xl w-56 flex flex-col items-center justify-center h-80">
                        <div className="TeamCard-image-container border w-40 h-40 rounded-full overflow-hidden mb-5">
                            <Image loader={imageLoader} src="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-dsc/avatars/nehal_ughade_Irt34x3.jpg" className='w-full h-full object-cover' alt="Team Lead" width={0} height={0} ></Image>
                        </div>
                        <div className="TeamCard-body text-center">
                            <div className="TeamCard-name text-xl font-bold ">
                                Nehal Ughade
                            </div>
                            <div className="TeamCard-name text-sm text-gray-600 pb-4">
                                Management Lead
                            </div>
                            <div className="TeamCard-social-links flex justify-between">
                                <Image loader={imageLoader} className='w-6 h-6' src={github}></Image>
                                <Image loader={imageLoader} className='w-6 h-6' src={ig}></Image>
                                <Image loader={imageLoader} className='w-6 h-6' src={linkedin}></Image>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Team