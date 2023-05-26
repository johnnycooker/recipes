import AddRecipe from "@/components/AddRecipe";
import Head from "next/head";

const AddRecipePage = () => {

    return (
        <>
            <Head>
                <title>Dodaj przepis</title>
            </Head>
            <AddRecipe />
        </>
    );
};

export default AddRecipePage;