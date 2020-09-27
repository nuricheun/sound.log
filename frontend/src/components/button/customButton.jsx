import React from "react";
import styled, { css } from "styled-components";

const RegularButton = styled.button`
  display: flex;
  width: 100px;
  height: 30px;
  vertical-align: middle;
  letter-spacing: 0.5px;
  line-height: 50px;
  font-size: 15px;
  border-radius: 5px;
  background-color: transparent;
  color: #fff;
  font-family: "Roboto", sans-serif;
  font-weight: 100;
  font-weight: bolder;
  border: 1px solid rgb(212, 211, 211);
  border-color: #ccc;
  cursor: pointer;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  &:focus {
    outline: none;
  }
  &:hover {
    border-color: #fff;
  }
  ${(props) =>
    props.orange &&
    css`
      width: 150px;
      background-color: #ff7802;
      border-color: #ff7802;
      &:hover {
        border-color: #ff7802;
      }
    `}
`;

export const CustomButton = ({ text, orange, handleClick }) => (
  <RegularButton orange={orange} onClick={handleClick}>
    {text}
  </RegularButton>
);
