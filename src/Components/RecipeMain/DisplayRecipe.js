import Recipe from "./Recipe"

function DisplayRecipe({ recipeList, clickedId, initialBool, removeRecipe })
{
    const initialItem = recipeList.filter((item) => item.id == 1)

    const initialDisp = initialItem.map((item) =>
    {
        return (
            <Recipe item={item} removeRecipe={ removeRecipe } />
        )
    })

    const clickedItem = recipeList.filter((item) =>
    {
        return (
        item.id === clickedId
        )
    })

    const displayItem = clickedItem.map((item) =>
    {
        return (
            <Recipe item={ item } removeRecipe={ removeRecipe }/>
        )
    })

    return(
        <div class="displayRecipeContainer">
            { initialBool ? initialDisp : displayItem }
        </div>
    )
}
export default DisplayRecipe