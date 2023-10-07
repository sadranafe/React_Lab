import { createContext } from "react";

const CartContext = createContext({
    cartData : [],
    setCartData : () => {}
});

export default CartContext;