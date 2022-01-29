import React from "react";
import styled from "styled-components";
import {
  CodepenIcon,
  EmailIcon,
  GithubIcon,
  LinkedinIcon,
} from "../components/icons";

const StyledSocials = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;

  &::after {
    content: "";
    width: 2px;
    height: 80px;
    background-color: var(--font-color-primary);
  }

  li {
    display: flex;

    a {
      transition: all 300ms ease-in-out;

      &:hover {
        color: var(--icon-hover-color);
        transform: scale(1.3);
        transition: all 300ms ease-in-out;
      }
    }
  }

  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: center;
    gap: 2rem;

    &::after {
      display: none;
    }
  }
`;

const Socials = () => {
  return (
    <StyledSocials>
      <li>
        <a
          href="https://www.linkedin.com/in/jessyau"
          aria-label="linkedin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedinIcon />
        </a>
      </li>
      <li>
        <a
          href="https://github.com/jessicayau"
          aria-label="github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubIcon />
        </a>
      </li>
      <li>
        <a
          href="mailto:jess.yau051@gmail.com"
          aria-label="email"
          target="_blank"
          rel="noopener noreferrer"
        >
          <EmailIcon />
        </a>
      </li>
      <li>
        <a
          href="https://codepen.io/jess_"
          aria-label="codepen"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CodepenIcon />
        </a>
      </li>
    </StyledSocials>
  );
};

export default Socials;
