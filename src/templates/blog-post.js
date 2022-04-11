import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { Col, Container, Row } from "react-bootstrap";

const BlogPost = ({ data }) => {
    const post = data.markdownRemark;
    return (
        <Container>
            <Layout>
              <Row>
                <title>{post.frontmatter.title}</title>
                <h1>{post.frontmatter.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
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

