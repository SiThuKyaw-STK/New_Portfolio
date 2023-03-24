import React from 'react';
import Image from "next/image";

const ServiceItem = ({title,img}) => {
    return (
        <div className={`grid gap-10 justify-items-center hover:border-solid border-dotted border-2 border-primary p-8 cursor-pointer`}>
            <Image src={img} alt={`/`}/>
            <h4 className={`text-primary`}>{title}</h4>
            <p className={`text-white text-[20px] text-center`}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Deleniti est itaque provident quidem quos soluta?
            </p>
        </div>
    );
};

export default ServiceItem;