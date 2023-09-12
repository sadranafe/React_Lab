import { useState } from "react";

const RandomScore = () => {
    const [score , setScore] = useState(0)
    const [scoreStatus , setScoreStatus] = useState('#d93c3c')

    const scoreHandler = () => {
        const randomScore = Math.floor(Math.random() * 100) + 1
        setScore(randomScore)

        if(randomScore < 60){
            setScoreStatus('#d93c3c')
        } else if (randomScore >= 60 && randomScore < 80){
            setScoreStatus("#ffff00")
        } else if (randomScore >= 80){
            setScoreStatus("#12ab48")
        }
    }

    return (
        <>
            <div className = 'w-screen h-screen flex flex-wrap justify-center items-center select-none'>
                <div className = 'bg-slate-400 cursor-pointer flex flex-wrap justify-center items-center rounded-xl w-[300px] h-[300px]' style={{backgroundColor : scoreStatus}} onClick = {scoreHandler}>
                    <p className = "">{score}</p>
                </div>
            </div>
        </>
    );
};

export default RandomScore;