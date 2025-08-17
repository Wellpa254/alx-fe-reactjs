import { useState } from "react";

function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let formErrors = {};
    if (!title.trim()) formErrors.title = "Title is required.";
    if (!ingredients.trim()) {
      formErrors.ingredients = "Ingredients are required.";
    } else {
      const items = ingredients.split(",").map((i) => i.trim());
      if (items.length < 2) {
        formErrors.ingredients = "Please enter at least 2 ingredients.";
      }
    }
    if (!steps.trim()) formErrors.steps = "Preparation steps are required.";
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const newRecipe = {
        id: Date.now(),
        title,
        ingredients: ingredients.split(",").map((i) => i.trim()),
        instructions: steps.split("\n").map((s) => s.trim()),
      };
      console.log("New recipe submitted:", newRecipe);
      alert("Recipe submitted successfully!");
      setTitle("");
      setIngredients("");
      setSteps("");
      setErrors({});
    }
  };

  return (
    <div className="container mx-auto p-4 md:p-6 max-w-full md:max-w-2xl">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-indigo-700">
        Add a New Recipe
      </h2>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-4 md:p-6 rounded-2xl shadow-lg space-y-6"
      >
        <div>
          <label className="block text-gray-700 font-medium mb-2 md:text-lg">
            Recipe Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3 md:p-4 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            placeholder="Enter recipe title"
          />
          {errors.title && <p className="text-red-500 text-sm mt-1 md:text-base">{errors.title}</p>}
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2 md:text-lg">
            Ingredients (separated by commas)
          </label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3 md:p-4 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            rows="4"
            placeholder="e.g. Tomato, Onion, Garlic"
          />
          {errors.ingredients && <p className="text-red-500 text-sm mt-1 md:text-base">{errors.ingredients}</p>}
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2 md:text-lg">
            Preparation Steps (one per line)
          </label>
          <textarea
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3 md:p-4 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            rows="5"
            placeholder="Step 1: ...&#10;Step 2: ..."
          />
          {errors.steps && <p className="text-red-500 text-sm mt-1 md:text-base">{errors.steps}</p>}
        </div>

        <button
          type="submit"
          className="w-full md:w-auto bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 md:py-4 px-4 md:px-6 rounded-lg transition duration-200"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
}

export default AddRecipeForm;
