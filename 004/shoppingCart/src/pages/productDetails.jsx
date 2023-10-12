import { useEffect} from "react";
import { useNavigate , useLocation } from "react-router-dom";
import HighLightedProduct from "../components/highLightedProduct";

const ProductDetails = ({dummyData}) => {
    const navigate = useNavigate();
    const location = useLocation();
    const searchedProduct = location.pathname.split('/')[2]

    const highlightedProduct = dummyData[searchedProduct - 1]

    useEffect( () => {
        if(dummyData.length === 0 || highlightedProduct.length === 0){
            navigate('/products' , {replace : true})
        }
    },[dummyData , highlightedProduct])


    return (
        <>
            <div className = "w-full p-0 m-0 h-screen flex flex-wrap justify-center items-center">
                <HighLightedProduct title = {highlightedProduct.title} id = {highlightedProduct.id} description = {highlightedProduct.description} image = {highlightedProduct.images[0]} price = {highlightedProduct.price} rating = {highlightedProduct.rating}/>
            </div>
        </>
    );
};

export default ProductDetails;