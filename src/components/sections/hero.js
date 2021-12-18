import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import { Button } from "../../components";

const HeroSection = styled.section`
  min-height: calc(100vh - 5rem);
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: 1.5rem;
  align-items: center;
  padding: 4rem 5%;

  .hero-content {
    p {
      font-size: var(--font-xl);
      font-weight: 700;
      letter-spacing: 2px;
      margin-bottom: 0.5rem;
      opacity: 0;
      animation: fadeInAndUp 1s ease forwards;
    }
    h1 {
      opacity: 0;
      animation: fadeInAndUp 1s ease forwards 0.5s;
    }
    h2 {
      max-width: 1200px;
      opacity: 0;
      animation: fadeInAndUp 1s ease forwards 1s;
    }
    a {
      margin-top: 1rem;
      opacity: 0;
      animation: fadeInAndUp 1s ease forwards 1.5s;
    }
    .resume-button {
      display: none;
    }
  }

  @media (max-width: 900px) {
    min-height: 700px;
    grid-template-columns: 1fr;
    padding: 4rem 10%;
    gap: 1rem;

    img {
      max-height: 350px;
      max-width: 350px;
      margin: 0 auto;
    }
    .hero-content {
      a {
        max-width: 150px;
        padding: 0.8rem;
        margin-right: 0.5rem;
      }
    }
  }

  @media (max-width: 768px) {
    .hero-content {
      .resume-button {
        display: inline-block;
        margin-right: 0;
      }
    }
  }

  @media (max-width: 649px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 425px) {
    gap: 0;
  }
`;

const Hero = () => {
  return (
    <HeroSection>
      <StaticImage
        src="../../images/girl-transparent.png"
        alt="cartoon girl"
        placeholder="blurred"
      />
      <div className="hero-content">
        <p>Hello, I'm</p>
        <h1 className="large-heading">Jessica Yau</h1>
        <h2 className="medium-heading">
          I design and build applications and aesthetic, interactive experiences
          with technology
        </h2>
        <Button as="a" href="/#projects">
          View Projects
        </Button>
        <Button
          as="a"
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="resume-button"
          secondary
        >
          Resume
        </Button>
      </div>
    </HeroSection>
  );
};

export default Hero;
