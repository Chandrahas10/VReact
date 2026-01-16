import React, { useEffect, useState } from "react";
import Card from "./Card";
import Pagination from "./Pagination";
import Recipe from "./Recipe";

const ITEMS_PER_PAGE = 15;

const Body = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [defaultRecipes, setdefaultRecipes]=useState([]);

  const fetchRandomMeals = async () => {
    try {
      setLoading(true);

      const requests = Array(ITEMS_PER_PAGE)
        .fill(0)
        .map(() =>
          fetch("https://www.themealdb.com/api/json/v1/1/random.php")
            .then((res) => res.json())
        );

      const responses = await Promise.all(requests);
      const meals = responses.map((r) => r.meals[0]);
      setdefaultRecipes(meals);
      console.log("Default"+defaultRecipes);
    } catch (error) {
      console.error("Random fetch error:", error);
    } finally {
      setLoading(false);
    }
  };

  // // 🚀 Load random meals on page load
  useEffect(() => {
    fetchRandomMeals();
  }, []);

  // 🔍 Search API
  const fetchSearchRecipes = async () => {
    if (!search.trim()) return;

   
      try {
      setLoading(true);
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
      );
      const data = await response.json();
      setRecipes(data.meals || []);
      console.log(recipes);
      setPage(1);
    } catch (error) {
      console.error("Search error:", error);
    } finally {
      setLoading(false);
    }
    
  };

  // Pagination handlers
  const nextPage = () => {
    setPage((prev) => prev + 1);
    fetchRandomMeals();
  };

  const prevPage = () => {
    if (page === 1) return;
    setPage((prev) => prev - 1);
    fetchRandomMeals();
  };

  const showData=search!="" ? recipes :defaultRecipes;
  return (
    <>
      {/* 🔍 SEARCH */}
      <div className="p-10 text-center">
        <h1 className="text-3xl font-bold text-orange-500">
          Welcome to RecipeBook 🍳
        </h1>

        <div className="mt-6 flex justify-center gap-4 flex-wrap">
          <input
            type="text"
            placeholder="Search the food recipe..."
            className="w-[20rem] px-5 py-2 border border-gray-300 rounded-full
                       focus:outline-none focus:ring-2 focus:ring-orange-400"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <button
            onClick={fetchSearchRecipes}
            className="bg-orange-500 rounded-full py-2 px-6 text-white hover:bg-orange-600"
          >
            Search
          </button>
        </div>
      </div>

      {/* 🧩 CARDS */}
      <div className="px-10 grid grid-cols-1 md:grid-cols-3 gap-10">
        <Card recipes={showData} loading={loading} />
      </div>

      {/* 📄 PAGINATION (disabled during search) */}
      {search === "" && (
        <Pagination page={page} nextPage={nextPage} prevPage={prevPage} />
      )}
    </>
  );
};

export default Body;
