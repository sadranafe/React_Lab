import Nav from "./components/nav/nav";
import { Route , Routes , Navigate } from "react-router-dom";
import Home from "./pages/home";
import Products from './pages/products';
import AboutUs from "./pages/aboutUs";
import NotFound from "./pages/notFound";
import Login from "./pages/login";
import Cart from "./pages/cart";

const App = () => {
  return(
    <>
      <Nav/>

      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/products" element = {<Products/>}/>
        <Route path = "/about-us" element = {<AboutUs/>}/>
        <Route path = "/login" element = {<Login/>}/>
        <Route path = "/cart" element = {<Cart/>}/>

        <Route path = "*" element = {<NotFound/>}/>

      </Routes>

    </>
  )
}

export default App;