import React from "react";
import styled from "styled-components";
import { Socials } from "../components";

const StyledFooter = styled.footer`
  padding: 1rem 0;
  text-align: center;

  p {
    font-size: var(--font-sm);
  }
`;

const SocialsList = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;
const Footer = () => {
  return (
    <StyledFooter>
      <SocialsList>
        <Socials />
      </SocialsList>
      <p>Designed & Built by Jessica ©{new Date().getFullYear()}</p>
    </StyledFooter>
  );
};

export default Footer;
