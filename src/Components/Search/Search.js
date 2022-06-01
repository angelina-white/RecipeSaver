import { useState } from "react"
import Recipe from "../Recipe"
import SearchName from "./SearchName"

function Search({ recipeList })
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

    //search 
    const [inputName, setInputName] = useState("")
    const handleSearch = (input) =>
    {
        setInputName(input)
    }

    const searchItem = recipeList.filter((item) =>
    {
        return (
        item.name.toLowerCase().includes(inputName.toLowerCase())
        )
    })

    const [clickedId, setClickedId] = useState("")
    const handleSearchClick = (input) =>
    {
        setClickedId(input)
    }

    const clickItem = recipeList.filter((item) =>
    {
        return (
        item.id == clickedId
        )
    })

    const displayFull = clickItem.map((item) =>
    {
        return (
            <Recipe item={item} />
        )
    })



    const displayedList = searchItem.map((item) =>
    {
        return (
            <SearchName item={item} handleSearchClick={handleSearchClick}/>
        )
    })


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter recipe here..." onChange={handleChange} />
                <button>Search</button>
            </form>
            <ul>
                {displayedList}
            </ul>
            {displayFull}
        </div>
    )
}
export default Search