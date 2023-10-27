import { useContext , useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../contexts/cartContext';
import { Rating } from '@mui/material';
import styled from 'styled-components';

const Image = styled.img.attrs( ({ src }) => ({
    src : src
}))``;

const Target = styled(Image)`
    position: absolute;
    width : 100%;
    height : 100%;
    left: ${ ({ offset }) => offset.left + 60}px;
    top: ${ ({ offset }) => offset.top + 60}px;
    opacity: ${ ({ opacity }) => opacity};
    transform : scale(1.2);
`;

const HighLightedProduct = ( {title , price , description ,image , id , rating} ) => {
    const { cartData , setCartData , setQuantity_Products } = useContext(CartContext);    
    const [offset , setOffset] = useState({left : 0 , top : 0});
    const [opacity , setOpacity] = useState(0);

    const enteredDataIsInCart = cartData.find( item => {
        return item.id === id
    })
    
    const [quantity , setQuantity] = useState(enteredDataIsInCart ? enteredDataIsInCart.quantity : 1)

    // zoom Image :
    const mouseEnterHandler = () => {
        setOpacity(1);
    };
    
    const mouseLeaveHandler = () => {
        setOpacity(0);
        setOffset({
            left : 0,
            top : 0
        })
    };

    const mouseMoveHandler = (e) => {        
        const {left , top , width , height } = e.target.getBoundingClientRect()

        const x = (e.pageX - left) / width * 120
        const y = (e.pageY - top) / height * 120
        
        setOffset({ left: -x, top: -y });
    }

    useEffect(() => {
        const enteredData = {
            id,
            title,
            description,
            price,
            rating,
            image,
            quantity
        }

        setQuantity_Products(enteredData.quantity)

        if(enteredData.quantity === quantity && quantity >= 1){
            cartData.filter(item => {
                if(item.title === enteredData.title){
                    return (
                        item.quantity = enteredData.quantity
                    )
                }
            })
        }        
    },[quantity])


    const addToCartHandler = () => {
        const enteredData = {
            id,
            title,
            description,
            price,
            rating,
            image,
            quantity
        }

        setQuantity_Products(enteredData.quantity)

        setCartData(prevData => {
            return [...prevData , enteredData]
        })
    }

    const increaseBtnHandler = () => {
        if(quantity < 5){
            setQuantity(quantity + 1)
        }
    }

    const reduceBtnHandler = () => {
        if(quantity > 0){
            setQuantity(quantity - 1)
        } else {
            setQuantity(0)
        }
    }

    return (
        <>
            <div className = 'shadow-lg shadow-gray-200 w-8/12 h-[500px] rounded-2xl overflow-hidden flex flex-wrap justify-between items-center'>
                
                <div className = 'h-full w-1/2 relative flex flex-wrap overflow-hidden justify-center items-center' onMouseEnter = {mouseEnterHandler} onMouseLeave = {mouseLeaveHandler} onMouseMove = {mouseMoveHandler}>
                    <Image alt = {title} src = {image} className = {opacity === 0 ? 'opacity-100 w-full h-full' : 'opacity-0 w-full h-full'} />
                    <Target alt = 'target' opacity = {opacity} offset = {offset} src = {image}/>
                </div>

                <div className = 'h-full w-1/2 p-10 relative flex flex-wrap justify-center items-center content-center'>
                    
                    <Link to = '/products' className = 'absolute top-0 left-0'>
                        <i className = 'bx bx-left-arrow-alt text-3xl'></i>
                    </Link>
                    
                    <div className = 'w-full'>
                        <h1 className = 'text-xl'>{title}</h1>
                    </div>

                    <div className = 'flex flex-wrap justify-around w-full py-3 items-center'>
                        <div>
                            <p className = 'bg-orange-400 p-1 px-3 rounded-full'>$ {price}</p>
                        </div>

                        <div className = 'flex flex-wrap justify-center items-center'>
                            <p>rate : {rating.rate}</p>

                            <div className = 'ml-2 flex flex-wrap justify-center items-center'>
                                <Rating name = 'read-only' defaultValue = {rating.rate} precision = {0.1} readOnly/>
                            </div>
                        </div>
                    </div>
                    
                    <div>
                        <p className = {description.length >= 770 ? 'text-justify text-sm pt-3' : 'text-justify pt-3'}>{description}</p>
                    </div>

                    <div className = 'w-full mt-10'>
                        {
                            !enteredDataIsInCart ?
                            <button onClick = {addToCartHandler} className = {description.length >= 770 ? 'disabled:bg-red-400 disabled:cursor-not-allowed p-2 px-3 hover:border-b-2 border-b-2 border-transparent hover:border-gray-300 transition-all rounded-full -translate-y-5' : 'disabled:bg-red-400 disabled:cursor-not-allowed p-2 px-3 hover:border-b-2 border-b-2 border-transparent hover:border-gray-300 transition-all rounded-full translate-y-0'}>add to cart</button>
                            :
                            <div className = 'flex flex-wrap justify-normal items-center'>
                                <button className = 'p-1 text-lg mx-1 translate-y-0.5 disabled:text-gray-400 disabled:cursor-not-allowed' onClick = {reduceBtnHandler} disabled = {quantity === 1}>
                                    <i className = 'bx bx-left-arrow'></i>
                                </button>

                                <input type = "number" readOnly inputMode = 'numeric' pattern = '[0-9]' value = {enteredDataIsInCart.quantity} onChange = {() => {}} className = 'bg-slate-300 outline-none p-2 w-2/12 rounded-3xl text-center'/>
                                
                                <button className = 'p-1 text-lg mx-1 translate-y-0.5 disabled:text-gray-400' disabled = {quantity === 5} onClick = {increaseBtnHandler}>
                                    <i className = 'bx bx-right-arrow'></i>
                                </button>
                            </div>
                        }
                    </div>
                </div>
            </div>           
        </>
    );
};

export default HighLightedProduct;