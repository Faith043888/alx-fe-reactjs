import React, { useState } from 'react';
import { useRecipeStore } from '../store/recipeStore';

const AddRecipeForm = () => {
  const addRecipe = useRecipeStore((state) => state.addRecipe);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;

    addRecipe({
      id: Date.now(),
      title,
      description,
    });

    setTitle('');
    setDescription('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        padding: 20,
        border: '1px solid #e0e0e0',
        borderRadius: 8,
        boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
      }}
    >
      <input
        type="text"
        placeholder="Recipe Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ padding: 8 }}
      />
      <textarea
        placeholder="Recipe Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        rows="4"
        style={{ padding: 8 }}
      />
      <button
        type="submit"
        style={{
          background: '#0077cc',
          color: 'white',
          border: 'none',
          padding: '10px',
          borderRadius: 4,
          cursor: 'pointer',
        }}
      >
        Add Recipe
      </button>
    </form>
  );
};

export default AddRecipeForm;
