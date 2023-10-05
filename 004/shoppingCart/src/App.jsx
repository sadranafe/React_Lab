import { Route , Routes , Navigate } from "react-router-dom";

import Nav from "./components/nav/nav";
import Home from "./pages/home";
import Products from './pages/products';
import ProductDetails from "./pages/productDetails";
import AboutUs from "./pages/aboutUs";
import Cart from "./pages/cart";
import Login from "./pages/login";
import LoginPage from "./components/loginPage/loginPage";
import RegisterPage from "./components/loginPage/registerPage";
import NotFound from "./pages/notFound";
import { useState } from "react";

const App = () => {
  const [DUMMYDATA , setDUMMYDATA] = useState([]);
  const [DUMMYDATA_CART , setDUMMYDATA_CART] = useState([])

  const dataHandler = data => {
    setDUMMYDATA(data)
  }

  const cartHandler = data => {
    setDUMMYDATA_CART(data)
  }

  return(
    <>
      <Nav/>

      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/products" element = {<Products onGetData = {dataHandler}/>}/>
        <Route path = "/products/:id" element = {<ProductDetails dummyData = {DUMMYDATA}/>}/>
        <Route path = "/about-us" element = {<AboutUs/>}/>
        
        <Route path = "/login/*" element = {<Login/>}>
          <Route path = "login" element = {<LoginPage/>}/>
          <Route path = "register" element = {<RegisterPage/>}/>
        </Route>

        <Route path = "/login" element = {<Navigate to = '/login/login'/>} />
        <Route path = "/cart" element = {<Cart data = {DUMMYDATA_CART}/>} />
        <Route path = "*" element = {<NotFound/>}/>
        
      </Routes>
    </>
  )
}

export default App;