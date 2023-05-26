import axios from 'axios';

const HandleDisplayRecipes = async (setRecipes) => {
    try {
        const response = await axios.get(
            'https://rekrutacja-7585d-default-rtdb.europe-west1.firebasedatabase.app/recipes.json'
        );
        const fetchedRecipes = Object.entries(response.data).map(([id, recipe]) => ({
            id,
            ...recipe,
        }));
        setRecipes(fetchedRecipes);
    } catch (error) {
        console.error(error);
    }
};

export default HandleDisplayRecipes;