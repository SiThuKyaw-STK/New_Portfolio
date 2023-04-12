import React from 'react';
import Image from "next/image";
import {motion} from "framer-motion";
import projectImg1 from "../../public/assets/projects/img.png";
import {BsArrowRight} from "react-icons/bs";
import Link from "next/link";

const ProjectItem = ({sOrD,title,img,bgColor,textColor,hoverColor,order,url}) => {
    const parentVariants={
        hidden:{
            opacity:0,
            x:-300
        },
        visible:{
            opacity: 1,
            x:0,
            transition:{
                type:'spring',
                damping:15,
                mass:0.5
            }
        }
    };
    return (
        <motion.div variants={parentVariants} initial={`hidden`} whileInView={`visible`} viewport={{once:true}} className={`lg:grid lg:grid-cols-3 gap-5 items-end flex flex-col`}>
            <div className={`${bgColor} rounded m-auto ${order}`}>
                <Image src={img} alt={``}/>
            </div>
            <div className={`col-span-2`}>
                <h6 className={`text-primary`}>{sOrD}</h6>
                <h4 className={`${textColor}`}>{title}</h4>
                <p className={`text-white text-justify mt-3`}>Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit.
                    Accusamus asperiores, aspernatur
                    deserunt iste sequi totam.</p>
                <Link href={`${url}`} target="_blank"
                   className={`group ${hoverColor} hover:text-black btn-ghost inline-flex items-center justify-center relative animation-500 mt-5 cursor-pointer`}>
                    View Demo
                    <BsArrowRight
                        className={`group-hover:btn-animation text-black h-full animation-500 absolute -right-0 group-hover:right-3 top-0 lg:opacity-0`}/>
                </Link>
            </div>
        </motion.div>
    );
};

export default ProjectItem;