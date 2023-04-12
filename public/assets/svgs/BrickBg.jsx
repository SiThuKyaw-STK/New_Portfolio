import React from 'react';

const BrickBg = () => {
    return (
        <svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'>
            <defs>
                <pattern id='a' patternUnits='userSpaceOnUse' width='30' height='30'
                         patternTransform='scale(1) rotate(0)'>
                    <rect x='0' y='0' width='100%' height='100%' fill='hsla(0, 0%, 12%, 1)'/>
                    <path d='M0 22.5h30v15H0zm15-15h30v15H15m-30-15h30v15h-30zm15-15h30v15H0z'
                          strokeWidth='1.5' stroke='hsla(217, 10%, 25%, 1)' fill='none'/>
                </pattern>
            </defs>
            <rect width='800%' height='800%' transform='translate(-60,-60)' fill='url(#a)'/>
        </svg>
    );
};

export default BrickBg;