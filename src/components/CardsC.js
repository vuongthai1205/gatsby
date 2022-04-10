
import { Link } from "gatsby";
import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";

const CardsC = ({data}) => {
    return (
        <Row>
            

            {data.allMarkdownRemark.edges.map(({ node }, index) => (
                <Col sm={12} md={3} lg={3} key={index}>
                    <Card>
                        <Card.Img variant="top" src="./static/images/advert-2.png" />
                        <Card.Body>
                            <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
                            <Card.Text>
                                {node.excerpt}
                            </Card.Text>
                            <Button variant="primary">{node.frontmatter.date}</Button>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
            
        </Row>
        
    )
}

export default CardsC