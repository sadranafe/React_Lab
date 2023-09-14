import { useEffect } from 'react';
import DUMMY_THUMB_CAT from "../components/DUMMY_THUMB_CAT"
import ThumbCat from '../components/thumbCat';


const Home = () => {    
    useEffect(() => {
        document.title = "ACME"
    },[])
    
    return (
        <>
            <div className = 'pb-10 px-5 pt-10 bg-fuchsia-50 text-center select-none' dir = 'rtl'>
                <div className = 'lib_bg_content h-[500px] flex flex-wrap justify-center items-center rounded-full'>
                    <h1 className = 'text-5xl text-white capitalize'>کتابتو راحت پیدا کن </h1>
                </div>

                <div className = 'flex flex-wrap justify-center items-center mt-20'>
                    <div className = 'text-center w-full'>
                        <h2 className = 'text-2xl'>دسته بندی ها</h2>
                    </div>

                    <div className = 'flex flex-wrap justify-center items-center mt-5'>
                        {
                            DUMMY_THUMB_CAT.map( item => 
                                <ThumbCat key = {item.id} img = {item.img_Src} title = {item.title} e_title = {item.e_title} />   
                            )
                        }
                    </div>

                </div>
            </div>
        </>
    );
};

export default Home;