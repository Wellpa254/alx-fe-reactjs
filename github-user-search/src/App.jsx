import { useState } from 'react';
import SearchForm from './components/SearchForm';
import UserCard from './components/UserCard';
import { fetchUserData } from './services/githubService';

function App() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = async (username) => {
    try {
      setError('');
      const userData = await fetchUserData(username);
      setUser(userData);
    } catch (err) {
      setUser(null);
      setError(err.message);
    }
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-
