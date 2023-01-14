import React from 'react'
import { NextSeo } from 'next-seo'
import Projects from '../components/Projects'
const projects = () => {
    return (
        <>
            <NextSeo
                title='Projects | GDSC WCE'
                description='Projects GDSC WCE'
                canonical='https://gdscwce.com/Projects'
                openGraph={{
                    url: 'https://gdscwce.com/Projects',
                    title: 'Projects | GDSC WCE',
                    description: 'Projects GDSC WCE',
                    site_name: 'GDSC WCE',
                }}
                additionalMetaTags={[
                    {
                        name: 'keywords',
                        content: 'GDSC WCE',
                    },
                ]}


            ></NextSeo>
            <Projects />
        </>
    )
}

export default projects