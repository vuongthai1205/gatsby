import * as React from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from "../components/Slider";
import AcordionC from "../components/AcordionC";
import FormC from "../components/FormC";
import { Container, Form } from "react-bootstrap";
import TabC from "../components/TabC";
import CardsC from "../components/CardsC";
import Layout from "../components/Layout";
import { graphql } from "gatsby";



// markup
const IndexPage = ({data}) => {
  return (
    <Container>
      <title >Home Page</title>
      <Layout>
        <Slider/>
        <CardsC data={data}/>
        <FormC/>
        <AcordionC/>
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



export default IndexPage
