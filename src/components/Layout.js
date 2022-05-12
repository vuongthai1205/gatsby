import React from "react";
import Header from "./Header";
import {StaticQuery, graphql } from "gatsby";
import Footer from "./Footer";
import Sidebar from "./sidebar";
import { Container} from "react-bootstrap";



const Layout = (props) => {
    const {children} = props;
    return (
        <StaticQuery
          query={graphql`
            query {
              site {
                siteMetadata {
                  title
                }
              }
              topics: allMarkdownRemark(
                sort: { order: DESC, fields: [frontmatter___date] }
              ) {
                edges {
                  node {
                    frontmatter {
                      categories
                      tags
                    }
                  }
                }
              }
            }
          `}
          render={(data) => (
            <Container>
              
              <div className="app" style={{paddingTop: 56}}>
                  <Header title={data.site.siteMetadata.title} edges={data.topics.edges}/>
                  <div className="content">{children}</div>
                  <Sidebar edges={data.topics.edges}/>
                  <Footer/>
              </div>
            </Container>
            )}
        />
    )
}


export default Layout