import axios from 'axios';

const HandleDeleteRecipe = async (recipeId, setRecipes, recipes) => {
    try {
        await axios.delete(
            `https://rekrutacja-7585d-default-rtdb.europe-west1.firebasedatabase.app/recipes/${recipeId}.json`
        );
        setRecipes(recipes.filter((recipe) => recipe.id !== recipeId));
    } catch (error) {
        console.error(error);
    }
};

export default HandleDeleteRecipe;