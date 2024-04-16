import Head from 'next/head'
import Brands from '../components/Brands/Brands'
import Footer from '../components/Footer/Footer'
import Header from '../components/header/header'
import MiddleSection from '../components/Middle-Section/Middle-Section'
import Positions from '../components/Positions/Positions'
import Sidebar from '../components/Sidebar/Sidebar'
import VideoSection from '../components/VideoSection/VideoSection'
import Portfolio from '../components/Portfolio/Portfolio'
import Testimonials from '../components/Testimonials/Testimonials'

export default function Home() {
  return (
    <>
      <Head>
        <title>InApp Solutions</title>
        <meta name="title" content="InApp Solutions" />
        <meta
          name="description"
          content="InApp Solution is a technology company that provides web and mobile application solutions."
        />
      </Head>
      <Sidebar />
      <Header />
      <MiddleSection />
      <Brands />
      <Testimonials />
      <Positions />
      <Portfolio />
      <VideoSection />
      <Footer />
    </>
  )
}
