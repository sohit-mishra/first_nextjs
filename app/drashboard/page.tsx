"use client"; // Add this directive to mark the file as a client-side component

import Image from "next/image";
import { useState, useEffect } from "react";

interface Recipe {
  id: number;
  name: string;
  image: string;
  mealType: string;
  tags: string[];
}

export default function Recipes() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  
  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data.recipes); 
        console.log(data.recipes)
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  if (!recipes.length) {
    return <p>Loading...</p>; 
  }

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6 mt-20">
      <h1 className="text-3xl font-bold mb-6">Recipes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-7xl">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="bg-white rounded-lg shadow-lg p-4">
            <Image
              className="object-cover w-full h-auto rounded-lg"
              src={recipe.image}
              alt="Home Image"
              width={500}
              height={300}
              priority
            />
            <h2 className="text-xl font-semibold mt-4">{recipe.name}</h2>
            <p className="text-gray-600 text-sm mt-2">
              <strong>Meal Type:</strong> {recipe.mealType}
            </p>
            <p className="text-gray-600 text-sm mt-2">
              <strong>Tags:</strong> {recipe.tags.join(", ")}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
