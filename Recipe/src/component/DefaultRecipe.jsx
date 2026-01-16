import React, { useEffect, useState } from "react";
import CircularProgress from '@mui/material/CircularProgress';

const DefaultRecipe = () => {
  const [recipe, setRecipe] = useState(null);

  const fetchRecipe = async () => {
    const res = await fetch(
      "https://www.themealdb.com/api/json/v1/1/random.php"
    );
    const data = await res.json();
    setRecipe(data.meals[0]);
  };

  // Fetch recipe on page load
  useEffect(() => {
    fetchRecipe();
  }, []);

  if (!recipe)
    return (
      <p className="text-center mt-20 text-lg text-gray-500">
        <CircularProgress disableShrink />
      </p>
    );

  return (
    <div className="flex justify-center items-center">
      <div className="max-w-7xl mx-auto py-10">

        {/* HEADLINE */}
        <h1 className="text-4xl font-bold text-orange-500 mb-10 text-center">
          {recipe.strMeal}
        </h1>

        {/* MAIN SECTION */}
        <div className="flex gap-16 px-10">

          {/* IMAGE */}
          <div className="flex-shrink-0">
            <img
              src={recipe.strMealThumb}
              alt={recipe.strMeal}
              className="w-[360px] h-[360px] object-cover rounded-2xl shadow-lg"
            />

            {/* LINKS */}
            <div className="mt-12 flex justify-center gap-8">
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
                  🌐 Original Source
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
                  const ingredient = recipe[`strIngredient${i}`];
                  const measure = recipe[`strMeasure${i}`];
                  return ingredient ? (
                    <li key={i}>
                      {ingredient} {measure && `- ${measure}`}
                    </li>
                  ) : null;
                })}
              </ul>
            </div>

            {/* INSTRUCTIONS */}
            <div className="max-w-[520px]">
              <h2 className="text-2xl font-semibold mb-4">Instructions</h2>
              <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                {recipe.strInstructions}
              </p>
            </div>
          </div>
        </div>

        {/* NEXT BUTTON */}
        <div className="flex justify-end mt-8 pr-10">
          <button
            className="text-4xl font-bold text-orange-500 hover:underline"
            onClick={fetchRecipe}
          >
            Next →
          </button>
        </div>

      </div>
    </div>
  );
};

export default DefaultRecipe;
