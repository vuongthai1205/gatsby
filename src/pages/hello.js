import Greeting from "../components/greeting";
import React from "react";
import { Container } from "react-bootstrap";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import CardsC from "../components/CardsC";

const Hello = ({data}) => {
    let infos = [
        {
            id:1,
            name: "Thái Gia Vương",
            age: 18
        },
        {
            id:2,
            name: "Lê Văn Vương",
            age: 11
        },
        {
            id:3,
            name: "Phạm Thị Vương",
            age: 12
        }
    ]
    return (
        <Container>
            <Layout>
                <title>Hello</title>
                {infos.map(info => {
                    return (
                        <Greeting name={info.name} age={info.age}/>
                    )
                })}
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