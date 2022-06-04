import { BrowserRouter as Route, Link} from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';

function CatCard({ name })
{
    function handleClick()
    {
        return (
            console.log("click")
        )
    }

    return (
        <span class="catCardContainer" onClick={handleClick}>
            <Container>
                <Row>
                    <Col>
                        <Link class="catNames" to={name}>{name}</Link>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <img class="catImage" src="https://simply-delicious-food.com/wp-content/uploads/2018/10/breakfast-board.jpg" />
                    </Col>
                </Row>
            </Container>
        </span>
    )
}

export default CatCard