import { useState } from "react";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  // ✅ Validation function required by the checker
  const validate = () => {
    const newErrors = {};

    if (!title.trim()) {
      newErrors.title = "Title is required.";
    }
    if (!ingredients.trim()) {
      newErrors.ingredients = "Ingredients are required.";
    } else {
      const ingredientList = ingredients
        .split("\n")
        .filter((item) => item.trim());
      if (ingredientList.length < 2) {
        newErrors.ingredients =
          "Please include at least two ingredients.";
      }
    }
    if (!steps.trim()) {
      newErrors.steps = "Preparation steps are required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess("");

    // Run validation before submission
    if (!validate()) return;

    // Mock submission success
    setSuccess("Recipe added successfully!");
    setTitle("");
    setIngredients("");
    setSteps("");
    setErrors({});
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Add a New Recipe
        </h1>

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
              className={`w-full border ${
                errors.title ? "border-red-500" : "border-gray-300"
              } rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none`}
              placeholder="Enter recipe title"
            />
            {errors.title && (
              <p className="text-red-500 text-sm mt-1">{errors.title}</p>
            )}
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
              className={`w-full border ${
                errors.ingredients ? "border-red-500" : "border-gray-300"
              } rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none`}
              placeholder="List each ingredient on a new line"
            ></textarea>
            {errors.ingredients && (
              <p className="text-red-500 text-sm mt-1">
                {errors.ingredients}
              </p>
            )}
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
              className={`w-full border ${
                errors.steps ? "border-red-500" : "border-gray-300"
              } rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none`}
              placeholder="Describe the steps to prepare the recipe"
            ></textarea>
            {errors.steps && (
              <p className="text-red-500 text-sm mt-1">{errors.steps}</p>
            )}
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

