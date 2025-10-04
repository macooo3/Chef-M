import { useState } from "react";
import Static from "./StaticFront";
import RecipeInst from "./Recipe";

export default function Main() {
  const [ingredients, setIngredients] = useState([
    "chicken",
    "brocolli",
    "cheese",
    "peppers",
  ]);
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
    <Static/>
      {ingredients.length > 0 && (
        <section>
          <h2>Ingredients on hand:</h2>
          <ul className="ingredients-list" aria-live="polite">
            {ingredientList}
          </ul>
          {ingredients.length > 3 && (
            <div className="get-recipe-container">
              <div>
                <h3>Ready for a recipe?</h3>
                <p>Generate a recipe from your list of ingredients.</p>
              </div>
              <button onClick={toggleShowRecipe}>Get a recipe</button>
            </div>
          )}
        </section>
      )}
     <RecipeInst/>
    </main>
  );
}
