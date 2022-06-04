import { Container, Row, Col } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Breakfast from "./Breakfast"
import Test from "./Test"

function Categories()
{
    return (
        <div class="categoriesContainer">
        <div class="navBarContainer">
          <Container>
            <Row>
              <Col>
                  <li><Link to='breakfast'>Breakfast</Link></li>
              </Col>
            </Row>
          </Container>
        </div>
        </div>
    )
}

export default Categories;