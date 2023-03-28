import React from 'react';
import {IoHome} from "react-icons/io5";
import {BsFillInfoCircleFill, BsFillPersonVcardFill} from "react-icons/bs";
import {FaFolderOpen, FaUserGraduate} from "react-icons/fa";
import Link from "next/link";

const Navbar = () => {
    return (
        <>
            <nav className={`z-[1000] md:grid hidden w-[50px] hover:w-[150px] overflow-hidden grid grid-rows-5 gap-5 bg-secondary rounded-xl fixed top-[30%] right-[1%] duration-700 ease-in-out shadow-inner-nav`}>
                <Link href={`/`} className={`group flex items-center justify-start text-primary p-3 cursor-pointer hover:bg-primary duration-500 ease-in-out`}>
                    <IoHome className={`text-2xl group-hover:text-secondary duration-500 ease-in-out`}/>
                    <span className={`font-medium uppercase ml-4 group-hover:text-secondary duration-500 ease-in-out`}>Home</span>
                </Link>
                <Link href={`/about`} className={`group flex items-center justify-start text-primary p-3 cursor-pointer hover:bg-primary duration-500 ease-in-out`}>
                    <BsFillInfoCircleFill className={`text-2xl group-hover:text-secondary duration-500 ease-in-out`}/>
                    <span className={`font-medium uppercase ml-4 group-hover:text-secondary duration-500 ease-in-out`}>About</span>
                </Link>
                <Link href={`/education`} className={`group flex items-center justify-start text-primary p-3 cursor-pointer hover:bg-primary duration-500 ease-in-out`}>
                    <FaUserGraduate className={`text-2xl group-hover:text-secondary duration-500 ease-in-out`}/>
                    <span className={`font-medium uppercase ml-4 group-hover:text-secondary duration-500 ease-in-out`}>Education</span>
                </Link>
                <Link href={`/projects`} className={`group flex items-center justify-start text-primary p-3 cursor-pointer hover:bg-primary duration-500 ease-in-out`}>
                    <FaFolderOpen className={`text-2xl group-hover:text-secondary duration-500 ease-in-out`}/>
                    <span className={`font-medium uppercase ml-4 group-hover:text-secondary duration-500 ease-in-out`}>Projects</span>
                </Link>
                <Link href={`/`} className={`group flex items-center justify-start text-primary p-3 cursor-pointer hover:bg-primary duration-500 ease-in-out`}>
                    <BsFillPersonVcardFill className={`text-2xl group-hover:text-secondary duration-500 ease-in-out`}/>
                    <span className={`font-medium uppercase ml-4 group-hover:text-secondary duration-500 ease-in-out`}>Contact</span>
                </Link>
            </nav>
        </>
    );
};

export default Navbar;