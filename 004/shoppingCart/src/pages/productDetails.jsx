import { useEffect, useState } from "react";
import { useNavigate , useLocation } from "react-router-dom";
import HighLightedProduct from "../components/highLightedProduct";

const ProductDetails = ({dummyData , onCartHandler}) => {
    const navigate = useNavigate();
    const location = useLocation();
    const searchedProduct = location.pathname.split('/')[2]

    const CartData = data => {
        onCartHandler(prevState => {
            return([...prevState , data])
        })
    }

    const highlightedProduct = dummyData[searchedProduct - 1]

    useEffect( () => {
        if(dummyData.length === 0 || highlightedProduct.length === 0){
            navigate('/products' , {replace : true})
        }
    },[dummyData , highlightedProduct])


    return (
        <>
            <div className = "w-full p-0 m-0 h-screen flex flex-wrap justify-center items-center">
                <HighLightedProduct onCartHandler = {CartData} id = {highlightedProduct.id} title = {highlightedProduct.title} description = {highlightedProduct.description} image = {highlightedProduct.image} price = {highlightedProduct.price} rating = {highlightedProduct.rating}/>
            </div>
        </>
    );
};

export default ProductDetails;