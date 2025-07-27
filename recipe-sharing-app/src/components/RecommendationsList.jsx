import { useRecipeStore } from '../store/useRecipeStore';
import { useEffect } from 'react';

const RecommendationsList = () => {
  const recommendations = useRecipeStore(state => state.recommendations);
  const generateRecommendations = useRecipeStore(state => state.generateRecommendations);

  useEffect(() => {
    generateRecommendations();
  }, [generateRecommendations]);

  return (
    <div className="my-6 p-4 border rounded-lg shadow-md bg-white">
      <h2 className="text-xl font-bold mb-4">Recommended for You</h2>
      {recommendations.length === 0 ? (
        <p>No recommendations available.</p>
      ) : (
        recommendations.map(recipe => (
          <div key={recipe.id} className="mb-4">
            <h3 className="text-lg font-semibold">{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default RecommendationsList;
