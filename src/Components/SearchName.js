function SearchName({ item, handleSearchClick })
{
    function handleClick()
    {
        handleSearchClick(item.id)
    }
    return (
        <li onClick={handleClick}>{item.name}</li>
    )
}

export default SearchName