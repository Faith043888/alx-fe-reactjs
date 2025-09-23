import { useState } from "react";
import { fetchUserData, fetchAdvancedUserData } from "../services/githubService";

function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUser(null);
    setUsers([]);
    setPage(1);

    try {
      if (location || minRepos) {
        const results = await fetchAdvancedUserData(username, location, minRepos, 1);
        setUsers(results.items);
        setHasMore(results.hasMore);
      } else {
        const data = await fetchUserData(username);
        setUser(data);
      }
    } catch (err) {
      setError("Looks like we can't find the user");
    } finally {
      setLoading(false);
    }
  };

  const loadMore = async () => {
    const nextPage = page + 1;
    setLoading(true);
    try {
      const results = await fetchAdvancedUserData(username, location, minRepos, nextPage);
      setUsers((prev) => [...prev, ...results.items]);
      setPage(nextPage);
      setHasMore(results.hasMore);
    } catch (err) {
      setError("Could not load more results.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-white shadow-md rounded-lg p-4"
      >
        <input
          type="text"
          placeholder="Search GitHub username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full border px-3 py-2 rounded-md"
        />
        <input
          type="text"
          placeholder="Location (optional)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full border px-3 py-2 rounded-md"
        />
        <input
          type="number"
          placeholder="Min Repositories (optional)"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="w-full border px-3 py-2 rounded-md"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      <div className="mt-6">
        {loading && <p className="text-gray-600">Loading...</p>}
        {error && <p className="text-red-600">{error}</p>}

        {user && (
          <div className="mt-4 text-center">
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-24 h-24 mx-auto rounded-full"
            />
            <h2 className="text-xl font-bold mt-2">{user.login}</h2>
            <a
              href={user.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600"
            >
              View Profile
            </a>
          </div>
        )}

        {users.length > 0 && (
          <div className="mt-4 space-y-4">
            {users.map((u) => (
              <div
                key={u.id}
                className="flex items-center space-x-4 p-3 border rounded-md shadow-sm"
              >
                <img
                  src={u.avatar_url}
                  alt={u.login}
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <h3 className="text-lg font-semibold">{u.login}</h3>
                  <a
                    href={u.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600"
                  >
                    View Profile
                  </a>
                </div>
              </div>
            ))}

            {hasMore && (
              <button
                onClick={loadMore}
                disabled={loading}
                className="w-full mt-4 bg-gray-800 text-white py-2 rounded-md hover:bg-gray-900"
              >
                {loading ? "Loading..." : "Load More"}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;
