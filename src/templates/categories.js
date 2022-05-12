import React from "react";
import Layout from "../components/Layout";
import { graphql, Link } from "gatsby";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import { Row } from "react-bootstrap";

const Categories =  ({ data, pageContext }) => {
  const { category } = pageContext;
  const categoryEdges = data.allMarkdownRemark.edges.filter(({ node }) =>
    node.frontmatter.categories.includes(category)
  );

  return (
    <Layout>
      <h1>Chuyên mục {category}</h1>
      <Row>

        {categoryEdges.map(({ node }, index) => (
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
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
    ) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "DD/MM/YYYY")
            categories
            ava {
              publicURL
            }
          }
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }
`;

export default Categories