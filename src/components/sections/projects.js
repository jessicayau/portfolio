import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { Navigation, Pagination, Autoplay, A11y, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import styled from "styled-components";
import { GithubIcon, LinkIcon } from "../icons";

const ProjectsSection = styled.section`
  min-height: 100vh;

  @media (max-width: 1000px) {
    .project-content {
      grid-template-columns: 1fr;
      margin-bottom: 7rem;
    }
  }
`;

const ProjectContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  align-items: center;
  gap: 5%;
  margin-bottom: 10rem;

  &:last-of-type {
    margin-bottom: 5rem;
  }

  &:nth-of-type(2) {
    .project-text {
      order: -1;

      @media (max-width: 1000px) {
        order: 1;
      }
    }
  }

  .swiper {
    width: 100%;
    border-radius: 5px;

    .swiper-slide {
      width: 100%;
    }

    .swiper-pagination-bullet {
      border: 3px solid #ffffff;
      height: 1.2rem;
      width: 1.2rem;
    }
    .swiper-pagination-bullet-active {
      background-color: #000000;
    }

    .swiper-button-prev,
    .swiper-button-prev::after,
    .swiper-button-next,
    .swiper-button-next::after {
      font-size: 2rem;
      color: #000000;
    }

    .swiper-button-disabled {
      border: 3px solid #ffffff;
    }
  }

  img {
    height: auto;
  }
`;

const ProjectText = styled.div`
  .project-title {
    font-size: var(--project-title);
    font-family: var(--font-secondary);
    color: var(--font-color-tertiary);

    @media (max-width: 600px) {
      font-size: var(--project-title-mobile);
      margin-top: 1rem;
    }
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    column-gap: 1.5rem;

    li {
      position: relative;
      font-size: var(--font-sm);

      &::before {
        content: "";
        width: 106%;
        height: 9px;
        position: absolute;
        left: -3%;
        bottom: 3px;
        border-radius: 10px;
        background-color: rgba(255, 255, 255, 0.6);
        z-index: -1;
      }
    }
  }
`;

const ProjectLink = styled.a`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  margin-right: 2rem;

  svg {
    height: 28px;
    width: 28px;
    transition: all 250ms ease;
  }
  &:hover {
    svg {
      color: var(--icon-hover-color);
      transform: scale(1.2);
      transition: all 250ms ease;
    }
  }
`;

const Projects = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allFile(
        filter: {
          extension: { eq: "png" }
          sourceInstanceName: { eq: "projects" }
        }
        sort: { fields: relativePath }
      ) {
        edges {
          node {
            id
            relativeDirectory
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
      allMarkdownRemark(sort: { fields: frontmatter___id }) {
        nodes {
          html
          frontmatter {
            title
            id
            code
            live
            stack
            images
          }
        }
      }
    }
  `);

  const projects = data.allMarkdownRemark.nodes;
  const screenshots = data.allFile.edges.map(({ node }) => node);

  return (
    <ProjectsSection id="projects">
      <h2 className="section-heading">Featured Projects</h2>

      {projects &&
        projects.map((node, index) => {
          const { frontmatter, html } = node;
          const { title, stack, images, code, live } = frontmatter;
          const projectImages = screenshots.filter(
            node => node.relativeDirectory === images
          );

          return (
            <ProjectContent key={index} className="project-content">
              <Swiper
                modules={[Navigation, Pagination, Autoplay, A11y, EffectFade]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{
                  delay: 3500,
                }}
                effect="fade"
              >
                {projectImages.map((image, index) => (
                  <SwiperSlide key={index}>
                    <GatsbyImage
                      image={image.childImageSharp.gatsbyImageData}
                      alt="{title}"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
              <ProjectText className="project-text">
                <h3 className="project-title">{title}</h3>
                <ul>
                  {stack.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <div dangerouslySetInnerHTML={{ __html: html }}></div>
                <div className="project-links">
                  <ProjectLink
                    href={code}
                    aria-label="source code"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GithubIcon />
                    Source Code
                  </ProjectLink>
                  <ProjectLink
                    href={live}
                    aria-label="live demo"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkIcon />
                    Live Preview
                  </ProjectLink>
                </div>
              </ProjectText>
            </ProjectContent>
          );
        })}
    </ProjectsSection>
  );
};

export default Projects;
