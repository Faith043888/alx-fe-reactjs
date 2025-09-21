import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetail from './components/RecipeDetail';
import SearchBar from './components/SearchBar';
import { useRecipeStore } from './components/recipeStore';

function App() {
  const setRecipes = useRecipeStore((s) => s.setRecipes);

  useEffect(() => {
    setRecipes([
      {
        id: 1,
        title: 'Classic Pancakes',
        description:
          'Fluffy pancakes made with flour, milk, eggs, and a pinch of salt. Serve with syrup.',
      },
      {
        id: 2,
        title: 'Spaghetti Bolognese',
        description:
          'Traditional Italian pasta dish with ground beef, tomato sauce, and herbs.',
      },
    ]);
  }, []);

  return (
    <Router>
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
          <p style={{ margin: '8px 0 0' }}>Add, search, and browse recipes</p>
        </header>

        <main style={{ display: 'flex', gap: 20, padding: 20 }}>
          <div style={{ flex: 1 }}>
            <AddRecipeForm />
            <SearchBar />
          </div>
          <div style={{ flex: 2 }}>
            <Routes>
              <Route path="/" element={<RecipeList />} />
              <Route path="/recipes/:id" element={<RecipeDetail />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;
