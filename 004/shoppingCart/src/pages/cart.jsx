import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import toast , { Toaster } from "react-hot-toast";
import CartContext from '../contexts/cartContext';
import CartProduct from '../components/cartProduct';
import Stepper from '../components/stepper';
import ReviewCart from '../components/review/reviewCart';


const Cart = () => {
    const { cartData , setCartData } = useContext(CartContext);
    const [currentStep , setCurrentStep] = useState(1)
    const [totalPrice , setTotalPrice] = useState();
    const [deletedProducts , setDeletedProducs] = useState();

    const notify = () => toast.success('deleted successfully !' , {
        duration : 3000,
        position : 'top-right',
    })

    useEffect( () => {
        if(cartData.length !== 0){
            setTotalPrice(cartData.reduce( (acc , cur) => (acc) + (cur.price * cur.quantity) , 0 ))
        }
        
    },[cartData])    

    const deleteBtnHandler = item => {
        setDeletedProducs(item)
        const newProduct = cartData.filter( product => {
            return product !== item;
        })

        notify();
        setCartData(newProduct);
    }

    const stepHandler = index => {
        setCurrentStep(index)
    }

    return (
        <>
            <Toaster/>

            <div className = 'w-full h-[88vh] overflow-hidden flex flex-wrap justify-center items-center bg-neutral-50'>
                <div className = 'w-full text-center'>
                    <Stepper stepHandler = {stepHandler}/>
                </div>

                <div className = {currentStep !== 2 ? 'w-8/12 h-[500px] px-5 relative' : 'w-8/12 h-[500px] px-5 relative -translate-x-16'}>
                    <div className = 'h-full px-4 pb-14 overflow-scroll'>
                        {
                            cartData.length === 0 ?
                            <p className = 'text-center mt-10 select-none'>the cart is empty. ❗
                                <Link to = '/products' className = 'text-blue-400 pl-1'>buy now</Link>
                            </p>
                            :
                            cartData.map((item , index) =>
                                <CartProduct key = {index} onDelete = { () => deleteBtnHandler(item) } index = {index} id = {item.id} quantity = {item.quantity} title = {item.title} price = {item.price} img = {item.image}/>
                            )
                        }
                    </div>
                    
                    {
                        currentStep === 2 &&
                        <ReviewCart totalPrice = {totalPrice}/>
                    }
                </div>
            </div>
        </>
    );
};

export default Cart;