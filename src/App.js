import './App.css';
import { useEffect, useState } from "react";
import RecipeMain from "./Components/RecipeMain/RecipeMain";
import Categories from "./Components/Categories";
import Form from "./Components/Form/Form";
import Home from "./Components/Home";
import Search from "./Components/Search/Search";
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Stack } from 'react-bootstrap';
import SyncLoader from "react-spinners/SyncLoader";
import { gsap } from "gsap";

function App() 
{
  // loading screen
  const [loading, setLoading] = useState(false);
  useEffect(() =>
  {
    setLoading(true)
    setTimeout(() =>
    {
      setLoading(false)
    }, 1000)
  }, [])

  //fade in
  useEffect(() =>
  {
    setTimeout(() =>
    {
      gsap.from(".homePage", {duration: 1, opacity: 0});
    }, 1010)
  }, [])

  //fetch data from database
  const [recipeList, setRecipeList] = useState([]);
  useEffect(() =>
  {
    fetch("http://localhost:3000/recipes")
    .then(resp => resp.json())
    .then(setRecipeList)
  }, [])

  //add recipe from form
  const addRecipe = (item) =>
  {
    setRecipeList([...recipeList, item])
  }

  //remove recipe
  const removeRecipe = (id) =>
  {
    const filteredList = recipeList.filter((item) => item.id !== id)
    setRecipeList(filteredList)
  }


  return (
    <div className="App">

    {loading ? <div id="loader" ><SyncLoader color={"#FFB5D4"} loading={loading} size={30} /></div> :
    <div>
      <div class="titleContainer">
        <Container>
          <Row>
            <Col>
              <h1 id="title">Recipe Saver</h1>
            </Col>
          </Row>
        </Container>
      </div>
      <Router>
        <div class="navBarContainer">
          <Container>
            <Row>
              <Col>
                <Stack direction="horizontal" gap={3}>
                  <li class="navLinks"><Link className="links" to='/'>Home</Link></li>
                  <li class="navLinks"><Link className="links" to='recipes'>Recipes</Link></li>
                  <li class="navLinks"><Link className="links" to='categories'>Categories</Link></li>
                  <li class="navLinks"><Link className="links" to='form'>Add Recipe</Link></li>
                  <li class="navLinks"><Link className="links" to='search'>Search</Link></li>
                </Stack>
              </Col>
            </Row>
          </Container>
        </div>
            
        <Routes>
          <Route path='/' element={ <Home />} />
          <Route path='/recipes' element={ <RecipeMain recipeList={ recipeList } removeRecipe={ removeRecipe }/>} />
          <Route path='/categories' element={ <Categories />} />
          <Route path='/form' element={ <Form addRecipe={ addRecipe }/>} />
          <Route path='/search' element={ <Search recipeList={ recipeList }/>} />
        </Routes>
      </Router>
    </div>
    }
    </div>
  );
}

export default App;
