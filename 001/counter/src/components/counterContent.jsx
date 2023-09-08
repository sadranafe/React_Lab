import { useState } from "react";

const CounterContent = ({price , src , title}) => {
    const [counter , setCounter] = useState(1)

    const btnReducerHandler = () => {
        setCounter(counter - 1)
    }

    const btnIncreaseHandler = () => {
        setCounter(counter + 1)
    }

    const inputChangeHandler = ev => {
        ev.target.value === "" ? setCounter(1) : setCounter(ev.target.value);
    }

    return (
        <>
            <div className = "w-80 overflow-hidden rounded-2xl m-5 mx-8">
                <div>
                    <img src = {src} alt = {src} className = "w-full h-[350px]" />
                </div>

                <div className = "bg-zinc-800 text-neutral-50 p-3">
                    <div className = "flex items-center flex-wrap justify-between">
                        <p>{title}</p>
                        <p className = "w-fit px-3 py-1 mt-2 rounded-lg bg-zinc-950">
                            <span className = {"inline-block"}>
                                <span>{ counter === 0 ? Number(price).toLocaleString() : Number(Number(price) * counter).toLocaleString()} $</span>
                            </span>
                        </p>
                    </div>

                    <hr  className = "w-full my-2 mt-3" />

                    <div  className = "flex flex-wrap items-center justify-between w-full">
                        <div className = "w-6/12 flex justify-center items-center">
                            <button  className = "text-2xl m-1 p-1 pb-0 disabled:text-slate-600 disabled:cursor-not-allowed" onClick = {btnReducerHandler} disabled = {counter <= 1 ? true : false}>
                                <i  className = "bx bx-left-arrow-circle"></i>
                            </button>

                            <input type = "number" className = "text-black text-lg border px-2 bg-slate-100 rounded-lg w-4/12 outline-none" onChange = {inputChangeHandler} value = {counter <= 5 && counter >= 1 ? counter : setCounter(Number(counter - 5))}/>

                            <button  className = "text-2xl m-1 p-1 pb-0 disabled:text-slate-600 disabled:cursor-not-allowed" disabled = {counter >= 5 ? true : false} onClick = {btnIncreaseHandler}>
                                <i  className = "bx bx-right-arrow-circle"></i>
                            </button>
                        </div>

                        <div>
                            <button className = "capitalize bg-blue-200 border-blue-200 text-black border hover:bg-transparent hover:text-blue-200 transition-all p-2 px-5 rounded-lg">buy</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CounterContent;