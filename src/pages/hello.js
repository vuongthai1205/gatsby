
import React from "react";
import { Container } from "react-bootstrap";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import CardsC from "../components/CardsC";

const Hello = ({data}) => {
    return (
        <Container>
            <Layout>
                <title>Blog Post</title>
                
                <CardsC data={data}/>
            </Layout>
        </Container>
    )
}

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

export default Hello