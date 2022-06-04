import Recipe from "../Recipe"
function DisplayRecipe({ recipeList, clickedId })
{

    const clickedItem = recipeList.filter((item) =>
    {
        return (
        item.id === clickedId
        )
    })

    const displayItem = clickedItem.map((item) =>
    {
        return (
            <Recipe item={ item } />
        )
    })

    return(
        <div class="displayRecipeContainer">
            {displayItem}
        </div>
    )
}
export default DisplayRecipe