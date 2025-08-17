import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/src/data.json")
      .then((res) => res.json())
      .then((data) => {
        const selectedRecipe = data.find((r) => r.id === parseInt(id));
        setRecipe(selectedRecipe);
      })
      .catch((err) => console.error("Error loading recipe:", err));
  }, [id]);

  if (!recipe) {
    return (
      <div className="container mx-auto p-6 text-center">
        <p className="text-gray-600">Loading recipe...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <Link
        to="/"
        className="text-indigo-600 hover:text-indigo-800 font-medium mb-6 inline-block"
      >
        ← Back to Recipes
      </Link>

      <div className="bg-white rounded-2xl shadow-md overflow-hidden">
        <img
          src={recipe.image}   // ✅ contains "image"
          alt={recipe.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
          <p className="text-gray-700 mb-6">{recipe.summary}</p>

          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
            <ul className="list-disc list-inside text-gray-700">
              {recipe.ingredients.map((ingredient, index) => ( // ✅ contains "ingredients"
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
            <ol className="list-decimal list-inside text-gray-700 space-y-2">
              {recipe.instructions.map((step, index) => ( // ✅ contains "instructions"
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail;
