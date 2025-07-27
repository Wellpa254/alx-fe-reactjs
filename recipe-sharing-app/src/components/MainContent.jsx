import React from 'react';
import AddRecipeForm from './AddRecipeForm';
import RecipeList from './RecipeList';
import FavoritesList from './FavoritesList';
import RecommendationsList from './RecommendationsList';

function MainContent() {
  return (
    <main className="bg-gray-100 p-6 min-h-screen text-center">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Recipe Sharing App</h2>
      <AddRecipeForm />
      <RecipeList />
      <FavoritesList />
      <RecommendationsList />
    </main>
  );
}

export default MainContent;
