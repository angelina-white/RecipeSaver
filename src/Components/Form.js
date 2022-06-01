import { useState } from "react"
import FormIng from "./FormIng"
import FormInst from "./FormInst"

function Form()
{
    //name
    const [name, setName] = useState("")

    function handleName(event)
    {
        setName(event.target.value)
    }

    //image link
    const [imageLink, setImageLink] = useState("")
    function handleImage(event)
    {
        setImageLink(event.target.value)
    }

    //ingredient
    const [ingredient, setIngredient] = useState("")
    function handleIngredient(event)
    {
        setIngredient(event.target.value)
    }

    const [ingList, setIngList] = useState([])
    function addIng()
    {
        setIngList([...ingList, ingredient])
    }

    const removeIng = (name) =>
    {
        const filteredIng = ingList.filter((item) =>
        {
            return item !== name
        })
        setIngList(filteredIng)
    }

    const dispIng = ingList.map((item) =>
    {
        return (
            <FormIng item={item} removeIng={removeIng}/>
        )
    })

    //instructions
    const [instruction, setInstruction] = useState("")

    function handleInstruction(event)
    {
        setInstruction(event.target.value)
    }

    const [instList, setInstList] = useState([])
    function addInst()
    {
        setInstList([...instList, instruction])
    }

    const removeInst = (name) =>
    {
        const filteredInst = instList.filter((item) =>
        {
            return item !== name
        })
        setInstList(filteredInst)
    }

    const dispInst = instList.map((item) =>
    {
        return (
            <FormInst item={item} removeInst={removeInst}/>
        )
    })

    //submit
    function handleSubmit(event)
    {
        event.preventDefault()
        
        const newObj = 
        {
            name: name,
            image: imageLink,
            ingredients: ingList, 
            instructions: instList
        }

        console.log(newObj)

        fetch("http://localhost:3000/recipes",
        {
            method: "POST",
            headers:
            {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newObj)
        })
        .then(resp => resp.json())
        .then((data) => console.log(data))

    }


    return (
        <div>
            <h2>Add Recipe:</h2>
            <div>
                <input name="name" onChange={handleName} placeholder="Recipe name" />
                <input name="image" onChange={handleImage} placeholder="Image link" />
                <p>Ingredients:</p>
                <input name="ingredient" onChange={handleIngredient} placeholder="Ingredient" />
                <button onClick={addIng}>Add ingredient</button>
                <ul>
                    {dispIng}
                </ul>
                <p>Instructions:</p>
                <input name="instruction" onChange={handleInstruction} placeholder="Instuction" />
                <button onClick={addInst}>Add instruction</button>
                <ul>
                    {dispInst}
                </ul>
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    )
}

export default Form