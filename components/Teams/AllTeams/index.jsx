import React from 'react'
import Image from 'next/image';
import github from '../../../public/icons/github.png'
import ig from '../../../public/icons/instagram.png'
import linkedin from '../../../public/icons/linkedin.png'
import imageLoader from '../../../loader';

const AllTeams = () => {

    return (
        <div id='core' className='Allteams-container'>
            <div className='Allteams-section'>
                <div className='Allteams-head text-center'>
                    <span className='text-3xl font-semibold'>CORE TEAM</span>
                </div>
                <div className='Allteams-body flex'>
                    <div className="TeamCard border w-48 p-5 flex flex-col h-80 space-y-5">
                        <div className="TeamCard-image-container border h-1/2 rounded-full overflow-hidden">
                            <Image loader={imageLoader} src="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-dsc/avatars/nehal_ughade_Irt34x3.jpg" className='w-full h-full object-cover' alt="Team Lead" width="100" height="100" />
                        </div>
                        <div className="TeamCard-body">
                            <div className="TeamCard-name">
                                Nehal Ughade
                            </div>
                            <div className="TeamCard-name">
                                Lead
                            </div>
                            <div className="TeamCard-social-links flex justify-between">
                                <Image loader={imageLoader} className='w-6 h-6' src={github}></Image>
                                <Image loader={imageLoader} className='w-6 h-6' src={ig}></Image>
                                <Image loader={imageLoader} className='w-6 h-6' src={linkedin}></Image>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllTeams