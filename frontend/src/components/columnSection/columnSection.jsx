import React from "react";
import { ColSection } from "../wrapper/wrapper";
import { GreyH6 } from "../text/text";
import styled from "styled-components";

const SectionTitleDiv = styled.div`
  padding-top: 4px;
  width: 100%;
  display: flex;
  align-items: center;
  height: 30px;
  border-bottom: 1px solid #f2f2f2;
`;

export const ColumnSection = ({ title, children }) => {
  return (
    <ColSection>
      <SectionTitleDiv>
        <GreyH6>{title}</GreyH6>
      </SectionTitleDiv>
      {children}
    </ColSection>
  );
};
