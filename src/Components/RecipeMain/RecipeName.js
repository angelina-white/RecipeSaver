function RecipeName({ id, item, handleRecipeClick })
{
    function handleClick()
    {
        handleRecipeClick(id)
    }

    return (
        <li class="recipeName" onClick={handleClick}>{ item }</li>
    )
}

export default RecipeName