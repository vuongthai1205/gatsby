import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import {Col, Container, Row } from "react-bootstrap";
import Sidebar from "../components/sidebar";

const BlogPost = ({ data }) => {
    const post = data.markdownRemark;
    return (
        <Container>
            <Layout>
              <Row>
                <Col sm={9}>
                  <title>{post.frontmatter.title}</title>
                  <h1>{post.frontmatter.title}</h1>
                  <div style={{textAlign: "justify"}} dangerouslySetInnerHTML={{ __html: post.html }} />
                </Col>
                <Col sm={3}>
                  <Sidebar/>
                </Col>
              </Row>
            </Layout>
        </Container>
    )
}

export default BlogPost

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;

