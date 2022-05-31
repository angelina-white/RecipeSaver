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

    console.log(instructions)

    return (
        <div>
            <h2>{ name }</h2>
            {/* <img src={image} /> */}
            <h3>Ingredients:</h3>
            <ul>
                {displayIngredients}
            </ul>
            <ol>
                {displayInstructions}
            </ol>
        </div>
    )
}
export default Recipe