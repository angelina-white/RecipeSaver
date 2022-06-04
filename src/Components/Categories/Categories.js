import { Container, Row, Col } from 'react-bootstrap';
import { BrowserRouter as Route, Link} from "react-router-dom";
import CatCard from "./CatCard"
import Breakfast from "./Breakfast"
import Test from "./Test"

function Categories()
{
    const breakfast="Breakfast"
    return (
        <div class="categoriesContainer">
          <Container>
            <Row>
              <Col>
                  <h1 className="pageTitle">Categories</h1>
              </Col>
            </Row>
            <Row>
              <Col>
                  {/* <button class="categoryNames"><Link to='breakfast'>Breakfast</Link></button> */}
                  <CatCard name={breakfast}/>
              </Col>
            </Row>
          </Container>
        </div>
    )
}

export default Categories;