import RecipeName from "./RecipeName"

function RecipeList({ recipeList, handleRecipeClick })
{
    const nameList = recipeList.map((item) =>
    {
        return (
            <RecipeName id={ item.id } item={ item.name } handleRecipeClick={ handleRecipeClick }/>
        )
    })

    return (
        <div>
            <h2>List of recipes</h2>
            <ul>
                {nameList}
            </ul>
        </div>
    )
}

export default RecipeList