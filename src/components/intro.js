import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledIntro = styled.div`
  display: ${props => (props.isLoaded ? "none" : "flex")};
  height: 100vh;
  font-family: var(--font-secondary);
  background-color: var(--intro-bg-color);
  justify-content: center;
  align-items: center;

  span {
    color: var(--font-color-secondary);
    opacity: 0;
    font-size: clamp(4rem, 15vw, 15rem);
    animation: fadeInSlideUp 2s ease forwards;
  }
`;

const Intro = ({ isLoaded }) => {
  return (
    <StyledIntro isLoaded={isLoaded}>
      <span>Hello</span>
    </StyledIntro>
  );
};

Intro.propTypes = {
  isLoaded: PropTypes.bool.isRequired,
};

export default Intro;
