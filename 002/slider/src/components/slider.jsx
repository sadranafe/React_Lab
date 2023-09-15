import { useState } from "react";
import imgSlider from "./DUMMY_DATA";

const Slider = () => {
    const [currentIndex , setCurrentIndex] = useState(0)

    const prevSlideHandler = () => {
        const isfirstSlide = currentIndex === 0;
        const newIndex = isfirstSlide ? imgSlider.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex)
    }
    
    const nextSlideHandler = () => {
        const isLastIndex = currentIndex === imgSlider.length - 1;
        const newIndex = isLastIndex ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }

    const paginationHandler = imgIndex => {
        setCurrentIndex(imgIndex)
    }

    return (
        <>
            <div className = "w-96 h-96 rounded-xl overflow-hidden relative bg-rose-300 group">
                <img src = {imgSlider[currentIndex].imgUrl} alt = "mohammad sadra nafe" className = "w-full h-full object-cover object-top" />

                {/* left Arrow */}
                <button className = "absolute top-1/2 -translate-y-1/2 left-0 p-1 text-3xl text-black/70 group-hover:opacity-100 group-hover:visible invisible opacity-0 transition-all h-full" onClick = {prevSlideHandler}>
                    <i className = "bx bx-chevron-left"></i>
                </button>
                
                {/* right Arrow */}
                <button className = "absolute top-1/2 -translate-y-1/2 right-0 p-1 text-3xl text-black/70 group-hover:opacity-100 group-hover:visible invisible opacity-0 transition-all h-full" onClick = {nextSlideHandler}>
                    <i className = 'bx bx-chevron-right'></i>
                </button>

            </div>

            {/* pagination */}
            <div className = "flex flex-wrap justify-center items-center w-full mt-10">
                {
                    imgSlider.map(item =>
                        <button key = {item.imgIndex} className = {item.imgIndex === currentIndex ? "w-2 h-2 rounded-full m-2 p-1.5 bg-black outline-none" : "outline-none w-2 h-2 rounded-full m-2 p-1.5 bg-blue-300"} onClick = {() => paginationHandler(item.imgIndex)}></button>
                    )
                }
            </div>
        </>
    );
};

export default Slider;