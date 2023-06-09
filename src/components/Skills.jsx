import React from 'react';
import {motion} from "framer-motion";
import HTML from '../../public/assets/skills/HTML.svg'
import CSS from '../../public/assets/skills/CSS.svg'
import JS from '../../public/assets/skills/JS.svg'
import REACTJS from '../../public/assets/skills/ReactJs.svg'
import NEXTJS from '../../public/assets/skills/NextJs.svg'
import TAILWIND from '../../public/assets/skills/TailWindCss.svg'
import BOOTSTRAP from '../../public/assets/skills/BootStrpa.svg'
import FIGMA from '../../public/assets/skills/Figma.svg'
import RESTAPI from '../../public/assets/skills/RestAPI.svg'
import PHP from '../../public/assets/skills/PHP.svg'
import LARAVEL from '../../public/assets/skills/Laravel.svg'
import GITHUB from '../../public/assets/skills/GitHub.svg'
import DATABASE from '../../public/assets/skills/Database.svg'
import SkillItem from "./SkillItem";

const Skills = () => {
    const fadeInUp = {
        hidden:{
            opacity:0,
            y:200
        },
        visible:{
            opacity: 1,
            y:0,
            transition:{
                type:'spring',
                damping:15,
                mass:0.5
            },

        }
    }
    return (
        <section id={`skills`} className={`bg-black`}>
            <div className={`md:py-[1rem] md:px-[5rem] p-[1rem]`}>
                <motion.h6 className={`text-primary font-[500] text-center`}
                            variants={fadeInUp}
                            initial={`hidden`}
                            whileInView={`visible`}
                            viewport={{once:true}}>Here is</motion.h6>
                <motion.h3 className={`text-white font-bold text-center`}
                           variants={fadeInUp}
                           initial={`hidden`}
                           whileInView={`visible`} viewport={{once:true}}>
                    <span className={`underline underline-offset-[15px] decoration-primary`}>My</span>&nbsp;
                    Skills
                </motion.h3>
                <div
                    className={`md:grid md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-y-15 flex flex-col my-[5rem] border-dotted border-2 border-primary p-10`}>
                    <SkillItem title={`HTML`} img={HTML} pBar={`80%`}/>
                    <SkillItem title={`CSS`} img={CSS} pBar={`80%`}/>
                    <SkillItem title={`JS`} img={JS} pBar={`65%`}/>
                    <SkillItem title={`REACT JS`} img={REACTJS} pBar={`55%`}/>
                    <SkillItem title={`NEXT JS`} img={NEXTJS} pBar={`50%`}/>
                    <SkillItem title={`TAILWIND CSS`} img={TAILWIND} pBar={`65%`}/>
                    <SkillItem title={`BOOTSTRAP`} img={BOOTSTRAP} pBar={`65%`}/>
                    <SkillItem title={`FIGMA`} img={FIGMA} pBar={`50%`}/>
                    <SkillItem title={`REST API`} img={RESTAPI} pBar={`65%`}/>
                    <SkillItem title={`PHP`} img={PHP} pBar={`70%`}/>
                    <SkillItem title={`LARAVEL`} img={LARAVEL} pBar={`60%`}/>
                    <SkillItem title={`GIT HUB`} img={GITHUB} pBar={`60%`}/>
                    <SkillItem title={`MARIA DB`} img={DATABASE} pBar={`60%`} grid={`lg:col-start-2`}/>
                </div>
            </div>
        </section>
    );
};

export default Skills;