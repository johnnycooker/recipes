import { useState } from 'react';
import HandleAddRecipe from '@/pages/api/handleAddRecipe';
import { useRouter } from 'next/router';
import Button from './UI/Button';
import Layout from './UI/Layout';

const AddRecipe = () => {
    const router = useRouter();

    const [recipeData, setRecipeData] = useState({
        name: '',
        imageUrl: '',
        ingredients: [{ name: '', quantity: '' }],
        instructions: '',
    });

    const handleInputChange = (e, id) => {
        const { name, value } = e.target;
        const ingredients = [...recipeData.ingredients];
        ingredients[id] = { ...ingredients[id], [name]: value };
        setRecipeData({ ...recipeData, ingredients });
    };

    const handleAddIngredient = () => {
        setRecipeData({
            ...recipeData,
            ingredients: [...recipeData.ingredients, { name: '', quantity: '' }],
        });
    };

    const handleRemoveIngredient = () => {
        const ingredients = [...recipeData.ingredients];
        ingredients.pop();
        setRecipeData({ ...recipeData, ingredients });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            await HandleAddRecipe(recipeData, setRecipeData, router);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <Layout>
                <div className="flex flex-col justify-center content-center">
                    <div className="flex justify-center mt-[1rem] text-2xl text-[#392a56]">
                        Dodaj przepis
                    </div>
                    <form
                        className="h-full mt-10 flex justify-center content-center"
                        onSubmit={handleFormSubmit}
                    >
                        <div className="flex flex-col bg-[#65386f] border-2 border-[#392a56] rounded-md w-fit px-10 py-5 bg-opacity-30 mb-8">
                            <label className="bg-[#392a56] py-4 gap-[5rem] px-4 rounded-md bg-opacity-80 border-[2px] border-[#392a56] text-white text-md">
                                Nazwa potrawy:
                                <input
                                    required
                                    className="w-[31rem] ml-4 rounded-md border-[1px] border-[#392a56] text-black pl-2"
                                    type="text"
                                    name="name"
                                    value={recipeData.name}
                                    onChange={(e) =>
                                        setRecipeData({ ...recipeData, name: e.target.value })
                                    }
                                />
                            </label>
                            <br />
                            <label className="bg-[#392a56] py-4 gap-[5rem] px-4 rounded-md bg-opacity-80 border-[2px] border-[#392a56] text-white text-md">
                                URL do zdjęcia potrawy:
                                <input
                                    required
                                    className="w-[27.4rem] ml-4 rounded-md border-[1px] border-[#392a56] text-black pl-2"
                                    type="text"
                                    name="imageUrl"
                                    value={recipeData.imageUrl}
                                    onChange={(e) =>
                                        setRecipeData({ ...recipeData, imageUrl: e.target.value })
                                    }
                                />
                            </label>
                            <br />
                            <div className="bg-[#392a56] py-4 gap-[5rem] px-4 rounded-md bg-opacity-80 border-[2px] border-[#392a56] text-md">
                                {recipeData.ingredients.map((ingredient, id) => (
                                    <div key={id} className="py-2">
                                        <label className="py-2 text-white">
                                            Nazwa składnika:
                                            <input
                                                required
                                                className="w-[18.5rem] ml-4 rounded-md border-[1px] border-[#392a56] text-black pl-2"
                                                type="text"
                                                name="name"
                                                value={ingredient.name}
                                                onChange={(e) => handleInputChange(e, id)}
                                            />
                                        </label>
                                        <label className="ml-2 text-white">
                                            Ilość (gram):
                                            <input
                                                required
                                                className="w-[5rem] ml-4 rounded-md border-[1px] border-[#392a56] text-black pl-2"
                                                type="number"
                                                name="quantity"
                                                value={ingredient.quantity}
                                                onChange={(e) => handleInputChange(e, id)}
                                            />
                                        </label>
                                    </div>
                                ))}
                                <div className="flex gap-4 items-center">
                                    <button
                                        className="w-[8rem] bg-[#65386f] border-[2px] rounded-md border-[#392a56] mt-4 py-1 px-2 text-white"
                                        type="button"
                                        onClick={handleAddIngredient}
                                    >
                                        Dodaj składnik
                                    </button>
                                    {recipeData.ingredients.length > 1 && (
                                        <button
                                            className="w-[8rem] bg-[#65386f] border-[2px] rounded-md border-[#392a56] mt-4 py-1 px-2 text-white"
                                            type="button"
                                            onClick={handleRemoveIngredient}
                                        >
                                            Usuń składnik
                                        </button>
                                    )}
                                </div>
                            </div>
                            <br />
                            <div className="bg-[#392a56] gap-[5rem] rounded-md bg-opacity-80 border-[2px] border-[#392a56] text-md">
                                <label className="py-4  gap-[1rem] px-4 rounded-md flex flex-col text-white">
                                    Sposób przygotowania:
                                    <textarea
                                        required
                                        className="ml-0 rounded-md border-[1px] border-[#392a56] h-[15rem] w-[39rem] text-black px-2 py-1"
                                        name="instructions"
                                        value={recipeData.instructions}
                                        onChange={(e) =>
                                            setRecipeData({ ...recipeData, instructions: e.target.value })
                                        }
                                    />
                                </label>
                            </div>
                            <Button type="submit">Dodaj przepis</Button>
                        </div>
                    </form>
                </div>
            </Layout>
        </>
    );
};

export default AddRecipe;