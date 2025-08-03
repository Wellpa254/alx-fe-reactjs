import axios from 'axios';

export const fetchAdvancedUsers = async (username, location, minRepo) => {
  let query = `q=${username}`;
  if (location) query += `+location:${location}`;
  if (minRepo) query += `+repos:>=${minRepo}`;

  const url = `https://api.github.com/search/users?${query}`;

  const response = await axios.get(url);
  return response.data;
};
