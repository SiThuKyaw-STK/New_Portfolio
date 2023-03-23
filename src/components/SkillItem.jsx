import React from 'react';
import Image from "next/image";
import HTML from "../../public/assets/skills/HTML.svg";

const SkillItem = ({title, img, pBar, grid}) => {
    return (
        <div className={`${grid} cursor-pointer`}>
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
                    <div className={`bg-primary p-1 text-xs font-medium leading-none relative rounded grid`}
                         style={{width: `${pBar}`}}>
                        <span
                            className={`text-white absolute top-[-30px] w-fit justify-self-end bg-primary p-1 rounded`}>{pBar}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkillItem;