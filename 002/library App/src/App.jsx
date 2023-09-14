import { Switch , Route , Redirect } from "react-router-dom";

import { useState } from "react";
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

      <Switch>
        <Route path = "/" exact>
          <Home/>
        </Route>

        <Route path = "/books/:id">
          <BookDetail/>
        </Route>

        <Route path = "/books">
          <Books/>
        </Route>

        <Route path = "/about-us">
          <AboutUs/>
        </Route>

        <Route path = "/404" exact>
          <NotFound/>
        </Route>

        <Redirect to = "/404"/>
      </Switch>

      <Footer/>
    </>
  )
}

export default App;