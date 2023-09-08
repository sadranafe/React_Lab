import { useEffect, useState } from "react";
import axios from "axios";
import CounterContent from "./counterContent";
import Footer from "./footer/footer";

const CartCounter = () => {
    const [DUMMY_DATA , setDUMMY_DATA] = useState([])

    useEffect( () => {
        axios.get("https://fakestoreapi.com/products")
        .then(response => {
            setDUMMY_DATA(response.data)
        })
    },[])

    return (
        <>
            <div className = {DUMMY_DATA.length === 0 ? "w-full h-[77.9vh] flex flex-wrap bg-slate-700 justify-center items-center content-center p-5" : "w-full h-[4050px] flex flex-wrap bg-slate-700 justify-center items-center content-center p-5"}>
                {
                    DUMMY_DATA.length === 0 ?
                    <p className = "text-white text-5xl">
                        <i className = "bx bx-loader-alt bx-spin"></i>
                    </p>
                    :
                    DUMMY_DATA.map( item =>
                        <CounterContent key = {item.id} price = {item.price} src = {item.image} title = {item.title}/>
                    )
                }
            </div>

            <Footer/>
        </>
    );
};

export default CartCounter;