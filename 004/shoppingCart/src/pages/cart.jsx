import React from 'react';
import CartProduct from '../components/cartProduct';

const Cart = ({data}) => {
    return (
        <>
            <div className = 'w-full h-[88vh] flex flex-wrap justify-center items-center'>
                <div className = 'w-8/12 shadow-lg shadow-gray-200 bg-neutral-100 h-[500px] overflow-hidden rounded-3xl'>
                    <div className = 'text-center py-3'>
                        <h1 className = 'text-2xl'>Cart</h1>
                    </div>

                    <div className = 'h-full px-4 pb-14 overflow-scroll'>
                        {
                            data.map((item , index) =>
                                <CartProduct key = {index} title = {item.title} price = {item.price} img = {item.image}/>
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cart;