
import { Link } from "gatsby";
import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";

const CardsC = ({data}) => {
    return (
        <Row>
            

            {data.allMarkdownRemark.edges.map(({ node }, index) => (
                <Col sm={12} md={3} lg={3} key={index} style={{marginBottom: '12px'}}>
                    <Card>
                        <Card.Img variant="top" src="./static/10e2810d55f56cf658b5eeae319aa1aa/12f09/Aspose.Words.337ca8d1-fcb7-4580-8687-60cc44f9d8f0.001.png" />
                        <Card.Body>
                            <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
                            <Card.Text style={{ height: '110px' }}>
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