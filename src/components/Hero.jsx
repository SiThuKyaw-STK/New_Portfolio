import React from 'react';
import homeImg from '/public/assets/hero.svg';
import testUser from '/public/assets/user.jpg';
import Image from "next/image";
import {BsFiletypePdf} from "react-icons/bs";
import {GiRotaryPhone} from "react-icons/gi";
import {motion} from "framer-motion";
import Link from "next/link";

const Hero = () => {
    const parentVariants={
        hidden:{
        },
        visible:{
            transition:{
                type:'spring',
                when:'beforeChildren',
                staggerChildren:1,
            }
        }
    };
    const childFadeInDown={
        hidden: {
            opacity:0,
            y:'-100px'
        },
        visible: {
            opacity:1,
            y:0,
            transition:{
                type:'spring',
                mass:0.5,
                damping:8,
                stiffness: 120
            }
        }
    };
    const childFade = {
        hidden: {
            opacity:0,
        },
        visible: {
            opacity:1,
            transition:{
                type:'spring',
                mass:0.5,
            }
        }
    }
    return (
        <motion.section className={`h-screen flex justify-center items-center`}
                        variants={parentVariants}
                        initial={`hidden`}
                        animate={`visible`}>
            <div className="fixed -z-10 w-full h-full">
                <Image className={`w-full h-full`} src={homeImg} alt={`/`}/>
            </div>
            <div className={`flex flex-col justify-center items-center p-[1rem]`}>
                <Image className={`w-[178px] h-[178px] rounded-full`} src={testUser} alt={`/`}/>
                <motion.h1 variants={childFadeInDown} className={`text-white mt-10`}>{"Hi I'm"}<span
                    className={`text-primary`}> Si Thu Kyaw</span></motion.h1>
                <motion.h2 variants={childFadeInDown} className={`text-primary font-extralight`}>Web Developer</motion.h2>
                <motion.p variants={childFadeInDown} className={`md:w-[700px] text-white/80 font-light md:text-center text-justify mt-3`}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci consequatur delectus dolorem
                    eaque enim eos facilis ipsum, nam non odit omnis pariatur perferendis, quam quidem repellat rerum,
                    sed? Earum est incidunt optio repellat totam vero.
                </motion.p>
                <motion.div variants={childFade} className={`mt-5 flex items-center justify-center`}>
                    <Link href="/"
                       className={`group mr-2 lg:hover:indent-8 indent-2 btn-black text-white inline-flex items-center justify-center relative animation-500`}>
                        <BsFiletypePdf
                            className={`group-hover:btn-animation text-2xl h-full animation-500 lg:absolute left-3 top-0 lg:opacity-0`}/>
                        Download CV
                    </Link>
                    <Link href="/"
                       className={`group lg:hover:indent-8 indent-2 btn-primary text-black inline-flex items-center justify-center relative animation-500`}>
                        <GiRotaryPhone
                            className={`group-hover:btn-animation text-2xl h-full animation-500 lg:absolute left-3 top-0 lg:opacity-0`}/>
                        Contact Me
                    </Link>
                </motion.div>
                <motion.a href={`/#skills`} className="scroll-down"
                                            initial={{opacity:0,y:'100px'}}
                                            animate={{opacity:1,y:0}}
                                            transition={{
                                                type:'spring',
                                                delay:2.5,
                                                damping: 10,
                                                mass: 0.75,
                                                stiffness: 120,}}>
                    <span className={`mt-5`}></span>
                    <span></span>
                    <span></span>
                </motion.a>
            </div>
        </motion.section>
    );
};

export default Hero;