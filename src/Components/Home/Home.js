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
        <div className="display">
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
                    <Col md="10">
                        <DisplayRecipe recipeList={ recipeList } clickedId={ clickedId } />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home