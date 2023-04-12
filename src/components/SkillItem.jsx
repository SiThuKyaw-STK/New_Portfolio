import React from 'react';
import Image from "next/image";
import {motion} from "framer-motion";

const SkillItem = ({title, img, pBar, grid}) => {
    const parentVariants={
        hidden:{
            opacity:0,
            y:'100px'
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
    const childVariants={
        hidden: {
            opacity:0,
            x:'-100px',
        },
        visible: {
            opacity:1,
            x:0,
            transition: {
                type: 'spring',
                damping: 20,
            }
        }
    }
    return (
        <motion.div className={`${grid} cursor-pointer`}
                    variants={parentVariants}
                    initial={`hidden`}
                    whileInView={`visible`}
                    viewport={{ once: true }}>
            <h4 className={`text-[25px] leading-[29px] font-[600] text-primary mb-3`}>{title}</h4>
            <div
                className={`border-2 border-primary p-5 rounded-lg flex items-center h-[100px] 
                lg:shadow-none 
                shadow-[0px_5px_15px_-5px_rgba(0,173,181,1)] 
                hover:shadow-[0px_5px_15px_-5px_rgba(0,173,181,1)] animation-200`}>
                <div>
                    <Image src={img} alt={`/`}/>
                </div>
                <div className={`bg-white w-full rounded`}>
                    <motion.div variants={childVariants} className={`bg-primary p-1 text-xs font-medium leading-none relative rounded grid`}
                         style={{width: `${pBar}`}}>
                        <span
                            className={`text-white absolute top-[-30px] w-fit justify-self-end bg-primary p-1 rounded`}>{pBar}</span>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default SkillItem;