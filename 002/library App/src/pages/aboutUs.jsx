import { useEffect } from 'react';
import AboutUsCart from '../components/aboutUsCart';

const AboutUs = () => {
    useEffect(() => {
        document.title = "درباره ما"
    },[])
    return (
        <>
            <div className = 'bg-fuch sia-100 mb-10' dir = 'rtl'>

                <div className = 'h-72 flex bg-rose-50 flex-wrap justify-center items-center content-center rounded-bl-full'>
                    <h1 className = 'max-[500px]:text-4xl text-7xl capitalize font-semibold'><span className = 'text-orange-600'>تماس</span> با ما</h1>
                    
                    <div className = 'sm:text-base text-sm w-full max-[430px]:bg-yel low-500 max-[430px]:w-9/12 text-center p-2 text-gray-600'>
                        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ،</p>
                        <p>روزنامه و مجله در ستون و سطرآنچنان که لازم است.</p>
                    </div>
                </div>

                <div className = 'flex flex-wrap justify-center items-center pt-10'>
                    <AboutUsCart title = "(+98) 0912 123 456" icon = "bx bx-message-square-dots"/>
                    <AboutUsCart title = "sadranafe7@gmail.com" icon = "bx bx-envelope"/>
                    <AboutUsCart title = "ایران ، تهران" icon = "bx bx-location-plus"/>
                </div>
            </div>
        </>
    );
};

export default AboutUs;