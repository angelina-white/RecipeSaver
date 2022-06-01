function Recipe({ item })
{
    const {name, image, ingredients, instructions} = item

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

    return (
        <div class="singleRecipeDisplayed">
            <h3 id="dispRecName">{ name }</h3>
            {/* <img src={image} /> */}
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
        </div>
    )
}
export default Recipe