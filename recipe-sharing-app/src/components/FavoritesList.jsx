import { useRecipeStore } from '../store/useRecipeStore';

const FavoritesList = () => {
  const recipes = useRecipeStore(state => state.recipes);
  const favorites = useRecipeStore(state =>
    state.favorites.map(id => recipes.find(recipe => recipe.id === id)).filter(Boolean)
  );

  return (
    <div className="my-6 p-4 border rounded-lg shadow-md bg-white">
      <h2 className="text-xl font-bold mb-4">My Favorites</h2>
      {favorites.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        favorites.map(recipe => (
          <div key={recipe.id} className="mb-4">
            <h3 className="text-lg font-semibold">{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default FavoritesList;
