import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";

const AboutSection = styled.section`
  min-height: 80vh;
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    padding-bottom: 10%;
  }
`;

const AboutText = styled.div`
  h3 {
    margin-top: 2rem;
    font-size: var(--font-lg);
    letter-spacing: 1px;
  }

  @media (max-width: 900px) {
    order: 1;
  }
`;

const SkillsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 2rem;

  li {
    font-size: var(--font-sm);
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const StyledImg = styled.div`
  max-width: 300px;
  justify-self: center;

  img {
    width: 100%;
  }
`;

const About = () => {
  return (
    <AboutSection id="about">
      <h2 className="section-heading">About Me</h2>
      <AboutContent>
        <AboutText>
          <p>
            I'm Jessica, a Boston-based software engineer with a passion for
            creating aesthetic and user-friendly digital experiences. As a
            former R&D cosmetic chemist, I love working with color and I have a
            knack for thinking out of the box to find creative solutions to
            problems.
          </p>
          <p>
            My journey in web development began as a young adult during the days
            of Xanga, Tumblr, and Asian Avenue. I rediscovered my love for web
            development a few years ago and since then I have also expanded my
            knowledge and skillset to include two programming languages,
            fullstack development, webscraping, automation, and RESTful API
            development.
          </p>
          <p>
            When I'm not coding and building things on the web, I enjoy playing
            Tetris 99 and other video games, solving logic puzzles, exploring
            new places, and going out for bubble tea with friends.
          </p>
          <h3>Tech Skillset</h3>
          <SkillsList>
            <li>HTML5</li>
            <li>CSS3/SCSS</li>
            <li>JavaScript ES6+</li>
            <li>React/Redux</li>
            <li>Git</li>
            <li>Python</li>
            <li>Django</li>
            <li>Flask</li>
            <li>MySQL</li>
            <li>Firebase</li>
            <li>Bootstrap</li>
            <li>Gatsby</li>
          </SkillsList>
        </AboutText>
        <StyledImg>
          <StaticImage
            src="../../images/profile.png"
            alt="headshot"
            placeholder="blurred"
          />
        </StyledImg>
      </AboutContent>
    </AboutSection>
  );
};

export default About;
