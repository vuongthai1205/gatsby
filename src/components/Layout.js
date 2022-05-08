import React from "react";
import Header from "./Header";
import {StaticQuery, graphql } from "gatsby";
import Footer from "./Footer";


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
            <div className="app" style={{paddingTop: 56}}>
            <Header title={data.site.siteMetadata.title}/>
            {children}
            <Footer/>
        </div>)}
        />
    )
}


export default Layout