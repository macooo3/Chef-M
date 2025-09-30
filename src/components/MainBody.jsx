import { useState } from "react";

export default function Main() {
  const [ingredients, setIngredients] = useState([]);
  function handleClick() {
    console.log("i was clicked");
  }

  const ingredientList = ingredients.map((food) => <li key={food}>{food}</li>);

  const addIngredient = function (formData) {
    const newIngredient = formData.get("ingredient");
    setIngredients(prevIng => [...prevIng, newIngredient])
    
  };

  return (
    <main>
      <form action={addIngredient}  className="add-ingredient-form">
        <input
          aria-label="Add ingredient"
          type="text"
          placeholder="e.g beef"
          name="ingredient"
        ></input>
        <button>Add Ingredients</button>
      </form>
      <ul>{ingredientList}</ul>
    </main>
  );
}
