import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import { useRecipeStore } from './components/recipeStore';

function App() {
  const setRecipes = useRecipeStore((s) => s.setRecipes);

  useEffect(() => {
    setRecipes([
      {
        id: 1,
        title: 'Classic Pancakes',
        description: 'Fluffy pancakes made with flour, milk, eggs, and a pinch of salt. Serve with syrup.',
      },
    ]);
  }, [setRecipes]);

  return (
    <Router>
      <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: 1000, margin: '0 auto' }}>
        <header style={{ background: '#0077cc', color: '#fff', padding: 20, textAlign: 'center' }}>
          <h1 style={{ margin: 0 }}>Recipe Sharing App</h1>
          <p style={{ margin: '8px 0 0' }}>Add, view, edit, and delete recipes</p>
        </header>

        <main style={{ display: 'flex', gap: 20, padding: 20 }}>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <div style={{ flex: 1 }}>
                    <AddRecipeForm />
                  </div>
                  <div style={{ flex: 1 }}>
                    <RecipeList />
                  </div>
                </>
              }
            />
            <Route path="/recipes/:id" element={<RecipeDetails />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
