import Head from 'next/head'
import React from 'react'
import CareersComp from '../components/Careers/Careers'

function Careers() {
  return (
    <>
      <Head>
        <title>Careers</title>
        <meta name="title" content="Careers" />
        <meta
          name="description"
          content="We are big on collaboration, pushing, and knowledge sharing. We’re always expanding our enthusiastic, hard-working group of creators, believers, and achievers."
        />
      </Head>
      <CareersComp />
    </>
  )
}

export default Careers