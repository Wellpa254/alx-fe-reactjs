// src/components/RecipeList.jsx
import RecipeCard from "./RecipeCard";
import data from "../data.json"; // mock recipes

export default function RecipeList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {data.map((recipe, index) => (
        <RecipeCard
          key={index}
          title={recipe.title}
          description={recipe.description}
          image={recipe.image}
        />
      ))}
    </div>
  );
}
