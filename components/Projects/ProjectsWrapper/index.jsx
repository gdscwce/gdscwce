import React from 'react'
import ProjectCard from './ProjectCard'
import Image from 'next/image'
const ProjectsWrapper = ({ projects }) => {
    return (
        <div className='Projects-gallery flex items-center flex-col space-y-8 md:space-y-14 p-0  md:p-12  lg:p-16 '>
            {projects ? projects.map((project, idx) => {
                return <ProjectCard key={idx} data={project} />
            }) : <div className=' text-3xl py-24 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 '>Coming soon...
                
            </div>}
        </div>
    )
}

export default ProjectsWrapper