
import './App.css';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import SearchBar from './components/SearchBar';
import FavoritesList from './components/FavoritesList'; // 👈 NEW
import RecommendationsList from './components/RecommendationsList'; // 👈 NEW

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>🍳 Recipe Sharing App</h1>
      <AddRecipeForm />
      <SearchBar />
      <RecipeList />

      <hr style={{ margin: '40px 0' }} />

      <FavoritesList /> {/* 👈 NEW */}
      <hr style={{ margin: '40px 0' }} />
      <RecommendationsList /> {/* 👈 NEW */}
    </div>
  );
}

export default App;
