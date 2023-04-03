import React from 'react';
import Head from "next/head";
import Navbar from "../components/Navbar";
import ProjectsOfHero from "../components/ProjectsOfHero";
import Footer from "../components/Footer";

const Projects = () => {
    return (
        <>
            <Head>
                <title>Si Thu Kyaw || Projects</title>
                <meta name="description" content="Si Thu Kyaw Portfolio" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="../../assets/favicon.png" />
            </Head>
            <Navbar/>
            <ProjectsOfHero/>
            <Footer/>
        </>
    );
};

export default Projects;