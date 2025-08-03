import axios from 'axios';

const BASE_URL = 'https://api.github.com/search/users';

export const fetchUserData = async (username, location = '', minRepos = 0) => {
  try {
    // Construct query string
    let query = `${username} in:login`;

    if (location) query += ` location:${location}`;
    if (minRepos > 0) query += ` repos:>=${minRepos}`;

    const response = await axios.get(`${BASE_URL}?q=${encodeURIComponent(query)}`);
    return response.data.items; // returns array of matching users
  } catch (error) {
    throw new Error('Failed to fetch user data');
  }
};
