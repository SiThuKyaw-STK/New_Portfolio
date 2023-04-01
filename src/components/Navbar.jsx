import React, {useState} from 'react';
import {IoHome} from "react-icons/io5";
import {BsFillInfoCircleFill, BsFillPersonVcardFill} from "react-icons/bs";
import {FaFolderOpen, FaUserGraduate} from "react-icons/fa";
import Link from "next/link";
import {CgArrowsExchange} from "react-icons/cg";

const Navbar = () => {
    const [nav,setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    }
    return (
        <>
            <nav className={`z-[1000] w-[50px] hover:w-[150px] overflow-hidden hidden md:grid grid-rows-5 gap-5 bg-secondary rounded-xl fixed top-[30%] right-[1%] duration-700 ease-in-out`}>
                <Link href={`/`} className={`group flex items-center justify-start text-primary p-3 cursor-pointer hover:bg-primary animation-500`}>
                    <IoHome className={`text-2xl group-hover:text-secondary animation-500`}/>
                    <span className={`font-medium uppercase ml-4 group-hover:text-secondary`}>Home</span>
                </Link>
                <Link href={`/about`} className={`group flex items-center justify-start text-primary p-3 cursor-pointer hover:bg-primary animation-500`}>
                    <BsFillInfoCircleFill className={`text-2xl group-hover:text-secondary animation-500`}/>
                    <span className={`font-medium uppercase ml-4 group-hover:text-secondary animation-500`}>About</span>
                </Link>
                <Link href={`/education`} className={`group flex items-center justify-start text-primary p-3 cursor-pointer hover:bg-primary animation-500`}>
                    <FaUserGraduate className={`text-2xl group-hover:text-secondary animation-500`}/>
                    <span className={`font-medium uppercase ml-4 group-hover:text-secondary animation-500`}>Education</span>
                </Link>
                <Link href={`/projects`} className={`group flex items-center justify-start text-primary p-3 cursor-pointer hover:bg-primary animation-500`}>
                    <FaFolderOpen className={`text-2xl group-hover:text-secondary animation-500`}/>
                    <span className={`font-medium uppercase ml-4 group-hover:text-secondary animation-500`}>Projects</span>
                </Link>
                <Link href={`/cv`} className={`group flex items-center justify-start text-primary p-3 cursor-pointer hover:bg-primary animation-500`}>
                    <BsFillPersonVcardFill className={`text-2xl group-hover:text-secondary animation-500`}/>
                    <span className={`font-medium uppercase ml-4 group-hover:text-secondary animation-500`}>CV Form</span>
                </Link>
            </nav>

            {/*mobile navbar*/}
            <div>
                <div onClick={handleNav} className={`z-[1000] md:hidden fixed bg-secondary text-primary top-[1%] left-[1%] rounded-full p-1 cursor-pointer`}>
                    <CgArrowsExchange className={`text-xl`}/>
                </div>
                <nav className={`z-[1000] md:hidden flex flex-col items-start bg-secondary rounded-xl fixed top-[1%] ${nav?'right-[1%]':'right-[-50%]'} animation-500`}>
                    <Link href={`/`} className={`w-full group flex items-center justify-start text-primary p-1 cursor-pointer hover:bg-primary animation-500 p-3`}>
                        <IoHome className={`text-2xl group-hover:text-secondary animation-500`}/>
                        <span className={`font-medium text-base uppercase group-hover:text-secondary`}>Home</span>
                    </Link>
                    <Link href={`/about`} className={`w-full group flex items-center justify-start text-primary p-1 cursor-pointer hover:bg-primary animation-500 p-3`}>
                        <BsFillInfoCircleFill className={`text-2xl group-hover:text-secondary animation-500`}/>
                        <span className={`font-medium text-base uppercase group-hover:text-secondary animation-500`}>About</span>
                    </Link>
                    <Link href={`/education`} className={`w-full group flex items-center justify-start text-primary p-1 cursor-pointer hover:bg-primary animation-500 p-3`}>
                        <FaUserGraduate className={`text-2xl group-hover:text-secondary animation-500`}/>
                        <span className={`font-medium text-base uppercase group-hover:text-secondary animation-500`}>Education</span>
                    </Link>
                    <Link href={`/projects`} className={`w-full group flex items-center justify-start text-primary p-1 cursor-pointer hover:bg-primary animation-500 p-3`}>
                        <FaFolderOpen className={`text-2xl group-hover:text-secondary animation-500`}/>
                        <span className={`font-medium text-base uppercase group-hover:text-secondary animation-500`}>Projects</span>
                    </Link>
                    <Link href={`/cv`} className={`w-full group flex items-center justify-start text-primary p-1 cursor-pointer hover:bg-primary animation-500 p-3`}>
                        <BsFillPersonVcardFill className={`text-2xl group-hover:text-secondary animation-500`}/>
                        <span className={`font-medium text-base uppercase group-hover:text-secondary animation-500`}>CV Form</span>
                    </Link>
                </nav>
            </div>
        </>
    );
};

export default Navbar;