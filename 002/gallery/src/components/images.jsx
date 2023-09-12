import { useState } from "react";
import Thumb from "./Thumb";
const DUMMY_DATA = [
    {
        title : 'model 1',
        src : './images/1.png',
    },{
        title : 'model 2',
        src : './images/2.png',
    },{
        title : 'model 3',
        src : './images/3.png',
    },{
        title : 'model 4',
        src : './images/4.png',
    },{
        title : "model 5",
        src : './images/5.png'
    }
]

const Images = () => {
    const [selectedImg , setSelectedImg] = useState(DUMMY_DATA[0].src)
    const [selectedImgTitle , setSelectedImgTitle] = useState(DUMMY_DATA[0].title)


    const selectedImgHandler = src => {                    
        setSelectedImg(src.src)
        setSelectedImgTitle(src.title)
    }

    return (
        <>
            <div className = "flex flex-wrap justify-center h-screen w-screen content-center">
                <h1 className = "text-5xl capitalize font-bold">gallery</h1>

                <div className = "w-full flex flex-wrap justify-center items-center my-10 mb-14">
                    <img src = {selectedImg} alt = {selectedImg} className = "w-96 h-72 rounded-lg" />

                    <div className = "w-full text-center -mb-5">
                        <p className = "text-xl">{selectedImgTitle}</p>
                    </div>
                </div>

                {
                    DUMMY_DATA.map( (img , index) => {
                        return (
                            <>
                                <Thumb key = {index} isActive = {selectedImg === img.src} img = {img} onSelectedImg = {selectedImgHandler} />
                            </>
                        )
                    })
                }
            </div>
        </>
    );
};

export default Images;