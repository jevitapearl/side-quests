export default function Content(){
  function addIngredient(){
    console.log("Click")
  }

  let ingredients = [
    "Chicken", "Oregano", "Tomato"
  ]

  const displayIngredients = ingredients.map(ingredient => (
    <li key={ingredient}>{ingredient}</li>
    )  
  )

  return (
    <main>
      <form className="ingredient-form" action="">
        <input className="user-input-box" type="text" placeholder="Enter the ingredients you have..." />
        <button className="btn btn-black" onClick={addIngredient}>+Add ingredients</button>
      </form>

      <ul>
        {displayIngredients}
      </ul>
    </main>
  )
}