import { useState } from 'react';
import SearchForm from './components/SearchForm';
import UserCard from './components/UserCard';
import { fetchGitHubUser } from './services/githubApi';

function App() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = async (username) => {
    try {
      setError('');
      const userData = await fetchGitHubUser(username);
      setUser(userData);
    } catch (err) {
      setUser(null);
      setError(err.message);
    }
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>GitHub User Search</h1>
      <SearchForm onSearch={handleSearch} />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {user && <UserCard user={user} />}
    </div>
  );
}

export default App;
