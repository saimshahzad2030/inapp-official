import React from 'react'
import Head from 'next/head'
import Sidebar from '../components/Sidebar/Sidebar';
import Portfolio from '../components/Portfolio/Portfolio';
import Footer from '../components/Footer/Footer';
export default function OurPortfolio() {
  return (
    <>
        <Sidebar />

            <Head>
                <title>Get In Touch</title>
                <meta name="title" content="Get In Touch" />
            </Head>
            <Portfolio />
        <Footer />

        </>
  )
}
