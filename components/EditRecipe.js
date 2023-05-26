import { useState } from 'react';
import Button from '@/components/UI/Button';

const EditRecipe = ({ recipe, onSaveChanges }) => {
    const [editedRecipe, setEditedRecipe] = useState(recipe);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedRecipe({ ...editedRecipe, [name]: value });
    };

    const handleIngredientChange = (e, id) => {
        const { name, value } = e.target;
        const ingredients = [...editedRecipe.ingredients];
        ingredients[id] = { ...ingredients[id], [name]: value };
        setEditedRecipe({ ...editedRecipe, ingredients });
    };

    const handleAddIngredient = () => {
        const newIngredient = { name: '', quantity: '' };
        setEditedRecipe({
            ...editedRecipe,
            ingredients: [...editedRecipe.ingredients, newIngredient],
        });
    };

    const handleRemoveIngredient = () => {
        const ingredients = [...editedRecipe.ingredients];
        ingredients.pop();
        setEditedRecipe({ ...editedRecipe, ingredients });
    };

    const handleSaveChanges = () => {
        onSaveChanges(editedRecipe);
    };

    return (
        <div className="flex flex-col justify-center content-center">
            <div className="flex  justify-center mt-[1rem] text-2xl text-[#392a56]">
                Edytuj przepis
            </div>
            <form className="h-full mt-10 flex justify-center content-center">
                <div className="flex flex-col bg-[#65386f] border-2 border-[#392a56] rounded-md w-fit px-10 py-5 bg-opacity-30 mb-8">
                    <label className="bg-[#392a56] py-4 gap-[5rem] px-4 rounded-md bg-opacity-80 border-[2px] border-[#392a56] text-white text-md">
                        Nazwa potrawy:
                        <input
                            required
                            className="w-[31rem] ml-4 rounded-md border-[1px] border-[#392a56] text-black pl-2"
                            type="text"
                            name="name"
                            value={editedRecipe.name}
                            onChange={handleInputChange}
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
                            key={Math.random}
                            value={editedRecipe.imageUrl}
                            onChange={handleInputChange}
                        />
                    </label>
                    <br />
                    <div className="bg-[#392a56] py-4 gap-[5rem] px-4 rounded-md bg-opacity-80 border-[2px] border-[#392a56] text-md">
                        {editedRecipe.ingredients.map((ingredient, id) => (
                            <div key={id} className="py-2">
                                <label className="py-2 text-white">
                                    Nazwa składnika:
                                    <input
                                        required
                                        className="w-[18.5rem] ml-4 rounded-md border-[1px] border-[#392a56] text-black pl-2"
                                        type="text"
                                        name="name"
                                        value={ingredient.name}
                                        onChange={(e) => handleIngredientChange(e, id)}
                                    />
                                </label>
                                <label className="ml-2 text-white">
                                    Ilość (gram):
                                    <input
                                        required
                                        className="w-[5rem] ml-4 rounded-md border-[1px] border-[#392a56] text-black pl-2"
                                        type="text"
                                        name="quantity"
                                        value={ingredient.quantity}
                                        onChange={(e) => handleIngredientChange(e, id)}
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
                            {editedRecipe.ingredients.length > 1 && (
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
                                value={editedRecipe.instructions}
                                onChange={handleInputChange}
                            />
                        </label>
                    </div>
                    <Button type="button" onClick={() => handleSaveChanges()}>Zapisz zmiany</Button>
                </div>
            </form>
        </div>
    );
};

export default EditRecipe;