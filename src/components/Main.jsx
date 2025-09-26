export default function Main() {

function handleClick() {
  console.log('i was clicked')
}

  return (
    <main>
      <form className="add-ingredient-form">
        <input aria-label="Add ingredient" type="text" placeholder="e.g beef"></input>
        <button onClick={handleClick}>Add Ingredients</button>
      </form>
    </main>
  );
}
