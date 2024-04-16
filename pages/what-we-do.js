import Head from 'next/head'
import React from 'react'
import WhatWeDoComp from '../components/What-We-Do/What-We-Do'

function WhatWeDo() {
  return (
    <>
      <Head>
        <title>What We Do</title>
        <meta name="title" content="What We Do" />
        <meta
          name="description"
          content="We are a UI/UX Design, App Development, Web Development firm."
        />
      </Head>
      <WhatWeDoComp />
    </>
  )
}

export default WhatWeDo