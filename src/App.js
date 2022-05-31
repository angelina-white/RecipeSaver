import './App.css';
import { useEffect, useState } from "react"
import Home from "./Components/Home"
import Form from "./Components/Form"
import Favorites from "./Components/Favorites"
import Search from "./Components/Search"
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"

function App() 
{

  const [recipeList, setRecipeList] = useState([])

  useEffect(() =>
  {
    fetch("http://localhost:3000/recipes")
    .then(resp => resp.json())
    .then(setRecipeList)
  }, [])


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
              <li><Link to='form'>Add Recipe</Link></li>
              <li><Link to='favorites'>Favorites</Link></li>
              <li><Link to='search'>Search</Link></li>
            </ul>
          </nav>
          <Routes>
            <Route path='/' element={ <Home recipeList={ recipeList }/>} />
            <Route path='/form' element={ <Form />} />
            <Route path='/favorites' element={ <Favorites />} />
            <Route path='/search' element={ <Search recipeList={ recipeList }/>} />
          </Routes>
        </Router>
    </div>

    
  );
}

export default App;
