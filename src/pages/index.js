import Head from 'next/head'
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Si Thu Kyaw</title>
        <meta name="description" content="Si Thu Kyaw Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="../../assets/favicon.png" />
      </Head>

      <Navbar/>
        <Hero/>
        <Skills/>
        <Footer/>
    </>
  )
}
