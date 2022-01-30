import React from "react";
import PropTypes from "prop-types";
import { Header, Footer, Seo, Side, Socials } from "../components";
import { GlobalStyle } from "../styles";

const Layout = ({ children }) => {
  return (
    <>
      <Seo title="Jessica" />
      <GlobalStyle />
      <div className="root">
        <Header />
        <main>{children}</main>
        <Footer />
        <Side>
          <Socials />
        </Side>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
