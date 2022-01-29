import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Toggle } from "../components";

const StyledHeader = styled.header`
  position: fixed;
  top: ${props => (props.visible ? 0 : "-5rem")};
  width: 100%;
  height: 5rem;
  padding: 0 5%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--header-bg-color);
  box-shadow: 0 1px 5px #e1bcca;
  z-index: 10;
  transition: all 300ms ease;
  opacity: 0;
  animation: slideDown 1s ease forwards;

  .logo {
    font-size: 1.8rem;
    font-family: var(--font-secondary);
    font-weight: bold;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  margin-left: auto;
  gap: 2rem;
  font-size: 1.1rem;

  .nav-link {
    position: relative;
    margin: 0;

    &::after {
      content: "";
      width: 100%;
      height: 2px;
      position: absolute;
      bottom: -0.3rem;
      left: 0;
      right: 0;
      background-color: var(--font-color-primary);
      transform: scaleX(0);
      transform-origin: center;
      transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    }
    &:hover {
      &::after {
        transform: scaleX(1);
      }
    }
  }

  @media (max-width: 768px) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 300px;
    flex-direction: column;
    justify-content: center;
    gap: 1.5rem;
    background-color: var(--header-bg-color);
    font-size: 1.3rem;
    box-shadow: 0 1px 10px #e1bcca;
    transform: ${props =>
      props.menuIsOpen ? "translateY(0)" : "translateY(-150%)"};
    transition: transform 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
    z-index: 5;
  }
`;

const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const handleMenu = () => {
    if (menuIsOpen) {
      setMenuIsOpen(!menuIsOpen);
    } else return;
  };

  const handleScroll = useCallback(() => {
    const currentScrollPos = window.pageYOffset;
    if (currentScrollPos > 80) {
      setVisible(prevScrollPos > currentScrollPos);
    }
    setPrevScrollPos(currentScrollPos);
  }, [prevScrollPos]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <StyledHeader className="header" visible={visible}>
      <div className="logo">
        <a href="/">JY</a>
      </div>
      <Nav menuIsOpen={menuIsOpen}>
        <a className="nav-link" href="/#about" onClick={handleMenu}>
          About
        </a>
        <a className="nav-link" href="/#projects" onClick={handleMenu}>
          Projects
        </a>
        <a className="nav-link" href="/#contact" onClick={handleMenu}>
          Contact
        </a>
      </Nav>
      <Toggle
        toggleMenu={() => setMenuIsOpen(prev => !prev)}
        menuIsOpen={menuIsOpen}
      />
    </StyledHeader>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
