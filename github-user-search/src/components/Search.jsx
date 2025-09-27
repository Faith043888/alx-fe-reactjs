// src/components/Search.jsx
import React, { useState } from "react";

function Search() {
  const [username, setUsername] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);

  const fetchUserData = async (currentPage = 1) => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch(
        `https://api.github.com/search/users?q=${username}&page=${currentPage}&per_page=10`
      );
      const data = await response.json();

      if (data.items && data.items.length > 0) {
        setUsers(data.items);
        setTotalCount(data.total_count);
        setPage(currentPage);
      } else {
        setError("Looks like we cant find the user");
        setUsers([]);
      }
    } catch (err) {
      setError("Error fetching user data");
      setUsers([]);
    }
    setLoading(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      fetchUserData(1);
    }
  };

  return (
    <div className="w-full max-w-md">
      {/* Search Form */}
      <form onSubmit={handleSubmit} className="flex mb-4">
        <input
          type="text"
          placeholder="Search GitHub username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="flex-1 px-4 py-2 border rounded-l-md focus:outline-none"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-r-md"
        >
          Search
        </button>
      </form>

      {/* Loading and Errors */}
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {/* Search Results */}
      <ul>
        {users.map((user) => (
          <li key={user.id} className="flex items-center mb-2">
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-10 h-10 rounded-full mr-3"
            />
            <a
              href={user.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              {user.login}
            </a>
          </li>
        ))}
      </ul>

      {/* Pagination */}
      {totalCount > 10 && (
        <div className="flex justify-between mt-4">
          <button
            onClick={() => fetchUserData(page - 1)}
            disabled={page === 1}
            className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
          >
            Previous
          </button>
          <span className="px-2 py-1">
            Page {page} of {Math.ceil(totalCount / 10)}
          </span>
          <button
            onClick={() => fetchUserData(page + 1)}
            disabled={page * 10 >= totalCount}
            className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}

export default Search;

