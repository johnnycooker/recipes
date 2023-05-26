import RecipeList from "@/components/RecipeList";
import Head from "next/head";

const RecipeListPage = () => {

  return (
    <>
      <Head>
        <title>Przepisy</title>
      </Head>
      <RecipeList />
    </>
  );
};

export default RecipeListPage;