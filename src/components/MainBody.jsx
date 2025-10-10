import { useState } from "react";
import Static from "./StaticFront";
import ClaudeRecipe from "./ClaudeRecipe";
import IngredientList from "./IngredientList";
import { getRecipeFromMistral } from "../ai";

export default function Main() {
  const [ingredients, setIngredients] = useState(['cheese', 'main spices', 'chicken', 'bread']);
  const [recipeShown, setRecipeShown] = useState(false);

  const addIngredient = function (formData) {
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIng) => [...prevIng, newIngredient]);
  };

  const getRecipe = async () => {
  const recipeMarkdown = await getRecipeFromMistral(ingredients)
  console.log(recipeMarkdown)
  };

  return (
    <main>
      <Static addIngredient={addIngredient} />
      {ingredients.length > 0 && (
        <IngredientList
          ingredients={ingredients}
          getRecipe={getRecipe}
        />
      )}
      {recipeShown && getRecipeFromMistral()}
    </main>
  );
}
