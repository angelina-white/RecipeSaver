import './App.css';
import { useEffect, useState } from "react"
import Search from "./Components/Search"
import Home from "./Components/Home"
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"

function App() 
{
  // const [recipeList, setRecipeList] = useState([])

  // useEffect(() =>
  // {
  //   fetch("http://localhost:3000/recipes")
  //   .then(resp => resp.json())
  //   .then(setRecipeList)
  // }, [])

  // //search 
  // const [inputName, setInputName] = useState("")
  // const handleSearch = (input) =>
  // {
  //   setInputName(input)
  // }

  // const searchItem = recipeList.filter((item) =>
  // {
  //   return (
  //     item.name.toLowerCase().includes(inputName.toLowerCase())
  //   )
  // })

  // //click on recipe that is listed
  // const [clickedId, setClickedId] = useState("")
  // const handleRecipeClick = (id) =>
  // {
  //   setClickedId(id)
  // }

  return (
    <div className="App">
      {/* <h1>Recipe Saver</h1>
      <Search handleSearch={ handleSearch }/>
      <RecipeList recipeList={ recipeList } handleRecipeClick={ handleRecipeClick }/>
      <DisplayRecipe recipeList={ recipeList } clickedId={ clickedId } searchItem={ searchItem }/> */}
      <Router>
        <h1>Recipe Saver</h1>
          <nav>
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='search'>Search</Link></li>
            </ul>
          </nav>
          <Routes>
            <Route path='/' element={ <Home />} />
            <Route path='/search' element={ <Search />} />
          </Routes>
        </Router>
    </div>

    
  );
}

export default App;
