import { NextSeo } from 'next-seo'
import React from 'react'
import About from '../components/About';

const about = () => {
  return (
    <>
      <NextSeo
        title='About | GDSC WCE'
        description='About GDSC WCE'
        canonical='https://gdscwce.com/about'
        openGraph={{
          url: 'https://gdscwce.com/about',
          title: 'About | GDSC WCE',
          description: 'About GDSC WCE',
          site_name: 'GDSC WCE',
        }}
        additionalMetaTags={[
          {
            name: 'keywords',
            content: 'GDSC WCE',
          },
        ]}


      ></NextSeo>
      <About />
    </>
  )
}

export default about;