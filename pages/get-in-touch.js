import Head from 'next/head'
import React from 'react'
import GetInTouchComp from '../components/Get-In-Touch/Get-In-Touch'

function GetInTouch() {
    return (
        <>
            <Head>
                <title>Get In Touch</title>
                <meta name="title" content="Our Portfolio" />
            </Head>
            <GetInTouchComp />
        </>
    )
}

export default GetInTouch