import axios from 'axios';

const HandleEditRecipe = async (updatedRecipe, setEditedRecipe, fetchRecipes) => {
    try {
        await axios.put(
            `https://rekrutacja-7585d-default-rtdb.europe-west1.firebasedatabase.app/recipes/${updatedRecipe.id}.json`,
            updatedRecipe
        );
        setEditedRecipe(null);
        fetchRecipes();
    } catch (error) {
        console.error(error);
    }
};

export default HandleEditRecipe;