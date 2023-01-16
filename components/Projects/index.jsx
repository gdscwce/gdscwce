import React, { useState } from 'react'
import Background from '../../utils/Background'
import projectsbg from '../../public/assets/projects-bg.jpg'
import ProjectsWrapper from './ProjectsWrapper'
import projects from '../../data/ProjectsData'
import Dropdown from '../Teams/Dropdown/index';
const Projects = () => {

    const [currentSelectedDomain, setcurrentSelectedDomain] = useState('all')
    const [open, setopen] = useState(false);
    const techDomains = ['all', 'web', 'app', 'cyber security', 'cloud', 'ai/ml']; // keeping lower case for better state management
    return (
        <div>
            <Background img={projectsbg}>
                <div className='uppercase font-semibold text-2xl md:text-3xl lg:text-5xl pb-5 text-white'>
                    Projects
                </div>
                <div className='text-base md:text-xl text-center text-white px-2 md:w-3/4 lg:w-1/2'>
                    Our team is made up of passionate individuals who are dedicated to
                    creating a positive community
                </div>
            </Background>
            <div className='projects-section mb-10'> {/* projects section  */}
                <div className='team-head  px-8 pt-10  md:px-16 md:my-12'> {/* projects Brief section  */}
                    {/* projects page head  */}
                    <div className=' hidden text-xl  lg:text-3xl  justify-evenly font-semibold md:flex '>
                        {techDomains.map((tech, idx) => {
                            return <div key={idx} onClick={
                                e => setcurrentSelectedDomain(tech)
                            } className={`tech-domain  border-l-2 x ${currentSelectedDomain === tech ? 'text-gdsc-blue border-gdsc-blue' : 'text-gray-500 border-transparent'} ${tech === 'ai/ml' ? 'uppercase' : 'capitalize'}  hover:text-gdsc-blue cursor-pointer p-3 transition ease-in-out duration-500`}>{tech}</div>;
                        })}
                    </div>
                    <div className='dropdown md:hidden  justify-center pb-5' >
                    {/* for mobile screens! */}
                    <Dropdown data={techDomains} open={open} setopen={setopen} current={currentSelectedDomain} setcurrent={setcurrentSelectedDomain} custom={true} />
                    </div> 

                </div>
                <ProjectsWrapper projects={projects[currentSelectedDomain]} />

            </div>
        </div>
    )
}

export default Projects