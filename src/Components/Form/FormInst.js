function FormInst({item, removeInst})
{

    function handleClick()
    {
        removeInst(item)
    }

    return (
        <div>
            <h3>{item}</h3>
            <button onClick={handleClick}>X</button>
        </div>
    )
}

export default FormInst