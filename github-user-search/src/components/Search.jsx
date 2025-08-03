import { useState } from 'react';
import { fetchUserData } from '../services/githubService';

function Search() {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username.trim()) return;

    try {
      setIsLoading(true);
      setError('');
      const data = await fetchUserData(username.trim());
      setUser(data);
    } catch (err) {
      setUser(null);
      setError('Looks like we cant find the user');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} style={{ marginBottom: '1rem' }}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          style={{
            padding: '0.5rem',
            fontSize: '1rem',
            width: '250px',
            marginRight: '0.5rem',
          }}
        />
        <button type="submit" style={{ padding: '0.5rem 1rem', fontSize: '1rem' }}>
          Search
        </button>
      </form>

      {isLoading && <p>Loading...</p>}

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {user && (
        <div style={{ marginTop: '2rem', border: '1px solid #ddd', padding: '1rem', borderRadius: '8px' }}>
          <img
            src={user.avatar_url}
            alt={user.login}
            width="100"
            style={{ borderRadius: '50%' }}
          />
          <h2>{user.name || user.login}</h2>
          <p>{user.bio || 'No bio available'}</p>
          <a href={user.html_url} target="_blank" rel="noreferrer">
            View GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
}

export default Search;
