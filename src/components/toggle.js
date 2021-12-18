import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const ToggleBtnContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.6rem;
  height: 1.6rem;
  padding: 0;
  border: none;
  background-color: transparent;
  z-index: 10;
  cursor: pointer;

  span {
    position: relative;
    width: 24px;
    height: 2px;
    background-color: ${props =>
      props.menuIsOpen ? "transparent" : "var(--font-color-primary)"};
    border-radius: 5px;
    transition: all 250ms ease-in-out;

    &::before,
    &::after {
      content: "";
      position: absolute;
      left: 0;
      width: 24px;
      height: 2px;
      background-color: ${props =>
        props.menuIsOpen
          ? "var(--font-color-tertiary)"
          : "var(--font-color-primary)"};
      border-radius: 5px;
      transition: all 250ms ease-in-out;
    }

    &::before {
      transform: ${props =>
        props.menuIsOpen ? "rotate(-135deg)" : "translateY(-.5rem)"};
    }

    &::after {
      transform: ${props =>
        props.menuIsOpen ? "rotate(135deg)" : "translateY(.5rem)"};
    }
  }

  @media (min-width: 769px) {
    display: none;
  }
`;

const Toggle = ({ menuIsOpen, toggleMenu }) => {
  return (
    <ToggleBtnContainer
      menuIsOpen={menuIsOpen}
      onClick={toggleMenu}
      aria-label="menu"
    >
      <span></span>
    </ToggleBtnContainer>
  );
};

Toggle.propTypes = {
  menuIsOpen: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
};
export default Toggle;
