import React from "react";
import { Routes, Route, Outlet, createBrowserRouter } from "react-router-dom";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Body from "./component/Body";
import Aboutus from "./component/Aboutus";
import Contactus from "./component/Contactus";
import Recipe from "./component/Recipe";
import DefaultRecipe from "./component/DefaultRecipe";

const App = () => {
  return (
    <>
    <Header/>
       <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/recipe/:id" element={<Recipe />} />
        <Route path="/randomrecipe" element={<DefaultRecipe/>} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/contact" element={<Contactus />} />
      </Routes>
    <Footer/>
    </>

  );
};

export default App;
