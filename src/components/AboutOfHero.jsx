import React from 'react';
import Image from "next/image";
import aboutImg from "/public/assets/hero.svg"
import {BsFiletypePdf} from "react-icons/bs";
import {MdOutlineKeyboardDoubleArrowDown} from "react-icons/md";
import Link from "next/link";

const AboutOfHero = () => {
    return (
        <section className={`flex justify-center items-center `}>
            <div className="fixed -z-10 w-full h-full">
                <Image className={`w-full h-full`} src={aboutImg} alt={`/`}/>
            </div>
            <div className={`md:p-[4rem] px-[1rem] py-[3rem]`}>
                <div className={`grid lg:grid-cols-2 gap-10 border-dotted md:border-2 border-primary md:py-20 md:px-10`}>
                    <div className={`group relative cursor-pointer m-auto`}>
                        <div
                            className={`w-[260px] h-[335px] lg:w-[375px] lg:h-[450px] bg-[#d9d9d9] rounded-lg z-[1]`}></div>
                        <div
                            className={`group-hover:rotate-0 w-[260px] h-[335px] lg:w-[375px] lg:h-[450px] bg-primary rounded-lg z-[-1] absolute top-0 -rotate-6 animation-500`}></div>
                        <div
                            className={`group-hover:rotate-0 w-[260px] h-[335px] lg:w-[375px] lg:h-[450px] bg-secondary rounded-lg z-[-2] absolute top-0 -rotate-12 animation-500`}></div>
                    </div>
                    <div className={`lg:mr-20`}>
                        <h6 className={`text-primary font-[500]`}>Discover</h6>
                        <h3 className={`text-white font-bold`}>
                            <span className={`underline underline-offset-8 decoration-primary`}>About</span>&nbsp;Me
                        </h3>
                        <p className={`text-white font-light mt-3 text-justify`}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci consequatur delectus dolorem
                            eaque enim eos facilis ipsum, nam non odit omnis pariatur perferendis, quam quidem repellat
                            rerum,
                            sed? Earum est incidunt optio repellat totam vero.
                        </p>
                        <div className={`mt-5 flex items-center md:justify-start justify-center`}>
                            <Link href="/"
                                  className={`group mr-2 lg:hover:indent-8 indent-2 btn-black text-white inline-flex items-center justify-center relative animation-500`}>
                                <BsFiletypePdf
                                    className={`group-hover:btn-animation text-2xl h-full animation-500 lg:absolute left-3 top-0 lg:opacity-0`}/>
                                Download CV
                            </Link>
                            <Link href="/about/#services"
                                  className={`group lg:hover:indent-8 indent-2 btn-primary text-black inline-flex items-center justify-center relative animation-500`}>
                                <MdOutlineKeyboardDoubleArrowDown
                                    className={`hidden md:block group-hover:btn-animation text-2xl h-full animation-500 lg:absolute left-3 top-0 lg:opacity-0`}/>
                                What I Can Do?
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutOfHero;