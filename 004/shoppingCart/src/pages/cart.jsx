import { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartProduct from '../components/cartProduct';
import CartContext from '../contexts/cartContext';
import toast , { Toaster } from "react-hot-toast";


const Cart = () => {
    const { cartData , setCartData } = useContext(CartContext);

    const notify = () => toast.success('deleted successfully !' , {
        duration : 3000,
        position : 'top-right',
    })

    const deleteBtnHandler = item => {
        const newProduct = cartData.filter(product => {
            return product !== item
        })

        notify();
        setCartData(newProduct);
    }

    return (
        <>
            <Toaster/>

            <div className = 'w-full h-[88vh] flex flex-wrap justify-center items-center bg-neutral-50'>
                <div className = 'w-8/12 h-[500px] overflow-hidden rounded-3xl'>
                    <div className = 'h-full px-4 pb-14 overflow-scroll'>
                        {
                            cartData.length === 0 ?
                            <p className = 'text-center mt-10'>the cart is empty. ❗
                                <Link to = '/products' className = 'text-blue-400 pl-1'>buy now</Link>
                            </p>
                            :
                            cartData.map((item , index) =>
                                <CartProduct key = {index} onDelete = {() => deleteBtnHandler(item)} index = {index} id = {item.id} quantity = {item.quantity} title = {item.title} price = {item.price} img = {item.image}/>
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cart;