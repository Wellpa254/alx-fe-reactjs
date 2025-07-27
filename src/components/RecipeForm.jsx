import { useState } from 'react';

function RecipeForm({ addRecipe }) {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !ingredients) return;

    addRecipe({ title, ingredients });
    setTitle('');
    setIngredients('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 rounded shadow-md space-y-4"
    >
      <input
        type="text"
        placeholder="Recipe Title"
        className="w-full border p-2 rounded"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Ingredients"
        className="w-full border p-2 rounded"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
      ></textarea>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
      >
        Add Recipe
      </button>
    </form>
  );
}

export default RecipeForm;
