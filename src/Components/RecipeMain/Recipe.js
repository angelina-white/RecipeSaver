function Recipe({ item, removeRecipe })
{
    const {id, name, image, ingredients, instructions} = item

    //shows list of ingredients
    const displayIngredients = ingredients.map((item) =>
    {
        return <li>{item}</li>
    })

    // shows list of instructions
    const displayInstructions = instructions.map((item) =>
    {
        return <li>{item}</li>
    })

    //deletes recipe
    function handleDelete()
    {
        fetch(`http://localhost:3000/recipes/${id}`,
        {
            method: "DELETE"
        })
        .then(resp => resp.json())
        .then(()=> removeRecipe(id))
    }

    return (
        <div class="singleRecipeDisplayed">
            <h3 id="dispRecName">{ name }</h3>
            <img class="recipeImage" src={image} />
            <div class="ingredients">
                <h4>Ingredients:</h4>
                <ul>
                    {displayIngredients}
                </ul>
            </div>
            <h4>Instructions:</h4>
            <ol>
                {displayInstructions}
            </ol>
            <button class="deleteRecipe" onClick={handleDelete}>Delete</button>
        </div>
    )
}
export default Recipe