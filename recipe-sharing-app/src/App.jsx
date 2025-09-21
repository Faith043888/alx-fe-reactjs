import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';
import SearchBar from './components/SearchBar';
import { useRecipeStore } from './components/recipeStore';

function RecipeDetailPage() {
  const { id } = useParams();
  return <RecipeDetails recipeId={parseInt(id)} />;
}

function App() {
  const setRecipes = useRecipeStore((s) => s.setRecipes);

  useEffect(() => {
    // Seed with some demo recipes
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
          'A rich meat sauce with tomatoes, garlic, and herbs served over spaghetti.',
      },
      {
        id: 3,
        title: 'Caesar Salad',
        description:
          'Crisp romaine lettuce with Caesar dressing, parmesan cheese, and croutons.',
      },
    ]);
  }, [setRecipes]);

  return (
    <Router>
      <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: 1000, margin: '0 auto' }}>
        {/* Header */}
        <header style={{ background: '#0077cc', color: '#fff', padding: 20, textAlign: 'center' }}>
          <h1 style={{ margin: 0 }}>Recipe Sharing App</h1>
          <p style={{ margin: '8px 0 0' }}>Add, browse, and favorite community recipes</p>
          <nav style={{ marginTop: 15 }}>
            <Link to="/" style={{ color: '#fff', margin: '0 10px' }}>Home</Link>
            <Link to="/favorites" style={{ color: '#fff', margin: '0 10px' }}>Favorites</Link>
            <Link to="/recommendations" style={{ color: '#fff', margin: '0 10px' }}>Recommendations</Link>
          </nav>
        </header>

        {/* Main Routes */}
        <main style={{ padding: 20 }}>
          <Routes>
            <Route
              path="/"
              element={
                <div style={{ display: 'flex', gap: 20 }}>
                  <div style={{ flex: 1 }}>
                    <h2>Add a New Recipe</h2>
                    <AddRecipeForm />
                  </div>
                  <div style={{ flex: 1 }}>
                    <h2>Recipes</h2>
                    <SearchBar />
                    <RecipeList />
                  </div>
                </div>
              }
            />
            <Route path="/recipe/:id" element={<RecipeDetailPage />} />
            <Route path="/favorites" element={<FavoritesList />} />
            <Route path="/recommendations" element={<RecommendationsList />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
