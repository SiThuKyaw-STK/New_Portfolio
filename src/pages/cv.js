import React from 'react';
import Head from "next/head";
import Navbar from "../components/Navbar";
import myCv from "/public/assets/Si_Thu_Kyaw_CV.jpg";
import Image from "next/image";
import {BsFiletypePdf} from "react-icons/bs";
import Link from "next/link";

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
                <svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'>
                    <defs>
                        <pattern id='a' patternUnits='userSpaceOnUse' width='30' height='30'
                                 patternTransform='scale(1) rotate(0)'>
                            <rect x='0' y='0' width='100%' height='100%' fill='hsla(0, 0%, 12%, 1)'/>
                            <path d='M0 22.5h30v15H0zm15-15h30v15H15m-30-15h30v15h-30zm15-15h30v15H0z'
                                  stroke-width='1.5' stroke='hsla(217, 10%, 25%, 1)' fill='none'/>
                        </pattern>
                    </defs>
                    <rect width='800%' height='800%' transform='translate(-60,-60)' fill='url(#a)'/>
                </svg>
            </div>
            <div className={`xl:w-[50%] m-auto p-10 relative xl:block flex justify-center items-center`}>
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
        </>
    );
};

export default Cv;