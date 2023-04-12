import React from 'react';
import {motion} from "framer-motion";
import {TbCodeCircle2} from "react-icons/tb";
import Image from "next/image";
import eduBg from "../../public/assets/hero.svg";

const EducationOfHero = () => {
    const parentVariants={
        hidden:{
        },
        visible:{
            transition:{
                type:'spring',
                when:'beforeChildren',
                staggerChildren:0.5,
            }
        }
    };
    const childFadeIn={
        hidden:{
            opacity:0,
        },
        visible:{
            opacity:1,
            transition:{
                type:'spring',
                duration:1
            }
        }
    }
    const childFadeInUp = {
        hidden: {
            opacity: 0,
            y: 200
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                damping: 8,
                mass: 0.1,
            },

        }
    };
    const childFadeInLeft={
        hidden:{
            opacity:0,
            x:-100
        },
        visible:{
            opacity:1,
            x:0,
            type:'spring',
            damping: 15,
            mass: 0.5
        }
    };
    const childFadeInRight={
        hidden:{
            opacity:0,
            x:100
        },
        visible:{
            opacity:1,
            x:0,
            type:'spring',
            damping: 15,
            mass: 0.5
        }
    };
    const childFadeInDown={
        hidden:{
            opacity:0,
            y:-100
        },
        visible:{
            opacity:1,
            y:0,
            type:'spring',
            damping: 15,
            mass: 0.5
        }
    };
    return (
        <motion.section id={``} className={``}
                                variants={parentVariants}
                                initial={`hidden`}
                                animate={`visible`}>
            <div className="fixed -z-10 w-full h-full">
                <Image className={`w-full h-full`} src={eduBg} alt={`/`}/>
            </div>
            <div className={`md:py-[1rem] md:px-[5rem] p-[1rem]`}>
                <motion.h6 variants={childFadeInUp} className={`text-primary font-[500] text-center`}>My Education</motion.h6>
                <motion.h3 variants={childFadeInUp} className={`text-white font-bold text-center`}>
                    <span className={`underline underline-offset-[5px] decoration-primary`}>Jou</span>rney
                </motion.h3>
                <div className="container mx-auto w-full h-full">
                    <div className="relative wrap overflow-hidden lg:p-10 md:p-5 p-10 h-full">
                        <motion.div variants={childFadeIn} className="border-2-2 absolute border-primary h-full border md:left-[50%] left-5"></motion.div>
                        {/*Education Item1*/}
                        <div className="mb-8 md:flex justify-center items-center w-full relative">
                            <motion.div variants={childFadeInLeft} className="order-1 bg-gray-400 rounded-lg lg:w-5/12 md:w-6/12 lg:px-6 md:px-3 py-4 md:text-end">
                                <h6 className="mb-1 font-bold text-primary leading-none">Basic Education</h6>
                                <p className="md:text-xs text-[11px] tracking-wide text-white/80 leading-none">
                                    2016-2017 | Kaung Su San (Private High School)
                                </p>
                            </motion.div>
                            <motion.div variants={childFadeInDown} className="z-20 flex items-center order-1 bg-primary shadow-xl w-8 h-8 rounded-full absolute md:static top-[10px] left-[-35px]">
                                <h1 className="mx-auto text-2xl text-black">
                                    <TbCodeCircle2/>
                                </h1>
                            </motion.div>
                            <motion.div variants={childFadeInRight} className="order-1 bg-gray-400 rounded-lg lg:w-5/12 md:w-6/12 lg:px-6 md:px-3 py-4 text-justify">
                                <p className="text-sm leading-snug tracking-wide text-white/80 text-opacity-100">Lorem Ipsum
                                    is
                                    simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                    industrys standard dummy text ever since the 1500s, when an unknown printer took a
                                    galley of type and scrambled it to make a type specimen book.</p>
                            </motion.div>
                        </div>
                        {/*Education Item2*/}
                        <div className="mb-8 md:flex flex-row-reverse justify-center items-center w-full relative">
                            <motion.div variants={childFadeInRight} className="order-1 bg-gray-400 rounded-lg lg:w-5/12 md:w-6/12 lg:px-6 md:px-3 py-4">
                                <h6 className="mb-1 font-bold text-primary leading-none">Basic Education</h6>
                                <p className="md:text-xs text-[11px] tracking-wide text-white/80 leading-none">
                                    2016-2017 | Kaung Su San (Private High School)
                                </p>
                            </motion.div>
                            <motion.div variants={childFadeInDown} className="z-20 flex items-center order-1 bg-primary shadow-xl w-8 h-8 rounded-full absolute md:static top-[10px] left-[-35px]">
                                <h1 className="mx-auto text-2xl text-black">
                                    <TbCodeCircle2/>
                                </h1>
                            </motion.div>
                            <motion.div variants={childFadeInLeft} className="order-1 bg-gray-400 rounded-lg lg:w-5/12 md:w-6/12 lg:px-6 md:px-3 py-4 text-justify">
                                <p className="text-sm leading-snug tracking-wide text-white/80 text-opacity-100">Lorem Ipsum
                                    is
                                    simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                    industry &apos s standard dummy text ever since the 1500s, when an unknown printer took a
                                    galley of type and scrambled it to make a type specimen book.</p>
                            </motion.div>
                        </div>
                        {/*Education Item3*/}
                        <div className="mb-8 md:flex justify-center items-center w-full relative">
                            <motion.div variants={childFadeInLeft} className="order-1 bg-gray-400 rounded-lg lg:w-5/12 md:w-6/12 lg:px-6 md:px-3 py-4 md:text-end">
                                <h6 className="mb-1 font-bold text-primary leading-none">Basic Education</h6>
                                <p className="md:text-xs text-[11px] tracking-wide text-white/80 leading-none">
                                    2016-2017 | Kaung Su San (Private High School)
                                </p>
                            </motion.div>
                            <motion.div variants={childFadeInDown} className="z-20 flex items-center order-1 bg-primary shadow-xl w-8 h-8 rounded-full absolute md:static top-[10px] left-[-35px]">
                                <h1 className="mx-auto text-2xl text-black">
                                    <TbCodeCircle2/>
                                </h1>
                            </motion.div>
                            <motion.div variants={childFadeInRight} className="order-1 bg-gray-400 rounded-lg lg:w-5/12 md:w-6/12 lg:px-6 md:px-3 py-4 text-justify">
                                <p className="text-sm leading-snug tracking-wide text-white/80 text-opacity-100">Lorem Ipsum
                                    is
                                    simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                    industry&aposs standard dummy text ever since the 1500s, when an unknown printer took a
                                    galley of type and scrambled it to make a type specimen book.</p>
                            </motion.div>
                        </div>
                        {/*Education Item4*/}
                        <div className="mb-8 md:flex flex-row-reverse justify-center items-center w-full relative">
                            <motion.div variants={childFadeInRight} className="order-1 bg-gray-400 rounded-lg lg:w-5/12 md:w-6/12 lg:px-6 md:px-3 py-4 ">
                                <h6 className="mb-1 font-bold text-primary leading-none">Basic Education</h6>
                                <p className="md:text-xs text-[11px] tracking-wide text-white/80 leading-none">
                                    2016-2017 | Kaung Su San (Private High School)
                                </p>
                            </motion.div>
                            <motion.div variants={childFadeInDown} className="z-20 flex items-center order-1 bg-primary shadow-xl w-8 h-8 rounded-full absolute md:static top-[10px] left-[-35px]">
                                <h1 className="mx-auto text-2xl text-black">
                                    <TbCodeCircle2/>
                                </h1>
                            </motion.div>
                            <motion.div variants={childFadeInLeft} className="order-1 bg-gray-400 rounded-lg lg:w-5/12 md:w-6/12 lg:px-6 md:px-3 py-4 text-justify">
                                <p className="text-sm leading-snug tracking-wide text-white/80 text-opacity-100">Lorem Ipsum
                                    is
                                    simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                    industry&aposs standard dummy text ever since the 1500s, when an unknown printer took a
                                    galley of type and scrambled it to make a type specimen book.</p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default EducationOfHero;