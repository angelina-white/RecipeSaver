import Recipe from "../Recipe"
import {useState} from "react"

function DisplayRecipe({ recipeList, clickedId, initialBool })
{
    const initialFilt = recipeList.filter((item) => item.id == 1)

    const initialDisp = initialFilt.map((item) =>
    {
        return (
            <Recipe item={item} />
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
            <Recipe item={ item } />
        )
    })

    return(
        <div class="displayRecipeContainer">
            { initialBool ? initialDisp : displayItem }
        </div>
    )
}
export default DisplayRecipe