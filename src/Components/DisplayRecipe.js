import Recipe from "./Recipe"

function DisplayRecipe({ clickedItem })
{
    const displayItem = clickedItem.map((item) =>
    {
        return (
            <Recipe item={ item } />
        )
    })

    return(
        <div>
            <h1>Recipe:</h1>
            {displayItem}
        </div>
    )
}
export default DisplayRecipe