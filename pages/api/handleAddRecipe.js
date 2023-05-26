import axios from 'axios';

const HandleAddRecipe = async (recipeData, setRecipeData, router) => {
    try {
        await axios.post(
            'https://rekrutacja-7585d-default-rtdb.europe-west1.firebasedatabase.app/recipes.json',
            recipeData
        );
        setRecipeData({
            name: '',
            imageUrl: '',
            ingredients: [{ name: '', quantity: '' }],
            instructions: '',
        });
        router.push('/');
    } catch (error) {
        console.error(error);
    }
};

export default HandleAddRecipe;