import React from "react";
import styled from "styled-components";
import { Button } from "../components";
import { SendIcon } from "./icons";

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 0.5rem;
    margin-top: 0;
  }
`;

const StyledInput = styled.input`
  padding: 0.625rem;
  border: 2px solid var(--border-color);
  border-radius: var(--border-radius);
  resize: none;
  font-family: var(--font-primary);
  font-size: var(--font-sm);

  &::placeholder {
    color: var(--font-color-tertiary);
  }
  &:focus {
    outline: 2px solid var(--border-color);
  }
`;

const StyledTextarea = styled.textarea`
  height: 150px;
  padding: 0.625rem;
  border: 2px solid var(--border-color);
  border-radius: var(--border-radius);
  font-family: var(--font-primary);
  font-size: var(--font-sm);
  resize: none;

  &::placeholder {
    color: var(--font-color-tertiary);
  }

  &:focus {
    outline: 2px solid var(--border-color);
  }
`;

const Form = () => {
  return (
    <FormContainer method="post" action="#">
      <label htmlFor="name" className="visually-hidden">
        Name
      </label>
      <StyledInput
        type="text"
        name="name"
        id="name"
        placeholder="Name"
        maxLength="50"
        required
      />

      <label htmlFor="email" className="visually-hidden">
        Email
      </label>
      <StyledInput
        type="email"
        name="email"
        id="email"
        placeholder="Email"
        maxLength="320"
        required
      />

      <label htmlFor="message" className="visually-hidden">
        Message
      </label>
      <StyledTextarea
        name="message"
        id="message"
        placeholder="Message"
        required
      />

      <Button type="submit">
        Send Message
        <SendIcon />
      </Button>
    </FormContainer>
  );
};

export default Form;
