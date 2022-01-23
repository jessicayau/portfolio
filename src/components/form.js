import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "../components";
import { SendIcon } from "./icons";

const FormContainer = styled.div`
  .formStatus {
    margin-top: 2rem;
    text-align: center;
  }
`;

const StyledForm = styled.form`
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
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState("");

  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  const handleSubmit = e => {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contactForm", ...contactInfo }),
    })
      .then(() => {
        setContactInfo({
          name: "",
          email: "",
          message: "",
        });
        setFormStatus("Thank you for getting in touch!");
        setTimeout(() => setFormStatus(""), 5000);
      })
      .catch(error => {
        setFormStatus(`${error} - Try again later`);
        setTimeout(() => setFormStatus(""), 5000);
      });
  };

  const handleInputChange = e => {
    const { value, name } = e.target;
    setContactInfo({
      ...contactInfo,
      [name]: value,
    });
  };

  return (
    <FormContainer>
      <StyledForm
        name="contactForm"
        data-netlify="true"
        onSubmit={handleSubmit}
      >
        <label htmlFor="name" className="visually-hidden">
          Name
        </label>
        <StyledInput
          type="text"
          name="name"
          id="name"
          value={contactInfo.name}
          placeholder="Name"
          maxLength="50"
          onChange={handleInputChange}
          required
        />
        <label htmlFor="email" className="visually-hidden">
          Email
        </label>
        <StyledInput
          type="email"
          name="email"
          id="email"
          value={contactInfo.email}
          placeholder="Email"
          maxLength="320"
          onChange={handleInputChange}
          required
        />
        <label htmlFor="message" className="visually-hidden">
          Message
        </label>
        <StyledTextarea
          name="message"
          id="message"
          value={contactInfo.message}
          placeholder="Message"
          onChange={handleInputChange}
          required
        />
        <Button type="submit">
          Send Message
          <SendIcon />
        </Button>
      </StyledForm>
      <div className="formStatus">{formStatus}</div>
    </FormContainer>
  );
};

export default Form;
