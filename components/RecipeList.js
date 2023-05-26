import { useEffect, useState } from 'react';
import Button from '@/components/UI/Button';
import Layout from '@/components/UI/Layout';
import EditRecipe from '@/components/EditRecipe';
import HandleDisplayRecipes from '@/pages/api/handleDisplayRecipes';
import HandleDeleteRecipe from '@/pages/api/handleDeleteRecipe';
import HandleEditRecipe from '@/pages/api/handleEditRecipe';

const RecipeList = () => {
    const [recipes, setRecipes] = useState([]);
    const [editedRecipe, setEditedRecipe] = useState(null);

    useEffect(() => {
        fetchRecipes();
    }, []);

    const fetchRecipes = async () => {
        try {
            await HandleDisplayRecipes(setRecipes);
        } catch (error) {
            console.error(error);
        }
    };

    const handleDeleteRecipe = async (recipeId) => {
        try {
            await HandleDeleteRecipe(recipeId, setRecipes, recipes);
        } catch (error) {
            console.error(error);
        }
    };

    const handleEditRecipe = (recipe) => {
        setEditedRecipe(recipe);
    };

    const handleSaveChanges = async (updatedRecipe) => {
        try {
            await HandleEditRecipe(updatedRecipe, setEditedRecipe, fetchRecipes);
        } catch (error) {
            console.error(error);
        }
    };

    if (recipes.length === 0) {
        return (
            <Layout>
                <div className="flex justify-center items-center h-full">
                    <p className="text-xl font-semibold mt-[24rem]">Nie masz jeszcze żadnych przepisów.</p>
                </div>
            </Layout>
        );
    }

    if (editedRecipe) {
        return (
            <Layout>
                <EditRecipe recipe={editedRecipe} onSaveChanges={handleSaveChanges} />
            </Layout>
        );
    }

    return (
        <Layout>
            <div className='w-3/5 flex flex-col mx-auto'>
                {recipes.map((recipe) => (
                    <div className='flex flex-col rounded-md w-fit px-10 py-5 bg-opacity-30 mb-8' key={recipe.id}>
                        <div className='flex justify-center text-4xl font-semibold mb-[3rem] text-[#392a56] uppercase'>{recipe.name}</div>
                        <div className='w-full flex flex-row'>
                            <div className='w-2/3'>
                                <div className='text-xl mb-2 font-bold'>Składniki:</div>
                                <ul>
                                    {recipe.ingredients.map((ingredient, index) => (
                                        <li key={index} className='font-semibold'>
                                            {ingredient.name} - {ingredient.quantity} g
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <img className='w-[22rem] h-[15rem] ml-4 mb-4' src={recipe.imageUrl} alt={recipe.name} />
                        </div>
                        <div className='mt-6 text-justify'>
                            <p>{recipe.instructions}</p>
                        </div>
                        <div className='flex gap-4 pt-4 mb-8'>
                            <Button type="button" onClick={() => handleDeleteRecipe(recipe.id)}>Usuń</Button>
                            <Button type="button" onClick={() => handleEditRecipe(recipe)}>Edytuj</Button>
                        </div>
                    </div>
                ))}
            </div>
        </Layout>
    );
};

export default RecipeList;