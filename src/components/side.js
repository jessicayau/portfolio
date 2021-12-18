import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const SideContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 2.5%;
  width: 5%;
  opacity: 0;
  animation: fadeInAndUp 2s ease forwards 1s;

  @media (max-width: 900px) {
    left: 93.5%;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Side = ({ children }) => {
  return <SideContainer>{children}</SideContainer>;
};

Side.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Side;
