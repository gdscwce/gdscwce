import React from 'react'
import Image from 'next/image';
import Link from 'next/link'
import githubLogo from '../../../../../public/icons/github.svg'
import igLogo from '../../../../../public/icons/instagram.svg'
import linkedinLogo from '../../../../../public/icons/linkedin.svg'
import imageLoader from '../../../../../loader';
const TeamMember = ({ memeberInfo: { name, ig, github, linkedin, post, profileUrl }, color ,colorIdx}) => {
    return (
        <div className={`TeamCard ${color} cursor-pointer mb-5 md:mb-10 mx-2 md:mx-5 shadow-md hover:shadow-none hover:-mt-1 hover:mb-11 hover:drop-shadow-2xl border  ease-in transition-all duration-400 rounded-xl w-60 md:w-56 flex flex-col items-center justify-center h-80  border-b-2 border-${color}`}>
            <div className={`TeamCard-image-container   w-40 h-40 rounded-full overflow-hidden mb-5 border-4 border-${colorIdx%4==0?'gdsc-blue':colorIdx%4==1?'gdsc-red':colorIdx%4==2?'gdsc-green':'gdsc-yellow'}`}>
                <Image loader={imageLoader} src={profileUrl} className='w-full h-full object-cover ' alt="Team Lead" width={0} height={0} ></Image>
            </div>
            <div className="TeamCard-body text-center">
                <div className="TeamCard-name text-xl capitalize font-bold ">
                    {name}
                </div>
                <div className="TeamCard-post text-xs capitalize  pb-6">
                    {post}
                </div>
                <div className="TeamCard-social-links flex justify-between px-2">
                    <Link target='_blank' href={github}>
                        <Image loader={imageLoader} className='w-6 h-6' src={githubLogo}></Image>
                    </Link>
                    <Link target='_blank' href={ig}>
                        <Image loader={imageLoader} className='w-6 h-6' src={igLogo}></Image>
                    </Link>
                    <Link target='_blank' href={linkedin}>
                        <Image loader={imageLoader} className='w-6 h-6' src={linkedinLogo}></Image>
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default TeamMember