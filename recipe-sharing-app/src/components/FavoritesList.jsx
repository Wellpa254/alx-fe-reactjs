import { useRecipeStore } from './recipeStore'; // ✅ Fixed import path
import { Link } from 'react-router-dom';

const FavoritesList = () => {
  const favorites = useRecipeStore((state) =>
    state.favorites.map((id) => state.recipes.find((recipe) => recipe.id === id))
  );

  return (
    <div>
      <h2>💖 My Favorite Recipes</h2>
      {favorites.length === 0 ? (
        <p>You haven’t added any favorite recipes yet.</p>
      ) : (
        favorites.map((recipe) =>
          recipe ? (
            <div
              key={recipe.id}
              style={{
                border: '1px solid #ccc',
                padding: '10px',
                marginBottom: '10px',
              }}
            >
              <h3>
                <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
              </h3>
              <p>{recipe.description}</p>
            </div>
          ) : null
        )
      )}
    </div>
  );
};

export default FavoritesList;
