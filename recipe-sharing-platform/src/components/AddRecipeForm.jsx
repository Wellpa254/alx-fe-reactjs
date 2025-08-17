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

      // Reset form
      setTitle("");
      setIngredients("");
      setSteps("");
      setErrors({});
    }
  };

  return (
    <div className="container mx-auto p-6 max-w-3xl">
      <h2 className="text-3xl font-bold mb-6 text-center text-indigo-700">
        Add a New Recipe
      </h2>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-2xl shadow-lg space-y-6"
      >
        {/* Title */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Recipe Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            placeholder="Enter recipe title"
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title}</p>
          )}
        </div>

        {/* Ingredients & Steps in responsive layout */}
        <div className="flex flex-col gap-4
