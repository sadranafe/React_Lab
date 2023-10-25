import { Route , Routes , Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import CartContext from "./contexts/cartContext";

import Nav from "./components/nav/nav";
import Home from "./pages/home";
import Products from './pages/products';
import ProductDetails from "./pages/productDetails";
import AboutUs from "./pages/aboutUs";
import Cart from "./pages/cart";
import Login from "./pages/login";
import NotFound from "./pages/notFound";
import Footer from "./components/footer/footer";

const App = () => {
  const [DUMMYDATA , setDUMMYDATA] = useState([]);
  const [DUMMYDATA_CART , setDUMMYDATA_CART] = useState([])
  const [quantityProducts , setQuantityProducts] = useState([])

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
    .then(res => setDUMMYDATA(res.data))
  },[])

  return(
    <>
      <CartContext.Provider value = {{cartData : DUMMYDATA_CART , setCartData : setDUMMYDATA_CART , quantity_Products : quantityProducts , setQuantity_Products : setQuantityProducts}}>
        <Nav/>
      </CartContext.Provider>

      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/products" element = {<Products/>}/>

        <Route path = "/products/:id" element = {
          <CartContext.Provider value = {{cartData : DUMMYDATA_CART , setCartData : setDUMMYDATA_CART , quantity_Products : quantityProducts , setQuantity_Products : setQuantityProducts}}>
            <ProductDetails dummyData = {DUMMYDATA} />
          </CartContext.Provider> }
        />

        <Route path = "/about-us" element = {<AboutUs/>}/>
        
        <Route path = "/login" element = {<Login/>} />

        <Route path = "/login" element = {<Navigate to = '/login/login'/>} />

        <Route path = "/cart" element = {
          <CartContext.Provider value = {{cartData : DUMMYDATA_CART , setCartData : setDUMMYDATA_CART , quantity_Products : quantityProducts , setQuantity_Products : setQuantityProducts}}>
            <Cart/>
          </CartContext.Provider>
        }/>

          <Route path = "*" element = {<NotFound/> }/>

      </Routes>

      <Footer/>
    </>
  )
}

export default App;