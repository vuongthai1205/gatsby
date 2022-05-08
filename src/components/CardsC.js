
import { Link } from "gatsby";
import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";

const CardsC = ({data}) => {
    return (
        <Row>
            {data.allMarkdownRemark.edges.map(({ node }, index) => (
                <Col sm={12} md={3} lg={3} key={index} style={{marginBottom: '24px'}}>
                    <Card style={{overflow: "hidden"}}>
                        <img variant="top" src={node.frontmatter.ava.publicURL} alt="" style={{objectFit: "contain", height: 300, padding: 16}}/>
                        <Card.Body>
                            <Link style={{textDecoration: "none", fontSize: 20}} to={node.fields.slug}>{node.frontmatter.title}</Link>
                            <Card.Text style={{ height: '110px' }}>
                                {node.excerpt}
                            </Card.Text>
                            <Button variant="primary">{node.frontmatter.date}</Button>
                            {/* <Button variant="primary"><Link style={{textDecoration: "none", fontSize: 20}} to={node.fields.slug}>{node.frontmatter.title}</Link></Button> */}
                        </Card.Body>
                    </Card>
                </Col>
            ))}
            
        </Row>
        
    )
}

export default CardsC