import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Pagination } from "swiper/modules";
import { Swiper , SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import CardInfoItem from "../components/cardInfoItem";
import DummyCardInfo from "../dummy_data/dummyCardInfo";
import DummyReviews from "../dummy_data/dummyReviews";
import ReviewItems from "../components/review/reviewItems";
import axios from "axios";
import TopRatedProducts from "../components/topRatedProduct/topRatedProducts";

const Home = () => {
    const [topRatedProducts , setTopRatedProducts] = useState([]);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
        .then( res => setTopRatedProducts( res.data.filter(item => {
            return item.rating.rate > 4.5
        } )) )
    },[])

    return (
        <>
            <div className = "bg-neutral-50 py-5">

                <div className = "flex flex-wrap justify-center items-center">
                    <div className = "w-6/12 flex flex-wrap justify-center items-center">
                        <div className = "-translate-x-9">
                            <h1 className = "text-5xl uppercase font-extrabold">buy your <br/> best products <br/> at <span className = "text-yellow-400">home</span></h1>
                        </div>

                        <div className = "w-8/12 text-justify my-5">
                            <p className = "text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit a iste nobis et sed totam nesciunt, quos culpa corrupti inventore quam beatae tenetur dicta fugiat.</p>
                        </div>

                        <div className = "w-full pt-5 text-center">
                            <Link to = '/products' className = "p-3 px-4 rounded-xl bg-yellow-300">order now</Link>
                        </div>
                    </div>

                    <div className = "bg-[url(shoppingvector.png)] w-6/12 h-96 p-32 bg-cover object-cover bg-center bg-no-repeat"></div>
                </div>
            
                <div className = "flex flex-wrap justify-center items-center mb-20 mt-10">
                    {
                        DummyCardInfo.map( (item , index) =>
                            <CardInfoItem key = {index} icon = {item.icon} title = {item.title} description = {item.description}/>
                        )
                    }
                </div>

                <TopRatedProducts data = {topRatedProducts}/>

                <div className = "flex flex-wrap justify-center items-center pt-5 mt-10">
                    <div>
                        <h1 className = "text-3xl capitalize">reviews</h1>
                    </div>

                    <div className = "w-full flex flex-wrap justify-center items-center">

                        <Swiper className = "px-20 py-10" spaceBetween = {100} slidesPerView = {2} draggable grabCursor = {true} modules = {[ Pagination ]} pagination = {{clickable : true , dynamicBullets :true}}>
                            {
                                DummyReviews.map( item =>
                                    <SwiperSlide key = {item.id} className = "px-10 py-5 h-[320px]">
                                        <ReviewItems img = {item.img} description = {item.description} name = {item.name}  position = {item.position} />
                                    </SwiperSlide>
                                )
                            }
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;