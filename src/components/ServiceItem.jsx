import React from 'react';
import Image from "next/image";
import {motion} from "framer-motion";

const ServiceItem = ({title, img}) => {
    const parentVariants={
        hidden:{
            opacity:0,
            y:100
        },
        visible:{
            opacity: 1,
            y:0,
            transition:{
                type:'spring',
                damping:15,
                when:'beforeChildren',
                staggerChildren:0.5,
            }
        }
    };
    const childFadeIn={
        hidden: {
            opacity:0.1
        },
        visible: {
            opacity:1
        }
    }
    return (
        <motion.div
            variants={parentVariants}
            initial={`hidden`}
            whileInView={`visible`}
            viewport={{once:true}}
            className={`service-item grid gap-10 justify-items-center hover:border-primary border-4 border-secondary rounded p-8 cursor-pointer relative animation-200`}>
            <motion.div variants={childFadeIn}>
                <Image src={img} alt={`/`}/>
            </motion.div>
            <motion.h4 variants={childFadeIn} className={`text-primary`}>{title}</motion.h4>
            <motion.p variants={childFadeIn} className={`text-white text-[20px] text-center`}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Deleniti est itaque provident quidem quos soluta?
            </motion.p>
        </motion.div>
    );
};

export default ServiceItem;