export default function IngredientList({ingredients, ingredientList, toggleRecipe}) {
     return  ingredients > 0 && (
        <section>
          <h2>Ingredients on hand:</h2>
          <ul className="ingredients-list" aria-live="polite">
            {ingredientList}
          </ul>
          {ingredients > 3 && (
            <div className="get-recipe-container">
              <div>
                <h3>Ready for a recipe?</h3>
                <p>Generate a recipe from your list of ingredients.</p>
              </div>
              <button onClick={toggleRecipe}>Get a recipe</button>
            </div>
          )}
        </section>
      )
}