import React, { useEffect } from 'react';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import { useRecipeStore } from './store/recipeStore';

function App() {
  const setRecipes = useRecipeStore((s) => s.setRecipes);

  // Load initial recipe
  useEffect(() => {
    setRecipes([
      {
        id: 1,
        title: 'Classic Pancakes',
        description:
          'Fluffy pancakes made with flour, milk, eggs, and a pinch of salt. Serve with syrup.',
      },
    ]);
  }, [setRecipes]);

  return (
    <div
      style={{
        fontFamily: 'Arial, sans-serif',
        maxWidth: 1000,
        margin: '0 auto',
      }}
    >
      <header
        style={{
          background: '#0077cc',
          color: '#fff',
          padding: 20,
          textAlign: 'center',
        }}
      >
        <h1 style={{ margin: 0 }}>Recipe Sharing App</h1>
        <p style={{ margin: '8px 0 0' }}>Add and browse community recipes</p>
      </header>

      <main style={{ display: 'flex', gap: 20, padding: 20 }}>
        <div style={{ flex: 1 }}>
          <AddRecipeForm />
        </div>
        <div style={{ flex: 1 }}>
          <RecipeList />
        </div>
      </main>
    </div>
  );
}

export default App;
