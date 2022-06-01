import { useState } from "react"
import RecipeList from "./RecipeList"
import DisplayRecipe from "./DisplayRecipe"
import { Container, Row, Col } from 'react-bootstrap';

function Home({ recipeList })
{
    //click on recipe that is listed
    const [clickedId, setClickedId] = useState("")
    const handleRecipeClick = (id) =>
    {
      setClickedId(id)
    }
    
    return (
        <Container>
            <Row>
                <Col>
                    <h1 id="homeTitle">Home</h1>
                </Col>
            </Row>
            <Row>
                <Col md="2">
                        <RecipeList recipeList={ recipeList } handleRecipeClick={ handleRecipeClick }/>
                </Col>
                <Col md="auto">
                    <DisplayRecipe recipeList={ recipeList } clickedId={ clickedId } />
                </Col>
            </Row>
        </Container>
    )
}

export default Home