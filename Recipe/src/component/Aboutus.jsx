import React from "react";

const Aboutus = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-14">
      
      {/* Heading */}
      <h1 className="text-4xl font-bold text-orange-500 text-center">
        About RecipeBook 🍽️
      </h1>

      {/* Intro */}
      <p className="mt-6 text-center text-gray-600 text-lg">
        RecipeBook is your go-to place to discover, cook, and share delicious
        recipes from around the world.
      </p>

      {/* Content Section */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Text */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed">
            Our mission is to make cooking easy, fun, and accessible for
            everyone. Whether you are a beginner or a professional chef,
            RecipeBook helps you find the perfect recipe for every occasion.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">What We Offer</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>🍳 Thousands of curated recipes</li>
            <li>🔍 Easy recipe search</li>
            <li>🎲 Random recipe discovery</li>
            <li>📱 Mobile-friendly design</li>
          </ul>
        </div>

        {/* Image */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
            alt="Cooking"
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>

      {/* Footer Text */}
      <p className="mt-16 text-center text-gray-500">
        Built with ❤️ using React & Tailwind CSS.
      </p>
    </div>
  );
};

export default Aboutus;
