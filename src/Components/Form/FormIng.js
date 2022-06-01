function FormIng({item, removeIng})
{

    function handleClick()
    {
        removeIng(item)
    }

    return (
        <div>
            <h3>{item}</h3>
            <button onClick={handleClick}>X</button>
        </div>
    )
}

export default FormIng