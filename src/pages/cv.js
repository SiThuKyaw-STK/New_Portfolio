import React from 'react';
import Head from "next/head";
import Navbar from "../components/Navbar";
import myCv from "/public/assets/Si_Thu_Kyaw_CV.jpg";
import Image from "next/image";
import {BsFiletypePdf} from "react-icons/bs";
import Link from "next/link";
import Footer from "../components/Footer";
import BrickBg from "../../public/assets/svgs/BrickBg";

const Cv = () => {
    return (
        <>
            <Head>
                <title>Si Thu Kyaw || My CV</title>
                <meta name="description" content="Si Thu Kyaw Portfolio"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="../../assets/favicon.png"/>
            </Head>
            <Navbar/>
            <div className={`fixed -z-10 h-full w-full`}>
                <BrickBg/>
            </div>
            <div className={`xl:w-[50%] m-auto p-10 relative xl:block flex justify-center items-center mb-10`}>

                <Image src={myCv} alt={`/`}/>
                <div className={`absolute md:bottom-[10%] md:left-[10%] bottom-0`}>
                    <Link href="/"
                          className={`group lg:hover:indent-8 indent-2 btn-black text-white inline-flex items-center justify-center relative animation-500`}>
                        <BsFiletypePdf
                            className={`group-hover:btn-animation text-2xl h-full animation-500 lg:absolute left-3 top-0 lg:opacity-0`}/>
                        Download CV
                    </Link>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default Cv;