// src/services/githubService.js
import axios from "axios";

// Fetch users with advanced search criteria
export const fetchUserData = async (username, location, minRepos) => {
  try {
    // Construct the query
    let query = username ? `${username} in:login` : "";

    if (location) {
      query += ` location:${location}`;
    }

    if (minRepos) {
      query += ` repos:>=${minRepos}`;
    }

    // GitHub Search Users API
    const response = await axios.get(
      `https://api.github.com/search/users?q=${encodeURIComponent(query)}`
    );

    return response.data.items; // returns array of users
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};
