import React, { useState } from 'react'
import Background from '../../utils/Background'
import projectsbg from '../../public/assets/projects-bg.jpg'
import Image from 'next/image'
import imageLoader from '../../loader'
import gdscprojectlogo from '../../public/assets/gdscprojectlogo.png'
import github from '../../public/icons/github.svg'
import rocket from '../../public/icons/rocket.png'
const Projects = () => {
    const [currentSelectedDomain, setcurrentSelectedDomain] = useState('all')
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
            <div className='projects-section px-8 py-5 md:px-16 md:my-12 '> {/* projects section  */}
                <div className='team-head py-5 '> {/* projects Brief section  */}
                    {/* projects page head  */}
                    <div className=' hidden text-xl  lg:text-3xl  justify-evenly font-semibold md:flex '>
                        {techDomains.map((tech, idx) => {
                            return <div key={idx} onClick={
                                e => setcurrentSelectedDomain(tech)
                            } className={`tech-domain  border-l-2 x ${currentSelectedDomain === tech ? 'text-gdsc-blue border-gdsc-blue' : 'text-gray-500 border-transparent'} ${tech === 'ai/ml' ? 'uppercase' : 'capitalize'}  hover:text-gdsc-blue cursor-pointer p-3 transition ease-in-out duration-500`}>{tech}</div>;
                        })}

                    </div>
                    {/* Year select dropdown */}
                        <div className='Projects-gallery flex items-center flex-col space-y-14  p-16  '>
                            <div className='project  shadow-lg h-80 w-3/4 px-3 bg-gdsc-red'>
                                <div className='h-full w-full inner-container border flex bg-white'>
                                    <div className='project-img-container  w-1/3 flex justify-center items-center'>
                                        <Image className='object-cover' loader={imageLoader} src={gdscprojectlogo} />
                                    </div>
                                    <div className='project-description text-sm pr-16 flex flex-col justify-evenly w-2/3'>
                                        <div className='project-name text-xl font-bold'>GDSCWCE website</div>
                                        <div className='techologies-used  space-x-3' >
                                            <span className='bg-indigo-200 text-indigo-800 rounded px-3 py-2' >NextJs</span> 
                                            <span className='bg-indigo-200 text-indigo-800 rounded px-3 py-2'>Tailwind</span> 
                                        </div>
                                        <div className='contributers'>
                                        <span className="bg-gray-200 text-gray-800 px-3 py-2 rounded-full">Nehal Ugahde</span>    
                                        </div>
                                        <div className='project-description text-gray-600'>
                                        This project generated us fake images of dogs learnt from real ones that exists using Generative Adversial Networks. Our project is based on the concept of GAN(Generative Adversarial Networks). We have trained our model to differentiate between fake and real dog images using GAN.
                                        </div>
                                        <div className='project-links flex space-x-4'>
                                            <span className=' text-white cursor-pointer text-black border px-2 py-1 flex items-center space-x-2 rounded'><Image src={github} class='w-6 h-6' /> <span>GitHub</span> </span>
                                            <span className=' text-white cursor-pointer text-black border px-2 py-1 flex items-center space-x-2 rounded'><Image src={rocket} class='w-6 h-6' /> <span>Live</span> </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>

            </div>
        </div>
    )
}

export default Projects