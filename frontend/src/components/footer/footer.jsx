import React from "react";
import styled from "styled-components";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const FooterDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export const Footer = () => (
  <FooterDiv>
    <GitHubIcon />
    <LinkedInIcon />
  </FooterDiv>
);
