import React from "react";
import styled from "styled-components";

const SplashHeaderSectionDiv = styled.div`
  display: flex;
`;

export const SplashHeaderSection = ({ children }) => {
  return <SplashHeaderSectionDiv>{children}</SplashHeaderSectionDiv>;
};
