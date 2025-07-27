import { useState } from 'react';
import Header from './components/Header';
import RecipeForm from './components/RecipeForm';
import RecipeList from './components/RecipeList';

function App() {
  const [recipes, setRecipes] = useState([]);

  const addRecipe = (newRecipe) => {
    setRecipes([newRecipe, ...recipes]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-xl mx-auto mt-8 p-4">
        <RecipeForm addRecipe={addRecipe} />
        <RecipeList recipes={recipes} />
      </main>
    </div>
  );
}

export default App;
