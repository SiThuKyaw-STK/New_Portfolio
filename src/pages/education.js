import React from 'react';
import Head from "next/head";
import Navbar from "../components/Navbar";
import EducationOfHero from "../components/EducationOfHero";
import Footer from "../components/Footer";

const Education = () => {
    return (
        <>
            <Head>
                <title>Si Thu Kyaw || Education</title>
                <meta name="description" content="Si Thu Kyaw Portfolio"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="../../assets/favicon.png"/>
            </Head>
            <Navbar/>
            <EducationOfHero/>
            <Footer/>
        </>

    );
};

export default Education;