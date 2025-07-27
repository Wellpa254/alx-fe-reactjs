import './App.css';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import SearchBar from './components/SearchBar'; // 👈 Import the SearchBar

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>🍳 Recipe Sharing App</h1>
      <AddRecipeForm />
      <SearchBar /> {/* 👈 Add the SearchBar here */}
      <RecipeList />
    </div>
  );
}

export default App;
