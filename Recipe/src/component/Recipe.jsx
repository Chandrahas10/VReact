import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Recipe = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch recipe by ID (from URL)
  const fetchRecipeById = async (recipeId) => {
    setLoading(true);
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`
    );
    const data = await res.json();
    setRecipe(data.meals[0]);
    setLoading(false);
  };

  // Fetch random recipe
  const fetchRandomRecipe = async () => {
    setLoading(true);
    const res = await fetch(
      "https://www.themealdb.com/api/json/v1/1/random.php"
    );
    const data = await res.json();
    setRecipe(data.meals[0]);
    setLoading(false);
  };

  // Load recipe from URL param
  useEffect(() => {
    fetchRecipeById(id);
  }, [id]);

  if (loading || !recipe) {
    return <p className="text-center mt-20">Loading...</p>;
  }

  return (
    <div className="max-w-7xl mx-auto py-10">

      {/* TITLE */}
      <h1 className="text-4xl font-bold text-orange-500 mb-10 text-center">
        {recipe.strMeal}
      </h1>

      {/* MAIN CONTENT */}
      <div className="flex gap-16 px-10">

        {/* IMAGE */}
        <div>
          <img
            src={recipe.strMealThumb}
            alt={recipe.strMeal}
            className="w-[360px] h-[360px] object-cover rounded-2xl shadow-lg"
          />

          <div className="mt-10 flex justify-center gap-8">
            {recipe.strYoutube && (
              <a
                href={recipe.strYoutube}
                target="_blank"
                rel="noreferrer"
                className="text-orange-500 font-semibold hover:underline"
              >
                ▶ Watch on YouTube
              </a>
            )}

            {recipe.strSource && (
              <a
                href={recipe.strSource}
                target="_blank"
                rel="noreferrer"
                className="text-gray-500 hover:underline"
              >
                🌐 Source
              </a>
            )}
          </div>
        </div>

        {/* DETAILS */}
        <div className="flex gap-14">

          {/* INGREDIENTS */}
          <div className="max-w-[280px]">
            <p className="text-gray-500 mb-4">
              🌍 {recipe.strArea} • 🍽️ {recipe.strCategory}
            </p>

            <h2 className="text-2xl font-semibold mb-4">Ingredients</h2>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              {Array.from({ length: 20 }, (_, i) => i + 1).map((i) => {
                const ing = recipe[`strIngredient${i}`];
                const mea = recipe[`strMeasure${i}`];
                return ing ? (
                  <li key={i}>{ing} {mea && `- ${mea}`}</li>
                ) : null;
              })}
            </ul>
          </div>

          {/* INSTRUCTIONS */}
          <div className="max-w-[520px]">
            <h2 className="text-2xl font-semibold mb-4">Instructions</h2>
            <p className="text-gray-600 whitespace-pre-line">
              {recipe.strInstructions}
            </p>
          </div>
        </div>
      </div>

      {/* NEXT BUTTON */}
      <div className="flex justify-end mt-10 pr-10">
        <button
          className="text-4xl font-bold text-orange-500 hover:underline"
          onClick={fetchRandomRecipe}
        >
          Next →
        </button>
      </div>

    </div>
  );
};

export default Recipe;
