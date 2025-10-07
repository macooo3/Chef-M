export default function Static(props) {
  return (
    <form action={props.addIngredient} className="add-ingredient-form">
      <input
        aria-label="Add ingredient"
        type="text"
        placeholder="e.g beef"
        name="ingredient"
      ></input>
      <button>Add Ingredients</button>
    </form>
  );
}
