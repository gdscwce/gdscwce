import React from 'react'
import Domain from './Domain'
import webdev from '../../../public/assets/webdev.svg'
import appdev from '../../../public/assets/appdev.svg'
import management from '../../../public/assets/management.svg'
import ecell from '../../../public/assets/ecell.webp'
import creative from '../../../public/assets/creative.png'

const Domains = () => {
    const domains = [
        {
            name: 'Web Development',
            description: "In this domain, we concentrate on developing and maintaining websites to solve real time problems. For any website, it's the work that happens behind the scenes to make a website look great, work fast and perform well with a seamless user experience.",
            img: webdev,
            color: 'text-gdsc-blue',
            isGray: true,
        },
        {
            name: 'Management',
            description: "For the growth of all and to bring chances for all the domains to excel and also develop teamwork skills, we provide managerial domain to increase the productivity of all our members by being the face of this society and bring forth new projects.",
            img: management,
            color: 'text-gdsc-green',
            isGray: false
        }, {
            name: 'App Development',
            description: "Mobile app development has been steadily growing, in revenues and jobs created. In this domain and all others, we encourage all to keep practising and be their best selves.",
            img: appdev,
            color: 'text-gdsc-red',
            isGray: true
        },
        {
            name: 'Entrepreneurship-cell',
            description: "E-cell club is about mentoring students for those who have interest in entrepreneurship, startups and creates an environment so that he/she can develop the attitude and skills in this domain. Our club provides support to all the budding entrepreneurs and helps shape their Ideas and convert them into real world business opportunities.",
            img: ecell,
            color: 'text-gdsc-yellow',
            isGray: false
        },
        {
            name: 'Creative Design',
            description: "Creative thinking shows us that there are many solutions to any problem, and developing your creative thinking skills helps you recognize innovative solutions more quickly. ",
            img: creative,
            color: 'text-gdsc-blue',
            isGray: true
        }
    ]
    return (
        <div className="domains-container py-10 ">
            {/* <div className='domains-head py-5 px-3 sm:px-8 md:px-16 '> domainss Brief section
                domainss page head
                <span className='text-4xl font-semibold'>Domains</span>
            </div> */}
            {/* domainss Brief section for even */}
            {domains.map((domain, idx) => {
                return <Domain data={domain} key={idx} />
            })}

        </div>
    )
}

export default Domains