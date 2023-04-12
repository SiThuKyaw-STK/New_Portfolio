import React from 'react';
import Image from "next/image";
import {motion} from "framer-motion";

const ServiceItem = ({title, img}) => {
    const parentVariants={
        hidden:{
            opacity:0,
            x:'-200px'
        },
        visible:{
            opacity: 1,
            x:0,
            transition:{
                type:'spring',
                damping:10,
                stiffness:120,
                mass:0.5
            }
        }
    };
    return (
        <motion.div
            variants={parentVariants}
            initial={`hidden`}
            whileInView={`visible`}
            viewport={{once:true}}
            className={`service-item grid gap-10 justify-items-center hover:border-primary border-4 border-secondary rounded p-8 cursor-pointer relative animation-200`}>
            <div>
                <Image src={img} alt={`/`}/>
            </div>
            <h4 className={`text-primary text-center`}>{title}</h4>
            <p className={`text-white text-[20px] text-center`}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Deleniti est itaque provident quidem quos soluta?
            </p>
        </motion.div>
    );
};

export default ServiceItem;