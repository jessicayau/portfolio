import * as React from "react";
import styled from "styled-components";
import Seo from "../components/seo";
import { GlobalStyle } from "../styles";
import { Button } from "../components";
import { navigate } from "gatsby-link";

const PageWrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--bg-color);
`;

const NotFoundPage = () => (
  <>
    <GlobalStyle />
    <PageWrapper>
      <Seo title="404: Not found" />
      <h1>404: Not Found</h1>
      <p>Uh ohh...You just hit a route that doesn't exist.</p>
      <Button onClick={() => navigate("/")}>&#8592; Go Back</Button>
    </PageWrapper>
  </>
);

export default NotFoundPage;
