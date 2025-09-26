import { useState } from "react";
import { searchGithubUser } from "../services/githubService";

function Search() {
  const [query, setQuery] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // ✅ loading state

  const handleSearch = async (e) => {
    e.preventDefault();
    setError("");
    setUser(null);
    setLoading(true); // ✅ start loading

    try {
      const result = await searchGithubUser(query);

      if (result && result.login) {
        setUser(result);
      } else {
        setError("Looks like we cant find the user"); // ✅ required text
      }
    } catch (err) {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false); // ✅ stop loading
    }
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSearch} className="flex gap-2">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search GitHub user..."
          className="border p-2 flex-1"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2">
          Search
        </button>
      </form>

      {loading && <p className="text-gray-500 mt-4">Loading</p>} {/* ✅ required */}

      {error && <p className="text-red-500 mt-4">{error}</p>}

      {user && (
        <div className="mt-4 p-4 border rounded">
          <h2 className="font-bold text-lg">{user.login}</h2>
          <img
            src={user.avatar_url}
            alt={user.login}
            className="w-24 h-24 rounded-full mt-2"
          />
        </div>
      )}
    </div>
  );
}

export default Search;

