import { useState } from 'react';

const RandomBg = () => {
    const [bgColor , setBgColor] = useState()

    
    const boxHandler = () => {
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        
        const randomBgColor = `rgb(${red} , ${green} , ${blue})`

        setBgColor(randomBgColor)
    }

    return (
        <>
            <div className = 'w-screen h-screen flex flex-wrap justify-center items-center select-none'>
                <div className = 'bg-slate-400 cursor-pointer flex flex-wrap justify-center items-center rounded-xl w-[300px] h-[300px]' style = {{backgroundColor: bgColor}} onClick = {boxHandler}>
                    <p className = 'p-2 rounded-lg bg-slate-200'>{bgColor}</p>
                </div>
            </div>
        </>
    );
};

export default RandomBg;