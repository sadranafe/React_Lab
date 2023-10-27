import { useEffect, useState } from "react";
import TopRatedProductItem from "./topRatedProductItem";
import SkeletonLoader from "../../skeletonLoader";

const TopRatedProducts = ({ data }) => {
    const [isLoading, setIsloading] = useState(true);

    useEffect(() => {
        data.length !== 0 ? setIsloading(false) : setIsloading(true);
    },[data])


    return (
        <div className = "flex flex-wrap justify-center items-center mb-20">
            <div className = "py-5 mb-5">
                <h1 className = "text-3xl capitalize">top rated products 🔥</h1>
            </div>

            <div className = "w-full flex flex-wrap justify-center items-center">
                {
                    isLoading ?
                        <SkeletonLoader length = {5}/>:
                    data.map(item => {
                        return (
                            <TopRatedProductItem key = {item.id} id = {item.id} img = {item.image} rating = {item.rating} />
                        )}
                    )
                }
            </div>
        </div>
    );
};

export default TopRatedProducts;