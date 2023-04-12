import React from 'react';

const HerringboneBg = () => {
    return (
        <svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'>
            <defs>
                <pattern id='a' patternUnits='userSpaceOnUse' width='52.9' height='58.33'
                         patternTransform='scale(2) rotate(0)'>
                    <rect x='0' y='0' width='100%' height='100%' fill='hsla(0, 0%, 12%, 1)'/>
                    <path
                        d='M52.4-4v66.33M-.17-4v66.33m53.24-11.89-13.2-3.25-13.23 3.25m26.43-28.48-13.2-3.25-13.23 3.25m26.43 30.93-13.2-3.25-13.23 3.25m13.22 9.44V-4m13.21 28.41-13.2-3.25-13.23 3.25M-.17 7.89l13.21 3.25 13.22-3.25M-.17 36.37l13.21 3.25 13.22-3.25M-.17 5.44l13.21 3.25 13.22-3.25M13.04-4v66.33M26.26-4v66.33M-.17 33.92l13.21 3.25 13.22-3.25'
                        stroke-width='1' stroke='hsla(217, 10%, 25%, 1)' fill='none'/>
                </pattern>
            </defs>
            <rect width='800%' height='800%' transform='translate(0,0)' fill='url(#a)'/>
        </svg>
    );
};

export default HerringboneBg;