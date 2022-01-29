import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const primaryButtonStyles = css`
  color: var(--button-color);
  background-color: var(--button-bg-color);
  border: 2px solid var(--button-bg-color);
`;

const secondaryButtonStyles = css`
  color: var(--button-color-secondary);
  background-color: var(--button-bg-color-secondary);
  border: 2px solid var(--button-bg-color);
`;

const getButtonStyles = props => {
  if (props.secondary) {
    return secondaryButtonStyles;
  } else {
    return primaryButtonStyles;
  }
};

const StyledButton = styled.button`
  display: inline-block;
  padding: 0.625rem 1.5rem;
  border-radius: var(--border-radius);
  font-family: var(--font-primary);
  font-size: var(--font-md);
  font-weight: 700;
  cursor: pointer;
  transition: all 500ms ease;

  ${getButtonStyles}

  &:hover {
    background-color: var(--button-hover-bg-color);
    border: 2px solid var(--button-hover-bg-color);
    color: var(--button-hover-color);
    transition: all 500ms ease;
  }

  &:focus-visible {
    color: var(--font-color-primary);
    outline: 2px dashed black;
  }
`;

const Button = ({ children, ...otherProps }) => {
  return <StyledButton {...otherProps}>{children}</StyledButton>;
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Button;
