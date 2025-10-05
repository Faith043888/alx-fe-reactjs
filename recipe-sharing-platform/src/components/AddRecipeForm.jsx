import { useState } from "react";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!title.trim() || !ingredients.trim() || !steps.trim()) {
      setError("All fields are required.");
      setSuccess("");
      return;
    }

    const ingredientList = ingredients.split("\n").filter((item) => item.trim());
    if (ingredientList.length < 2) {
      setError("Please include at least two ingredients.");
      setSuccess("");
      return;
    }

    // Mock submission success
    setError("");
    setSuccess("Recipe added successfully!");
    setTitle("");
    setIngredients("");
    setSteps("");
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Add a New Recipe
        </h1>

        {error && (
          <p className="bg-red-100 text-red-700 p-2 rounded-md text-center mb-4">
            {error}
          </p>
        )}
        {success && (
          <p className="bg-green-100 text-green-700 p-2 rounded-md text-center mb-4">
            {success}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Recipe Title */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Recipe Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              placeholder="Enter recipe title"
            />
          </div>

          {/* Ingredients */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Ingredients
            </label>
            <textarea
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              rows="4"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              placeholder="List each ingredient on a new line"
            ></textarea>
          </div>

          {/* Preparation Steps */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Preparation Steps
            </label>
            <textarea
              value={steps}
              onChange={(e) => setSteps(e.target.value)}
              rows="5"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              placeholder="Describe the steps to prepare the recipe"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-md transition duration-300"
          >
            Submit Recipe
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddRecipeForm;
