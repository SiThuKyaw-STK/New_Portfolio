import React from 'react';
import Head from "next/head";
import Navbar from "../components/Navbar";
import AboutOfHero from "../components/AboutOfHero";

function About(props) {
    return (
        <>
            <Head>
                <title>Si Thu Kyaw || About</title>
                <meta name="description" content="Si Thu Kyaw Portfolio" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="../../assets/favicon.png" />
            </Head>
            <Navbar/>
            <AboutOfHero/>
        </>
    );
}

export default About;