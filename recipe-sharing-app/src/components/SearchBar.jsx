import React from "react";
import { useRecipeStore } from "./recipeStore";

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);
  const setFilters = useRecipeStore((state) => state.setFilters);

  return (
    <div style={{ marginBottom: "20px", display: "flex", gap: "10px", flexWrap: "wrap" }}>
      <input
        type="text"
        placeholder="Search by title..."
        onChange={(e) => setSearchTerm(e.target.value)}
        style={inputStyle}
      />
      <input
        type="text"
        placeholder="Filter by ingredient..."
        onChange={(e) => setFilters({ ingredient: e.target.value })}
        style={inputStyle}
      />
      <input
        type="number"
        placeholder="Max prep time (mins)"
        onChange={(e) => setFilters({ prepTime: e.target.value })}
        style={inputStyle}
      />
    </div>
  );
};

const inputStyle = {
  padding: "10px",
  borderRadius: "5px",
  border: "1px solid #ccc",
  flex: 1,
};

export default SearchBar;
