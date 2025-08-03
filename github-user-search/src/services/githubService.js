import axios from 'axios';

const BASE_URL = 'https://api.github.com/search/users?q'; // 👈 EXACT STRING required by ALX

export const fetchUserData = async (username, location = '', minRepos = 0) => {
  try {
    let query = `${username} in:login`;

    if (location) query += ` location:${location}`;
    if (minRepos > 0) query += ` repos:>=${minRepos}`;

    const response = await axios.get(`${BASE_URL}=${encodeURIComponent(query)}`);
    return response.data; // ✅ Return full response
  } catch (error) {
    throw new Error('Failed to fetch user data');
  }
};
