import { useState } from 'react';
const Square = ({index}) => {

    const [bgColor, setBgColor] = useState()
    const [isActive , setIsActive] = useState(false)
    
    const boxHandler = () => {
        setIsActive(true)
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
    
        const randomBgColor = `rgb(${red} , ${green} , ${blue})`
    
        setBgColor(randomBgColor)
    }
    
    return (
        <>
            <div className ='flex flex-wrap justify-center items-center select-none bg-neutral-700 m-2 cursor-pointer rounded-lg w-[100px] h-[100px]' style={{ backgroundColor: bgColor }} onClick={boxHandler}>
                {
                    isActive &&
                    <p>{index}</p>
                }
            </div>
        </>
    );
};

export default Square;