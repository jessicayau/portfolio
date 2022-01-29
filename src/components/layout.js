import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Header, Footer, Seo, Side, Socials } from "../components";
import { GlobalStyle } from "../styles";

const PageContainer = styled.div`
  padding-top: 5rem;
  background-color: var(--bg-color);
`;

const Layout = ({ children }) => {
  return (
    <>
      <Seo title="Jessica" />
      <GlobalStyle />
      <div className="root">
        <PageContainer>
          <Header />
          <main>{children}</main>
          <Footer />
          <Side>
            <Socials />
          </Side>
        </PageContainer>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
