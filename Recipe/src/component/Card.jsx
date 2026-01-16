import React from "react";
import { useNavigate } from "react-router-dom";
import ShimmerCards from "./ShimmerCards";

const Card = ({ recipes, loading }) => {
  const navigate = useNavigate();

  if (loading) {
    return <div className="px-2"><ShimmerCards /></div>;
  }

  if (!recipes || recipes.length === 0) {
    return (
      <h2 className="mt-20 text-center text-xl font-semibold text-gray-500">
        No recipes found 🍽️
      </h2>
    );
  }

  return (
    <>
      {recipes.map((recipe) => (
        <div
          key={recipe.idMeal}
          className="bg-white shadow rounded-lg overflow-hidden"
        >
          <img
            src={recipe.strMealThumb}
            alt={recipe.strMeal}
            className="w-full h-48 object-cover"
          />

          <div className="p-4">
            <h2 className="font-bold text-lg">{recipe.strMeal}</h2>
            <p className="text-gray-500 text-sm">{recipe.strArea}</p>
          </div>

          <button
            className="text-orange-500 font-semibold pb-4 pl-4 hover:underline"
            onClick={() => navigate(`/recipe/${recipe.idMeal}`)}
          >
            See Recipe →
          </button>
        </div>
      ))}
    </>
  );
};

export default Card;
