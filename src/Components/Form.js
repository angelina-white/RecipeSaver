import { useState } from "react"

function Form()
{
    //name
    const [name, setName] = useState("")

    function handleName(event)
    {
        setName(event.target.value)
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

    const dispIng = ingList.map((item) =>
    {
        return (
            <li>{item}</li>
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

    const dispInst = instList.map((item) =>
    {
        return (
            <li>{item}</li>
        )
    })

    //submit
    function handleSubmit(event)
    {
        event.preventDefault()
        console.log(name)
        console.log(ingList)
        console.log(instList)
    }


    return (
        <div>
            <h2>Add Recipe:</h2>
            <div>
                <input name="name" onChange={handleName} placeholder="Recipe name" />
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