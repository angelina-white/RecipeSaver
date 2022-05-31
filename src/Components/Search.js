import { useState } from "react"

function Search({ handleSearch })
{
    const [userInput, setUserInput] = useState("")

    function handleChange(event)
    {
        setUserInput(event.target.value)
    }

    function handleSubmit(event)
    {
        event.preventDefault()
        handleSearch(userInput)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter recipe here..." onChange={handleChange} />
                <button>Search</button>
            </form>
        </div>
    )
}
export default Search