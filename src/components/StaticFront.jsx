export default function Static() {
    return (
          <form action={addIngredient} className="add-ingredient-form">
        <input
          aria-label="Add ingredient"
          type="text"
          placeholder="e.g beef"
          name="ingredient"
        ></input>
        <button>Add Ingredients</button>
      </form>
    )
}