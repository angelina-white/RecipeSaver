import { Stack } from 'react-bootstrap';

function FormIng({item, removeIng})
{

    function handleClick()
    {
        removeIng(item)
    }

    return (
        <div class="ingItem">
            <Stack direction="horizontal" >
                <h3>{item}</h3>
                <button class="xButton" onClick={handleClick}>X</button>
            </Stack>
        </div>
    )
}

export default FormIng