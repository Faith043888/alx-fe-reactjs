// src/components/AddRecipeForm.jsx
import React, { useState } from "react";
import { useRecipeStore } from "./recipeStore";

const AddRecipeForm = () => {
  const addRecipe = useRecipeStore((state) => state.addRecipe);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [prepTime, setPrepTime] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // convert ingredients string into array (comma separated)
    const ingredientList = ingredients
      .split(",")
      .map((item) => item.trim())
      .filter((item) => item);

    addRecipe({
      id: Date.now(),
      title,
      description,
      ingredients: ingredientList,
      prepTime,
    });

    // reset form fields
    setTitle("");
    setDescription("");
    setIngredients("");
    setPrepTime("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Recipe Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Ingredients (comma separated)"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
      />
      <input
        type="text"
        placeholder="Preparation Time (e.g. 30 mins)"
        value={prepTime}
        onChange={(e) => setPrepTime(e.target.value)}
      />
      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default AddRecipeForm;
