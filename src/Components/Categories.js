import { Container, Row, Col } from 'react-bootstrap';

function Categories()
{
    return (
        <div class="categoriesContainer">
            <Container>
                <Row>
                    <Col>
                        <h1 className="pageTitle">Categories</h1>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Categories;