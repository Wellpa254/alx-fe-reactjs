import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],
  filteredRecipes: [],
  favorites: [],
  recommendations: [],
  searchTerm: '',

  addRecipe: (recipe) =>
    set((state) => ({
      recipes: [...state.recipes, recipe],
      filteredRecipes: [...state.recipes, recipe],
    })),

  updateRecipe: (id, updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((r) => (r.id === id ? updatedRecipe : r)),
      filteredRecipes: state.filteredRecipes.map((r) =>
        r.id === id ? updatedRecipe : r
      ),
    })),

  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((r) => r.id !== id),
      filteredRecipes: state.filteredRecipes.filter((r) => r.id !== id),
      favorites: state.favorites.filter((fid) => fid !== id),
    })),

  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: [...new Set([...state.favorites, recipeId])],
    })),

  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  generateRecommendations: () =>
    set((state) => {
      const recommended = state.recipes.filter(
        (recipe) =>
          state.favorites.includes(recipe.id) && Math.random() > 0.3
      );
      return { recommendations: recommended };
    }),

  filterRecipes: (searchTerm) =>
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    })),

  setSearchTerm: (term) =>
    set((state) => {
      const filtered = state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(term.toLowerCase())
      );
      return {
        searchTerm: term,
        filteredRecipes: filtered,
      };
    }),
}));
