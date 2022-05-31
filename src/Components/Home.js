import { useEffect, useState } from "react"
import RecipeList from "./RecipeList"
import DisplayRecipe from "./DisplayRecipe"

function Home({ recipeList })
{
    //click on recipe that is listed
    const [clickedId, setClickedId] = useState("")
    const handleRecipeClick = (id) =>
    {
      setClickedId(id)
    }
    
    return (
        <div>
            <h1>Home</h1>
            <RecipeList recipeList={ recipeList } handleRecipeClick={ handleRecipeClick }/>
            <DisplayRecipe recipeList={ recipeList } clickedId={ clickedId } />
        </div>
    )
}

export default Home