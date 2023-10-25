import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../contexts/cartContext";

const CartProduct = ({img , title , price , id , quantity , index , onDelete}) => {
    const {cartData , setCartData} = useContext(CartContext)

    const deleteHandler = () => {
        onDelete();
    }
    
    return (
        <>
            <div className = 'flex flex-wrap relative justify-normal items-center m-3 rounded-lg shadow-gray-300 bg-zinc-100/70 overflow-hidden pl-3'>
                <Link to = {`/products/${id}`} className = "flex flex-wrap justify-between items-center w-11/12">
                    <div className = 'w-16 h-16'>
                        <img src = {img} alt = {title} className = 'w-full h-full rounded-lg' />
                    </div>

                    <div className = 'w-5/12'>
                        <p className = "text-sm">{title}</p>
                    </div>

                    <div>
                        <p>
                            <i className = "bx bx-x translate-y-0.5 text-sm"></i>
                            {quantity}
                        </p>
                    </div>

                    <div className = "text-center w-1/12">
                        <p>$ {price * quantity}</p>
                    </div>

                </Link>

                <div className = 'absolute right-3 top-4'>
                    <button className = 'text-xl p-1 px-2 hover:text-red-600 transition-all' onClick = {deleteHandler}>
                        <i className = 'bx bx-x'></i>
                    </button>
                </div>
            </div>
        </>
    );
};

export default CartProduct;