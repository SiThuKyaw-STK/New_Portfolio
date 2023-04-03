import React, {useState} from 'react';
import {IoCloseSharp, IoHome, IoMenu} from "react-icons/io5";
import {BsFillInfoCircleFill, BsFillPersonVcardFill} from "react-icons/bs";
import {FaFolderOpen, FaUserGraduate} from "react-icons/fa";
import Link from "next/link";

const Navbar = () => {
    const [nav,setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    }
    return (
        <>
            <div>
                <div onClick={handleNav} className={`z-[1000] fixed bg-secondary text-primary top-[3%] right-[2%] rounded-full p-1 cursor-pointer`}>
                    {nav
                        ?<IoCloseSharp className={`text-3xl`}/>
                        :<IoMenu className={`text-3xl`}/>
                    }
                </div>
                <nav className={`z-[1000] flex flex-col items-start bg-secondary rounded-xl fixed top-[10%] ${nav?'right-[1%]':'right-[-50%]'} animation-500`}>
                    <Link href={`/`} className={`w-full group flex items-center justify-start text-primary p-1 cursor-pointer hover:bg-primary animation-500 p-3`}>
                        <IoHome className={`text-2xl group-hover:text-secondary animation-500`}/>
                        <span className={`font-medium ml-2 text-base uppercase group-hover:text-secondary`}>Home</span>
                    </Link>
                    <Link href={`/about`} className={`w-full group flex items-center justify-start text-primary p-1 cursor-pointer hover:bg-primary animation-500 p-3`}>
                        <BsFillInfoCircleFill className={`text-2xl group-hover:text-secondary animation-500`}/>
                        <span className={`font-medium ml-2 text-base uppercase group-hover:text-secondary animation-500`}>About</span>
                    </Link>
                    <Link href={`/education`} className={`w-full group flex items-center justify-start text-primary p-1 cursor-pointer hover:bg-primary animation-500 p-3`}>
                        <FaUserGraduate className={`text-2xl group-hover:text-secondary animation-500`}/>
                        <span className={`font-medium ml-2 text-base uppercase group-hover:text-secondary animation-500`}>Education</span>
                    </Link>
                    <Link href={`/projects`} className={`w-full group flex items-center justify-start text-primary p-1 cursor-pointer hover:bg-primary animation-500 p-3`}>
                        <FaFolderOpen className={`text-2xl group-hover:text-secondary animation-500`}/>
                        <span className={`font-medium ml-2 text-base uppercase group-hover:text-secondary animation-500`}>Projects</span>
                    </Link>
                    <Link href={`/cv`} className={`w-full group flex items-center justify-start text-primary p-1 cursor-pointer hover:bg-primary animation-500 p-3`}>
                        <BsFillPersonVcardFill className={`text-2xl group-hover:text-secondary animation-500`}/>
                        <span className={`font-medium ml-2 text-base uppercase group-hover:text-secondary animation-500`}>CV Form</span>
                    </Link>
                </nav>
            </div>
        </>
    );
};

export default Navbar;