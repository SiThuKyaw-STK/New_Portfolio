import React from 'react';
import homeImg from '/public/assets/hero.png';
import testUser from '/public/assets/user.jpg';
import Image from "next/image";
import {BsFiletypePdf} from "react-icons/bs";
import {GiRotaryPhone} from "react-icons/gi";

const Hero = () => {
    return (
        <section className={`h-screen flex justify-center items-center`}>
            <div className="absolute -z-10 w-full h-full">
                <Image className={`w-full h-full`} src={homeImg} alt={`/`}/>
            </div>
            <div className={`flex flex-col justify-center items-center p-[1rem]`}>
                <Image className={`w-[178px] h-[178px] rounded-full`} src={testUser} alt={`/`}/>
                <h1 className={`text-white mt-10`}>Hi I'm <span
                    className={`text-primary`}>Si Thu Kyaw</span></h1>
                <h2 className={`text-primary font-extralight`}>Web Developer</h2>
                <p className={`md:w-[700px] text-white/80 font-light md:text-center text-justify mt-3`}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci consequatur delectus dolorem
                    eaque enim eos facilis ipsum, nam non odit omnis pariatur perferendis, quam quidem repellat rerum,
                    sed? Earum est incidunt optio repellat totam vero.
                </p>
                <div className={`mt-5 flex items-center justify-center`}>
                    <a href="/"
                       className={`group mr-2 md:hover:indent-8 indent-2 btn-black text-white inline-flex items-center justify-center relative animation-500`}>
                        <BsFiletypePdf
                            className={`group-hover:btn-animation text-2xl h-full animation-500 md:absolute left-3 top-0 md:opacity-0`}/>
                        Download CV
                    </a>
                    <a href="/"
                       className={`group md:hover:indent-8 indent-2 btn-primary text-black inline-flex items-center justify-center relative animation-500`}>
                        <GiRotaryPhone
                            className={`group-hover:btn-animation text-2xl h-full animation-500 md:absolute left-3 top-0 md:opacity-0`}/>
                        Contact Me
                    </a>
                </div>
                <a href={`/#skills`} className="scroll-down">
                    <span className={`mt-5`}></span>
                    <span></span>
                    <span></span>
                </a>
            </div>
        </section>
    );
};

export default Hero;