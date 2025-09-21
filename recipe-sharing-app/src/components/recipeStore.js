import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],

  // --- Search state ---
  searchTerm: '',
  filteredRecipes: [],

  // --- Actions ---
  setRecipes: (recipes) => set({ recipes }),

  addRecipe: (recipe) =>
    set((state) => ({
      recipes: [...state.recipes, recipe],
    })),

  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      ),
    })),

  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })),

  // --- Search actions ---
  setSearchTerm: (term) =>
    set((state) => {
      const filtered = state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(term.toLowerCase())
      );
      return {
        searchTerm: term,
        filteredRecipes: filtered,
      };
    }),
}));
