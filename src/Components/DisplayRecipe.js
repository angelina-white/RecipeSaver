import Recipe from "./Recipe"
import { useState } from "react"

function DisplayRecipe({ recipeList, clickedId, searchItem })
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
        <div>
            <h1>Recipe:</h1>
            {displayItem}
        </div>
    )
}
export default DisplayRecipe