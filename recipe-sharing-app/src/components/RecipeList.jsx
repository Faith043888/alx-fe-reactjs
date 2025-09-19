import React from 'react';
import { useRecipeStore } from '../store/recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  if (!recipes || recipes.length === 0) {
    return (
      <div style={{ padding: '20px' }}>
        <p>No recipes yet. Add one using the form.</p>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px' }}>
      {recipes.map((recipe) => (
        <div
          key={recipe.id}
          style={{
            border: '1px solid #e0e0e0',
            borderRadius: 8,
            padding: 12,
            marginBottom: 12,
            boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
          }}
        >
          <h3 style={{ margin: '0 0 8px' }}>{recipe.title}</h3>
          <p style={{ margin: 0, whiteSpace: 'pre-wrap' }}>
            {recipe.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
