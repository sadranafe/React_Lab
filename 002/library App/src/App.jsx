import { Routes , Route , Navigate } from "react-router-dom";

import Nav from "./components/nav/nav";
import Home from "./pages/home";
import Books from "./pages/Books";
import BookDetail from "./pages/bookDetail";
import AboutUs from "./pages/aboutUs";
import NotFound from "./pages/notFound";
import Footer from "./components/footer/footer";

const App = () => {
  return (
    <>
      <Nav/>
      <Routes>
        <Route path = "/" element = { <Home/> }/>
        <Route path = "/books/:id" element = { <BookDetail/> } />
        <Route path = "/books" element = { <Books/> } />
        <Route path = "/about-us" element = { <AboutUs/> } />

        <Route path = "/404" element = { <NotFound/> } />
        <Route path = "*" element = { <Navigate to = "/404"/> } />
        
      </Routes>

      <Footer/>
    </>
  )
}

export default App;