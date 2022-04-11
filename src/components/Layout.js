import React from "react";
import Header from "./Header";
import {StaticQuery, graphql } from "gatsby";
import Footer from "./Footer";
import { Container } from "react-bootstrap";


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
            }
          `}
          render={(data) => (
            <div className="app">
            <Header title={data.site.siteMetadata.title}/>
            {children}
            <Footer/>
        </div>)}
        />
    )
}


export default Layout