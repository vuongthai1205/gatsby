import * as React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from "../components/Slider";
import AcordionC from "../components/AcordionC";
import FormC from "../components/FormC";
import { Container} from "react-bootstrap";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import CarouselsC from "../components/CarouselsC";
// import '../assets/css';



// markup
const IndexPage = ({data}) => {
  console.log(data)
  return (
    <Container>
      <title >Luật Thái Gia</title>
      <Layout>
        <CarouselsC/>
        <Slider/>
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


export default IndexPage
