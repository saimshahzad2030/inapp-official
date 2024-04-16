import Head from 'next/head'
import React from 'react'
import WhoWeAreComp from '../components/Who-We-Are/Who-We-Are'

function WhoWeAre() {
    return (
        <>
            <Head>
                <title>Who We Are</title>
                <meta name="title" content="Who We Are" />
                <meta
                    name="description"
                    content="We are a UI/UX Design, App Development, Web Development firm."
                />
            </Head>
            <WhoWeAreComp />
        </>

    )
}

export default WhoWeAre