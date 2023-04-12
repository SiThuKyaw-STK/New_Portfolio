import React from 'react';
import {motion} from "framer-motion";
import projectImg1 from "/public/assets/projects/img.png";
import projectImg2 from "/public/assets/projects/img2.png";
import projectImg3 from "/public/assets/projects/img3.png";
import projectImg4 from "/public/assets/projects/img4.png";
import ProjectItem from "./ProjectItem";
import Image from "next/image";
import eduBg from "../../public/assets/hero.svg";

const ProjectsOfHero = () => {
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
    return (
        <motion.section variants={parentVariants} initial={`hidden`} animate={`visible`} id={``} className={``}>
            <div className="fixed -z-10 w-full h-full">
                <Image className={`w-full h-full`} src={eduBg} alt={`/`}/>
            </div>
            <div className={`md:py-[1rem] md:px-[5rem] p-[1rem]`}>
                <motion.h6 variants={childFadeInUp} className={`text-primary font-[500] text-center`}>Portfolio</motion.h6>
                <motion.h3 variants={childFadeInUp} className={`text-white font-bold text-center`}>
                    <span className={`underline underline-offset-[5px] decoration-primary`}>Latest</span>&nbsp;
                    Projects
                </motion.h3>
                <div className={`my-[5rem] md:p-10 grid gap-10`}>
                    <ProjectItem
                        sOrD={`Static`}
                        title={`Micky Veterinary Clinic`}
                        img={projectImg1}
                        bgColor={`bg-[#ACA7CB]`}
                        textColor={`text-[#ACA7CB]`}
                        hoverColor={`hover:bg-[#ACA7CB]`}
                        url={`https://micky-veterinary-clinic.netlify.app/`}/>
                    <ProjectItem
                        sOrD={`Static`}
                        title={`Zero One Mobile Shop`}
                        img={projectImg2}
                        bgColor={`bg-[#C8FCEA]`}
                        textColor={`text-[#C8FCEA]`}
                        hoverColor={`hover:bg-[#C8FCEA]`}
                        order={`lg:order-1`}
                        url={`https://zero-one-mobileshop.netlify.app/`}/>
                    <ProjectItem
                        sOrD={`Static`}
                        title={`Hotel Smile`}
                        img={projectImg3}
                        bgColor={`bg-[#C0C0C0]`}
                        textColor={`text-[#C0C0C0]`}
                        hoverColor={`hover:bg-[#C0C0C0]`}
                        url={`https://hotel-smile.netlify.app/`}/>
                    <ProjectItem
                        sOrD={`Dynamic (under maintenance)`}
                        title={`Education Media`}
                        img={projectImg4}
                        bgColor={`bg-[#00E5B0]`}
                        textColor={`text-[#00E5B0]`}
                        hoverColor={`hover:bg-[#00E5B0]`}
                        order={`lg:order-1`}/>

                </div>
            </div>
        </motion.section>
    );
};

export default ProjectsOfHero;