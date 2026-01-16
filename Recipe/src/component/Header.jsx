import React from "react";
import { Link } from "react-router-dom";
import Body from "./Body";
import DefaultRecipe from "./DefaultRecipe";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img
            // src="https://cdn-icons-png.flaticon.com/512/1046/1046784.png"
            src={logo}
            alt="Recipe Logo"
            className="w-20 h-20"
          />
          <h1 className="text-2xl font-bold text-orange-500">TastyPages</h1>
        </div>

        <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
        <Link to={"/"}  className="hover:text-orange-500 transition">Home</Link>
          <Link to={"/randomrecipe"} className="hover:text-orange-500 transition">Recipes</Link>
          <Link to={"/about"}className="hover:text-orange-500 transition">About</Link>
          <Link to={"/contact"} className="hover:text-orange-500 transition">Contact</Link>
        </nav>
      </div>
    </div>
  );
};

export default Header;
