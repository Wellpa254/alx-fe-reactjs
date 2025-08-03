
import { useState } from 'react';
import Search from './components/Search';
import UserCard from './components/UserCard';
import { fetchUserData } from './services/githubService';

function App() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false); // optional but improves UX

  const handleSearch = async (username) => {
    try {
      setIsLoading(true);
      setError('');
      const userData = await fetchUserData(username);
      setUser(userData);
    } catch (err) {
      setUser(null);
      setError('Looks like we can’t find the user');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>GitHub User Search</h1>
      <Search onSearch={handleSearch} />

      {isLoading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {user && <UserCard user={user} />}
    </div>
  );
}

export default App;
