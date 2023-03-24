import React from 'react';
import Image from "next/image";
import webDesignImg from "/public/assets/services/WebDesign.svg";
import frontendImg from "/public/assets/services/Frontend.svg";
import backendImg from "/public/assets/services/Backend.svg";
import apiImg from "/public/assets/services/API.svg";
import responsiveImg from "/public/assets/services/Responsive.svg"
import desiToCodeImg from "/public/assets/services/DesignToCode.svg"

import ServiceItem from "./ServiceItem";

const Services = () => {
    return (
        <section id={`services`} className={`md:py-[1rem] md:px-[2rem] px-[1rem]`}>
            <h6 className={`text-primary font-[500] text-center`}>What I Do</h6>
            <h3 className={`text-white font-bold text-center`}>
                <span className={`underline underline-offset-[15px] decoration-primary`}>My</span>&nbsp;
                Services
            </h3>
            <div className={`lg:grid lg:grid-cols-3 gap-5 flex flex-col my-[5rem] md:p-10`}>
                <ServiceItem title={`Web Design`} img={webDesignImg}/>
                <ServiceItem title={`Frontend`} img={frontendImg}/>
                <ServiceItem title={`Backend`} img={backendImg}/>
                <ServiceItem title={`API Development`} img={apiImg}/>
                <ServiceItem title={`Responsive Design`} img={responsiveImg}/>
                <ServiceItem title={`Design To Code`} img={desiToCodeImg}/>
            </div>
        </section>
    );
};

export default Services;