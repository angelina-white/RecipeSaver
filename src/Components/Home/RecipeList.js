import RecipeName from "./RecipeName"
import { Stack } from 'react-bootstrap';

function RecipeList({ recipeList, handleRecipeClick })
{
    const nameList = recipeList.map((item) =>
    {
        return (
            <RecipeName id={ item.id } item={ item.name } handleRecipeClick={ handleRecipeClick }/>
        )
    })

    return (
        <div class="recipeListContainer">
                <h1 id="recipeListTitle">Recipes</h1>
                <Stack gap={3}>
                    {nameList}
                </Stack>
        </div>
    )
}

export default RecipeList