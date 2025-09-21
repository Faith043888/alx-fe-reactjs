import React from 'react';
import { useRecipeStore } from './recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div>
      <h2>Recipes</h2>
      {recipes.length === 0 ? (
        <p>No recipes yet. Add one above!</p>
      ) : (
        recipes.map((recipe) => (
          <div
            key={recipe.id}
            style={{
              border: '1px solid #ddd',
              borderRadius: 8,
              padding: 10,
              marginBottom: 10,
            }}
          >
            <h3 style={{ margin: '0 0 5px' }}>{recipe.title}</h3>
            <p style={{ margin: 0 }}>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;
