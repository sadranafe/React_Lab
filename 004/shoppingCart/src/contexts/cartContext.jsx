import { createContext } from "react";

const CartContext = createContext({
    cartData : [],
    setCartData : () => {},
    quantity_Products : [],
    setQuantity_Products : () => {},
});

export default CartContext;