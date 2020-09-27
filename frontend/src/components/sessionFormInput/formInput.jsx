import React from "react";
import styled from "styled-components";

const SessionLabel = styled.label`
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;
`;

const SessionInput = styled.input`
  background: none;
  background-color: white;
  color: $sub-color;
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid $sub-color;
  margin: 25px 0;
`;

const SessionInputDiv = styled.div``;

export const SessionFornInput = () => (
  <SessionInputDiv>
    <SessionInput />
    <SessionLabel />
  </SessionInputDiv>
);
