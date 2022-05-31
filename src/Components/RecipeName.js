function RecipeName({ id, item, handleRecipeClick })
{
    function handleClick()
    {
        handleRecipeClick(id)
    }

    return (
        <li onClick={handleClick}>{ item }</li>
    )
}

export default RecipeName