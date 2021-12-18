import React from "react";
import styled from "styled-components";
import { EmailIcon } from "../icons";
import { Form } from "../../components";

const ContactSection = styled.section`
  min-height: 85vh;

  .section-heading {
    justify-content: center;

    &::before {
      content: "";
      width: 100%;
      max-width: 250px;
      height: 1px;
      margin-right: 1rem;
      align-self: center;
      background-color: var(--font-color-primary);

      @media (max-width: 600px) {
        display: none;
      }
    }
  }
`;

const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8%;

  span {
    font-size: var(--font-lg);
  }

  .contact-info {
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 1rem;
    padding-top: 3rem;
    font-size: var(--font-md);

    svg {
      height: 2rem;
      width: 2rem;
      transform-origin: bottom;
      animation: bounce 2s cubic-bezier(0.28, 0.84, 0.42, 1) infinite;
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const Contact = () => {
  return (
    <ContactSection id="contact">
      <h2 className="section-heading">Let's Connect</h2>
      <ContactContent>
        <div className="contact-text">
          <span>Thanks for dropping by!</span>
          <p>
            If you'd like to chat about any job opportunities you may have
            available or cool projects you think we should collaborate on, feel
            free to contact me! You can connect with me on social media, by
            email, or by sending me a message here.
          </p>
          <div className="contact-info">
            <EmailIcon />
            <a
              href="mailto:jess.yau051@gmail.com"
              aria-label="email"
              target="_blank"
              rel="noreferrer"
            >
              jess.yau051@gmail.com
            </a>
          </div>
        </div>
        <Form />
      </ContactContent>
    </ContactSection>
  );
};

export default Contact;
