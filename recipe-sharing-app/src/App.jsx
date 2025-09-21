import React, { useEffect } from "react";
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import SearchBar from "./components/SearchBar";
import { useRecipeStore } from "./components/recipeStore";

function App() {
  const setRecipes = useRecipeStore((s) => s.setRecipes);

  useEffect(() => {
    setRecipes([
      {
        id: 1,
        title: "Classic Pancakes",
        description: "Fluffy pancakes made with flour, milk, eggs, and a pinch of salt.",
        ingredients: ["flour", "milk", "eggs", "salt"],
        prepTime: 20,
      },
      {
        id: 2,
        title: "Spaghetti Bolognese",
        description: "Pasta with a rich tomato and meat sauce.",
        ingredients: ["pasta", "tomato", "beef", "garlic"],
        prepTime: 45,
      },
      {
        id: 3,
        title: "Avocado Toast",
        description: "Toasted bread with smashed avocado and seasoning.",
        ingredients: ["bread", "avocado", "salt", "pepper"],
        prepTime: 10,
      },
    ]);
  }, [setRecipes]);

  return (
    <div style={{ fontFamily: "Arial, sans-serif", maxWidth: 1000, margin: "0 auto" }}>
      <header style={{ background: "#0077cc", color: "#fff", padding: 20, textAlign: "center" }}>
        <h1 style={{ margin: 0 }}>Recipe Sharing App</h1>
        <p style={{ margin: "8px 0 0" }}>Add, search, and filter recipes</p>
      </header>

      <main style={{ display: "flex", gap: 20, padding: 20 }}>
        <div style={{ flex: 1 }}>
          <AddRecipeForm />
        </div>
        <div style={{ flex: 2 }}>
          <SearchBar />
          <RecipeList />
        </div>
      </main>
    </div>
  );
}

export default App;
