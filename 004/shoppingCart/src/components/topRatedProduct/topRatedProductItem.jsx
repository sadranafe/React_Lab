import { Link } from "react-router-dom";
import { Rating } from "@mui/material";

const TopRatedProductItem = ({ id , img , rating }) => {
    return (
        <>
            <Link to = {`/products/${id}`} className = {`topRatedProduct group flex flex-wrap w-2/12 shadow-xl shadow-gray-200 h-60 rounded-xl overflow-hidden m-3 justify-center items-center relative after:w-full after:h-full after:bg-black after:absolute after:top-0 after:opacity-0 hover:after:opacity-60`}>
                <img src = {img} alt = "test" className  = 'w-full h-full'/>

                <div className = "absolute z-50 opacity-0 text-white text-lg group-hover:opacity-100 transition-all flex flex-wrap justify-center items-center">
                    <p>
                        rate : {rating.rate}
                    </p>

                    <p className = "w-full text-center">
                        <Rating name = 'read-only' defaultValue = {rating.rate} precision = {0.1} readOnly/>
                    </p>
                </div>
            </Link>
        </>
    );
};

export default TopRatedProductItem;