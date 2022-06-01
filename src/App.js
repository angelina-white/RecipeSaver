import './App.css';
import { useEffect, useState } from "react";
import Home from "./Components/Home/Home";
import Form from "./Components/Form/Form";
import Search from "./Components/Search/Search";
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Stack } from 'react-bootstrap';

function App() 
{

  const [recipeList, setRecipeList] = useState([])

  useEffect(() =>
  {
    fetch("http://localhost:3000/recipes")
    .then(resp => resp.json())
    .then(setRecipeList)
  }, [])


  return (
    <div className="App">
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
                  <li class="navLinks"><Link to='/'>Home</Link></li>
                  <li class="navLinks"><Link to='form'>Add Recipe</Link></li>
                  <li class="navLinks"><Link to='search'>Search</Link></li>
                </Stack>
              </Col>
            </Row>
          </Container>
        </div>
            
        <Routes>
          <Route path='/' element={ <Home recipeList={ recipeList }/>} />
          <Route path='/form' element={ <Form />} />
          <Route path='/search' element={ <Search recipeList={ recipeList }/>} />
        </Routes>
      </Router>
    </div>

    
  );
}

export default App;
