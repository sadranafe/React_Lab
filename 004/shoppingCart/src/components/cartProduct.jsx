import React from 'react';

const CartProduct = ({img , title , price}) => {
    return (
        <>
            <div className = 'flex flex-wrap justify-between items-center bg-re d-600 m-3 rounded-3xl shadow-md bg-neutral-50 overflow-hidden pl-3'>
                <div className = 'w-16 h-16'>
                    <img src = {img} alt = {title} className = 'w-full h-full' />
                </div>

                <div className = 'w-6/12'>
                    <p>{title}</p>
                </div>

                <div>
                    <p>$ {price}</p>
                </div>

                <div className = 'px-5'>
                    <button className = 'text-red-600 text-xl p-2'>
                        <i className = 'bx bx-trash'></i>
                    </button>
                </div>
            </div>
        </>
    );
};

export default CartProduct;