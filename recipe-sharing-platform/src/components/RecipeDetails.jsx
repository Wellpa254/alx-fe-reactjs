// src/components/RecipeDetails.jsx
import { useParams } from "react-router-dom";
import data from "../data.json";

export default function RecipeDetails() {
  const { id } = useParams();
  const recipe = data.find((r) => r.id === parseInt(id));

  if (!recipe) {
    return <p className="p-4 text-red-600">Recipe not found.</p>;
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg mt-6">
      <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover rounded" />
      <h2 className="text-2xl font-bold mt-4">{recipe.title}</h2>
      <p className="text-gray-700 mt-2">{recipe.summary}</p>
    </div>
  );
}
