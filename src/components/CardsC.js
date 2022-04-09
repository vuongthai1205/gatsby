import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";

const CardsC = () => {
    return (
        <Row>
            <Col sm={12} md={3} lg={3}>
                <Card>
                    <Card.Img variant="top" src="./static/images/advert-2.png" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col sm={12} md={3} lg={3}>
                <Card>
                    <Card.Img variant="top" src="./static/images/advert-2.png" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col sm={12} md={3} lg={3}>
                <Card>
                    <Card.Img variant="top" src="./static/images/advert-2.png" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col sm={12} md={3} lg={3}>
                <Card>
                    <Card.Img variant="top" src="./static/images/advert-2.png" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </Col>
            
        </Row>
        
    )
}

export default CardsC