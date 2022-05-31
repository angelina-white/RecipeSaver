import './App.css';
import { useEffect, useState } from "react"
import RecipeList from "./Components/RecipeList"
import DisplayRecipe from "./Components/DisplayRecipe"

function App() 
{
  const [recipeList, setRecipeList] = useState([])

  useEffect(() =>
  {
    fetch("http://localhost:3000/recipes")
    .then(resp => resp.json())
    .then(setRecipeList)
  }, [])

  //click on recipe that is listed
  const [clickedId, setClickedId] = useState("")
  const handleRecipeClick = (id) =>
  {
    setClickedId(id)
  }

  const clickedItem = recipeList.filter((item) =>
  {
    return (
      item.id === clickedId
    )
  })

  return (
    <div className="App">
      <h1>Recipe Saver</h1>
      <RecipeList recipeList={ recipeList } handleRecipeClick={ handleRecipeClick }/>
      <DisplayRecipe clickedItem={ clickedItem }/>
    </div>
  );
}

export default App;
