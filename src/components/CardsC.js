
import { Link } from "gatsby";
import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import Icon from "../images/icon.png"

const CardsC = ({data}) => {
    return (
        <Row>
            {data.allMarkdownRemark.edges.map(({ node }, index) => (
                <Col sm={12} md={3} lg={3} key={index} style={{marginBottom: '12px'}}>
                    <Card style={{overflow: "hidden"}}>
                        <img variant="top" src={Icon} width={200} height={300}/>
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