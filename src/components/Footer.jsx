import React from 'react';
import {FaFacebookSquare, FaGithubSquare, FaRegCopyright, FaTwitterSquare} from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    return (
        <section className={`bg-info flex justify-center items-center p-10`}>
            <div className={`grid gap-10`}>
                <h3 className={`text-black text-center`}>Si Thu Kyaw</h3>
                <ul className={`flex md:gap-10 gap-5`}>
                    <Link href={`/`} className={`font-medium text-black cursor-pointer hover:underline`}>Home</Link>
                    <Link href={`/about`} className={`font-medium text-black cursor-pointer hover:underline`}>About</Link>
                    <Link href={`/education`} className={`font-medium text-black cursor-pointer hover:underline`}>Education</Link>
                    <Link href={`/projects`} className={`font-medium text-black cursor-pointer hover:underline`}>Projects</Link>
                    <Link href={`/cv`} className={`font-medium text-black cursor-pointer hover:underline`}>CV</Link>
                </ul>
                <div className={`flex justify-center`}>
                    <FaFacebookSquare className={`text-5xl text-black cursor-pointer hover:text-black/90`}/>
                    <FaTwitterSquare className={`text-5xl text-black cursor-pointer hover:text-black/70`}/>
                    <FaGithubSquare className={`text-5xl text-black cursor-pointer hover:text-black/90`}/>
                </div>
                <div className={`flex items-center justify-center gap-1`}>
                    <FaRegCopyright/>
                    <h5 className={`font-medium tracking-wide`}>
                        {currentYear} <Link href={``} className={`text-[#00176C] underline font-bold`}>Si Thu Kyaw</Link>. All Rights Reserved</h5>
                </div>
            </div>
        </section>
    );
};

export default Footer;