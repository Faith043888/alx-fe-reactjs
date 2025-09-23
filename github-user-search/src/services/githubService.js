import axios from "axios";

const BASE_URL = "https://api.github.com";

export const fetchUserData = async (username) => {
  const response = await axios.get(`${BASE_URL}/users/${username}`);
  return response.data;
};

export const fetchAdvancedUserData = async (username, location, minRepos, page = 1) => {
  let query = "";

  if (username) query += `${username} in:login `;
  if (location) query += `location:${location} `;
  if (minRepos) query += `repos:>=${minRepos}`;

  const response = await axios.get(`${BASE_URL}/search/users`, {
    params: {
      q: query.trim(),
      page,
      per_page: 5, // limit results per page for testing
    },
  });

  return {
    items: response.data.items,
    hasMore: response.data.total_count > page * 5,
  };
};
