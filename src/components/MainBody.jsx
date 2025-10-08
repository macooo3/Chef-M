import { useState } from "react";
import Static from "./StaticFront";
import ClaudeRecipe from "./ClaudeRecipe";
import IngredientList from "./IngredientList";

export default function Main() {
  const [ingredients, setIngredients] = useState([]);
  const [recipeShown, setRecipeShown] = useState(false);

  const ingredientList = ingredients.map((food) => <li key={food}>{food}</li>);

  const addIngredient = function (formData) {
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIng) => [...prevIng, newIngredient]);
  };

  const toggleShowRecipe = function () {
    setRecipeShown((prevShow) => !prevShow);
  };

  return (
    <main>
      <Static addIngredient={addIngredient} />
      <IngredientList
        ingredients={ingredients.length}
        ingredientList={ingredientList}
        toggleRecipe={toggleShowRecipe}
      />
      {recipeShown && <ClaudeRecipe />}
    </main>
  );
}
