export default function IngredientList({ ingredients, toggleShowRecipe }) {
  const ingredientListItems = ingredients.map((food) => (
    <li key={food}>{food}</li>
  ));

  return (
    ingredients.length > 0 && (
      <section>
        <h2>Ingredients on hand:</h2>
        <ul className="ingredients-list" aria-live="polite">
          {ingredientListItems}
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
    )
  );
}
