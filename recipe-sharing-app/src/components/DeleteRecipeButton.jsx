import { useRecipeStore } from './recipeStore';
import { useNavigate } from 'react-router-dom';

const DeleteRecipeButton = ({ id }) => {
  const deleteRecipe = useRecipeStore((s) => s.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteRecipe(id);
    alert('Recipe deleted!');
    navigate('/');
  };

  return (
    <button
      onClick={handleDelete}
      style={{ background: 'red', color: '#fff', padding: 8, marginTop: 10 }}
    >
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
