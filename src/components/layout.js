/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
// import { useStaticQuery, graphql } from "gatsby";
import { useLocation } from "@reach/router";
import { Header, Footer, Intro, Seo, Side, Socials } from "../components";
import { GlobalStyle } from "../styles";

const PageContainer = styled.div`
  position: ${props => (props.isLoaded ? "static" : "absolute")};
  top: 0;
  min-height: 100vh;
  width: 100%;
  padding-top: 5rem;
  background-color: var(--bg-color);
  transform: scale(0, 0);
  animation: animate 600ms ease-in forwards 2s;
  overflow-x: hidden;
  z-index: 5;
`;

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `);

  const [isLoaded, setIsLoaded] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (isLoaded) {
      if (location.hash) {
        const id = location.hash.substring(1);
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView();
        }
      }
    }
    const timeout = setTimeout(() => {
      setIsLoaded(true);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [isLoaded, location]);

  return (
    <>
      <Seo title="Jessica" />
      <GlobalStyle />
      <div className="root">
        {isLoaded && (
          <Header
          // visible={visible}
          // siteTitle={data.site.siteMetadata?.title || `Title`}
          />
        )}
        <Intro isLoaded={isLoaded} />
        <PageContainer isLoaded={isLoaded}>
          {isLoaded && (
            <>
              <main>{children}</main>
              <Footer />
            </>
          )}
        </PageContainer>
        {isLoaded && (
          <Side>
            <Socials />
          </Side>
        )}
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
