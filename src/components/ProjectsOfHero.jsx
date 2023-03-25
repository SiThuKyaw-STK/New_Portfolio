import React from 'react';
import projectImg1 from "/public/assets/projects/img.png";
import projectImg2 from "/public/assets/projects/img2.png";
import projectImg3 from "/public/assets/projects/img3.png";
import ProjectItem from "./ProjectItem";

const ProjectsOfHero = () => {
    return (
        <section id={``} className={`md:py-[1rem] md:px-[2rem] px-[1rem]`}>
            <h6 className={`text-primary font-[500] text-center`}>Portfolio</h6>
            <h3 className={`text-white font-bold text-center`}>
                <span className={`underline underline-offset-[5px] decoration-primary`}>Latest</span>&nbsp;
                Projects
            </h3>
            <div className={`my-[5rem] md:p-10 grid gap-10`}>
                <ProjectItem
                    sOrD={`Frontend`}
                    title={`Micky Veterinary Clinic`}
                    img={projectImg1}
                    bgColor={`bg-[#ACA7CB]`}
                    textColor={`text-[#ACA7CB]`}
                    hoverColor={`hover:bg-[#ACA7CB]`}/>
                <ProjectItem
                    sOrD={`Frontend`}
                    title={`Zero One Mobile Shop`}
                    img={projectImg2}
                    bgColor={`bg-[#C8FCEA]`}
                    textColor={`text-[#C8FCEA]`}
                    hoverColor={`hover:bg-[#C8FCEA]`}
                    order={`lg:order-1`}/>
                <ProjectItem
                    sOrD={`Frontend`}
                    title={`Hotel Smile`}
                    img={projectImg3}
                    bgColor={`bg-[#C0C0C0]`}
                    textColor={`text-[#C0C0C0]`}
                    hoverColor={`hover:bg-[#C0C0C0]`}/>

            </div>
        </section>
    );
};

export default ProjectsOfHero;