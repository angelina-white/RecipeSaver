import { Stack } from 'react-bootstrap';

function FormInst({item, removeInst})
{

    function handleClick()
    {
        removeInst(item)
    }

    return (
        <li class="instItem">
            <Stack direction="horizontal">
                <h3>{item}</h3>
                <button class="xButton" onClick={handleClick}>X</button>
            </Stack>
        </li>
    )
}

export default FormInst