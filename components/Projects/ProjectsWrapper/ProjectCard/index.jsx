import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import imageLoader from '../../../../loader'
import github from '../../../../public/icons/github.svg'
import rocket from '../../../../public/icons/rocket.png'
import licenseLogo from '../../../../public/icons/license.png'
const ProjectCard = ({data:{name,description,techStack,contributors,githubLink,liveLink,image,license}}) => {
  return (
    <div className='project cursor-pointer rounded-xl shadow-lg   md:mb-0 md:h-80 w-10/12 lg:w-3/4 px-3 bg-gdsc-green'>
    <div className='h-full w-full inner-container rounded-xl border flex flex-col md:flex-row py-5   bg-white'>
        <div className='project-img-container lg:mx-3  md:w-2/3 lg:w-1/3 flex justify-center items-center'>
            <Image className='object-cover w-40 h-40 md:w-60 md:h-60' loader={imageLoader} width={100} height={100} src={image} />
        </div>
        <div className='project-description  relative text-sm md:pr-16 flex flex-col items-center lg:items-start  md:w-2/3 '>
            <div className='project-name text-xl pt-5 pb-3 font-bold '>{name}</div>
            <div  className='techologies-used pb-5 space-x-3 flex   overflow-x-scroll' >
                {techStack.map((tech,idx)=>{
                    return <span key={idx} className='bg-indigo-200 text-indigo-800 rounded px-3 py-2' >{tech}</span>
                })}
            </div>
            <div className='contributers pb-5'>
                {contributors.map((person,idx)=>{
                    return <span className="bg-gray-200 text-gray-800 px-3 py-2 rounded-full">{person}</span>
                })}
            </div>
            <div className='project-description hidden sm:block sm:text-center lg:text-left sm:px-5 lg:p-0 sm:py-3 text-gray-600  h-1/4 overflow-y-scroll'>
                {description}
            </div>
            <div className='project-links flex space-x-4  md:absolute md:bottom-0 '>
                { githubLink?.length && <Link href={githubLink} target="_blank" className=' cursor-pointer text-black border px-2 py-1 flex items-center space-x-2 rounded'><Image src={github} class='w-6 h-6' /> <span>GitHub</span> </Link>}
                { liveLink?.length && <Link href={liveLink} target="_blank" className=' cursor-pointer text-black border px-2 py-1 flex items-center space-x-2 rounded'><Image src={rocket} class='w-6 h-6' /> <span>Live</span> </Link>}
                { license?.length && <span href={liveLink} target="_blank" className=' cursor-pointer text-black border px-2 py-1 flex items-center space-x-2 rounded'><Image src={licenseLogo} class='w-6 h-6' /> <span>{license}</span> </span>}
            </div>
        </div>
    </div>
</div>
  )
}

export default ProjectCard