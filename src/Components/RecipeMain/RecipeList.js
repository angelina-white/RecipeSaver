import RecipeName from "./RecipeName"
import { Stack } from 'react-bootstrap';
import { useState } from "react";

function RecipeList({ recipeList, handleRecipeClick, removedItem })
{

    const filteredList = recipeList.filter((item) => item.id !== removedItem)

    const dispList = filteredList.map((item) =>
    {
        return (
            <RecipeName id={ item.id } item={ item.name } handleRecipeClick={ handleRecipeClick }/>
        )
    })

    return (
        <div class="recipeListContainer">
                <Stack gap={3}>
                    {dispList}
                </Stack>
        </div>
    )
}

export default RecipeList